import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import dayjs from 'dayjs';
dayjs.extend(require('dayjs/plugin/relativeTime'));

const ChatListItem = ({chat, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: chat?.user?.image}} style={styles.profilePicture} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{chat?.user?.name}</Text>
        <Text style={styles.lastMessage}>{chat?.lastMessage?.text}</Text>
      </View>
      <Text style={styles.time}>
        {dayjs(chat?.lastMessage?.createdAt).fromNow()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    color: '#888',
    marginTop: 2,
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
});

export default ChatListItem;
