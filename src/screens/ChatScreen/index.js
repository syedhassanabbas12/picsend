import React from 'react';
import {
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Buffer} from 'buffer';
import {imageToBase64} from '../../utils/parser';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image as ImageCompressor} from 'react-native-compressor';
import LZString from 'lz-string';
import MessageBubble from '../../components/MessageBubble';
import InputBox from '../../components/InputBox';
import messagesJSON from '../../../assets/data/messages.json';
import styles from './styles';
import bg from '../../../assets/images/BG.png';

const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [messages, setMessages] = React.useState(messagesJSON || []);
  const [inputText, setInputText] = React.useState('');
  const [selectedImage, setImage] = React.useState('');
  const [compressedString, setCompressedString] = React.useState('');

  React.useEffect(() => {
    navigation.setOptions({title: route.params.name});
  }, [navigation, route.params.name]);

  const openGallery = async () => {
    const options = {
      mediaType: 'photo',
      quality: 0.11,
      selectionLimit: 1,
    };

    const result = await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // console.log('Image URI: ', response.assets[0]);
        return response.assets[0];
        // You can handle the selected image here
      }
    });

    if (result.assets && result.assets.length > 0) {
      const imagePath = result.assets[0].uri;
      console.log('---------------:');
      console.log('ORIGINAL SIZE:');
      const base64 = await imageToBase64(imagePath);
      const buffer = Buffer.from(base64, 'base64');
      const bufferStr = buffer.toString();
      const hexString = Buffer.from(base64, 'base64').toString('hex');
      console.log('wow->hex string: ', hexString.length);
      console.log('BUFFER SIZE:');
      console.log('wow->bytes: ', bufferStr.length);
      console.log(
        'wow->bytes in compression: ',
        LZString.compress(bufferStr).length,
      );
      console.log('COMPRESSED SIZE:');
      console.log('wow->base85 String: ', 'base85Encoded');
      const compressedImage = await ImageCompressor.compress(imagePath, {
        quality: 0.1,
      });
      console.log('COMPRESSED IMAGE SIZE:');
      const base64Compressed = await imageToBase64(compressedImage);
      console.log('COMPRESSED STRING SIZE:');
      const compressedStr = LZString.compress(base64Compressed);
      setCompressedString(compressedStr);
      console.log('wow->compression String: ', compressedStr.length);
      setImage({uri: base64Compressed});
      setInputText(result.assets[0]?.fileName);
    }
  };

  const sendMessage = () => {
    if (inputText.trim()) {
      const smsProps = {
        uri: selectedImage,
        isImage: !!selectedImage,
        sender: 'me',
        id: Date.now().toString(),
        text: selectedImage ? '' : inputText,
      };

      setMessages([
        ...messages,
        {...smsProps},
        // Below one is ONLY for testing purpose, remove it once testing completed
        {...smsProps, sender: '', id: Math.random().toString()},
      ]);
    }
    setInputText('');
  };

  const renderItem = ({item}) => (
    <MessageBubble
      message={item.text}
      isImage={item.isImage}
      user={item.user}
      createdAt={item.createdAt}
      uri={item.uri}
    />
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ImageBackground source={bg} style={styles.container}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.messageList}
          inverted
        />
        {/* <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={openGallery}>
          <Icon name="attach" size={30} />
        </TouchableOpacity>
        <TextInput
          editable={!selectedImage}
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message"
          multiline={true}
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View> */}
        <InputBox onSend={sendMessage} onAttach={openGallery} />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
