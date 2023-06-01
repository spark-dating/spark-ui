import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/Authenticated/HomeScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    {/* <HomeStack.Screen name="Likes" component={Likes} /> */}
    {/* <HomeStack.Screen name="Messages" component={Messages} /> */}
    {/* <HomeStack.Screen name="Profile" component={Profile} /> */}
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
