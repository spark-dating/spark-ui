import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStackNavigator from '../../stacks/HomeStackNavigator';
import LikesStackNavigator from '../../stacks/LikesStackNavigator';
import MessagesStackNavigator from '../../stacks/MessagesStackNavigator';
import ProfileStackNavigator from '../../stacks/ProfileStackNavigator';
import { PRIMARY_COLOR } from '../../constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_600SemiBold
} from "@expo-google-fonts/open-sans";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    OpenSans_600SemiBold
  });

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
        
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Likes') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
        
          // Here you can adjust icon size based on screen size
          const iconSize = wp('5%');  // Adjust this value as per your needs
        
          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        
      })}
      tabBarOptions={{
        activeTintColor: PRIMARY_COLOR,
        inactiveTintColor: 'gray',
        showLabel: false, // This will hide the label
        style: {
          height: hp('2%'),  // Adjust this value as per your needs
          paddingBottom: hp('1%'),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }} // Hide the header for HomeStackNavigator
      />
      <Tab.Screen
        name="Likes"
        component={LikesStackNavigator}
        options={{ headerShown: false }} // Hide the header for LikesStackNavigator
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStackNavigator}
        options={{ headerShown: false }} // Hide the header for MessagesStackNavigator
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{ headerShown: false }} // Hide the header for ProfileStackNavigator
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
