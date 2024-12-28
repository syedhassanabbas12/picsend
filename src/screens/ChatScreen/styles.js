import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  messageList: {
    // flex: 1,
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopColor: "#ccc",
    alignItems: "flex-end",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 5,
  },
  iconButton: {
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  sendButton: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 50,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
