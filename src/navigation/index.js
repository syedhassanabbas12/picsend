import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Routes
import ChatScreen from "../screens/ChatScreen";
import ChatListScreen from "../screens/ChatListScreen";
// Tabs
import MainTabNavigator from "./MainTabNavigot";
import NotImplementedScreen from "../screens/NotImplementedScreen";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Status" component={NotImplementedScreen} />
      <Stack.Screen name="Calls" component={NotImplementedScreen} />
      <Stack.Screen name="Camera" component={NotImplementedScreen} />
      <Stack.Screen name="Chats" component={ChatListScreen} />
      <Stack.Screen name="Settings" component={NotImplementedScreen} />

      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}
