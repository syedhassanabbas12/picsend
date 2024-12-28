import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import dayjs from 'dayjs';
dayjs.extend(require('dayjs/plugin/relativeTime'));

const MessageBubble = ({message, user, isImage, uri, createdAt}) => {
  // console.log('MessageBubble -> uri', uri);
  return (
    <View
      style={[
        user.id === 'u1' ? styles.sent : styles.received,
        styles.messageBubble,
      ]}>
      <Text style={styles.messageText}>{message}</Text>
      <Text style={styles.time}>{dayjs(createdAt).fromNow()}</Text>
      {/* {uri && <Text style={styles.messageText}>{uri}</Text>}
      {isImage && <Image source={{uri}} style={styles.image} />} */}
      {/* {isImage && (
        <Image
          source={{uri: `data:image/png;base64,${uri.uri}`}}
          style={styles.image}
        />
      )} */}
    </View>
  );
};

MessageBubble.propTypes = {
  message: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default MessageBubble;
