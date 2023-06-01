import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../pages/Authenticated/ProfileScreen';

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
    <ProfileStack.Screen name="ProfileStack" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

export default ProfileStackNavigator;
