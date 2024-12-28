import React, { useEffect, useState } from "react";
import { View, Text, Platform, PermissionsAndroid } from "react-native";
import Contacts from "react-native-contacts";

const NewMessageScreen = () => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    if (Platform.OS === "android") {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: "Contacts",
        message: "ContactsList app would like to access your contacts.",
        buttonPositive: "Accept",
      }).then((value) => {
        if (value === "granted") {
          Contacts.getAll().then(setContacts);
        }
      });
    } else {
      Contacts.getAll().then(setContacts);
    }
  }, []);
  // console.log(contacts.map(contact => contact.phoneNumbers));
  // console.log(Object.keys(contacts?.[0]));
  // console.log(contacts?.[0]?.phoneNumbers?.number);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewMessageScreen;
