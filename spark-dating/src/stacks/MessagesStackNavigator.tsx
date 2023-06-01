import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from '../pages/Authenticated/MessagesScreen';

const MessagesStack = createStackNavigator();

const MessagesStackNavigator = () => (
  <MessagesStack.Navigator screenOptions={{ headerShown: false }}>
    <MessagesStack.Screen name="Messages" component={MessagesScreen} />
  </MessagesStack.Navigator>
);

export default MessagesStackNavigator;
