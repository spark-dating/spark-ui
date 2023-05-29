import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const UserStack = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen name="Dashboard" component={} />
    <Stack.Screen name="Profile" component={} />
    <Stack.Screen name="Settings" component={} />
  </Stack.Navigator>
);

export default UserStack;
