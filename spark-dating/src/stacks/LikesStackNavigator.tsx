import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LikesScreen from '../pages/Authenticated/LikesScreen';

const LikesStack = createStackNavigator();

const LikesStackNavigator = () => (
  <LikesStack.Navigator screenOptions={{ headerShown: false }}>
    <LikesStack.Screen name="LikesStack" component={LikesScreen} />
  </LikesStack.Navigator>
);

export default LikesStackNavigator;
