import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const InputBox = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.warn(`Sending: ${message}`);
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" onPress={handleSend} />
      <TextInput
        style={styles.input}
        placeholder="Type a message"
        value={message}
        onChangeText={setMessage}
      />
      <MaterialIcons
        style={styles.sendButton}
        name="send"
        size={16}
        color="white"
        onPress={handleSend}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: "whitesmoke", // light gray
    borderTopWidth: 1,
    borderColor: "#ddd", // light gray
  },
  input: {
    flex: 1,
    // height: 40,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ddd", // light gray
    backgroundColor: "#f9f9f9", // light gray
  },
  sendButton: {
    marginHorizontal: 5,
    backgroundColor: "#25D366", // WhatsApp Green
    borderRadius: 20,
    padding: 7,
    overflow: "hidden",
  },
});

export default InputBox;
