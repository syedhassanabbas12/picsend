import React from 'react';
import {
  createBottomTabNavigator,
  TransitionSpecs,
} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatsScreen from '../screens/ChatListScreen';
import NotImplementedScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const tabBarIcon =
  ({route}) =>
  ({focused, color, size}) => {
    let iconName;

    if (route.name === 'Chats') {
      iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
    } else if (route.name === 'Status') {
      iconName = focused ? 'ellipse' : 'ellipse-outline';
    } else if (route.name === 'Calls') {
      iconName = focused ? 'call' : 'call-outline';
    } else if (route.name === 'Camera') {
      iconName = focused ? 'camera' : 'camera-outline';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'settings' : 'settings-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  };

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: tabBarIcon({route}),
        transitionSpec: TransitionSpecs.ShiftSpec,
        tabBarStyle: {
          backgroundColor: 'whitesmoke',
        },
        headerStyle: {
          backgroundColor: 'whitesmoke',
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Status" component={NotImplementedScreen} />
      <Tab.Screen name="Calls" component={NotImplementedScreen} />
      <Tab.Screen name="Camera" component={NotImplementedScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Settings" component={NotImplementedScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
