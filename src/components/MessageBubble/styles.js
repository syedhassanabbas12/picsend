import { StyleSheet } from "react-native";
export default StyleSheet.create({
  messageBubble: {
    maxWidth: "80%",
    // backgroundColor: '#DCF8C6', // '#DCF8C6' for sent, '#FFFFFF' for received
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  time: { color: "#888", alignSelf: "flex-end" },
  sent: {
    backgroundColor: "#DCF8C6", // '#DCF8C6' for sent, '#FFFFFF' for received
    alignSelf: "flex-end", // 'flex-end' for sent, 'flex-start' for received
  },
  received: {
    backgroundColor: "#FFFFFF", // '#DCF8C6' for sent, '#FFFFFF' for received
    alignSelf: "flex-start", // 'flex-end' for sent, 'flex-start' for received
  },
  messageText: {
    // fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    // marginTop: 5,
    backgroundColor: "black",
  },
});
