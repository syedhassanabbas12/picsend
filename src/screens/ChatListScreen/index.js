import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ChatListItem from '../../components/ChatListItem';
import ChatDataJSON from '../../../assets/data/chats.json';
import {useNavigation} from '@react-navigation/native';

const ChatListScreen = () => {
  const navigation = useNavigation();
  const chatData = ChatDataJSON;

  const onPressChat = item => {
    navigation.navigate('ChatScreen', {id: item.id, name: item.user.name});
  };

  const renderItem = ({item}) => (
    <ChatListItem chat={item} onPress={() => onPressChat(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ChatListScreen;
