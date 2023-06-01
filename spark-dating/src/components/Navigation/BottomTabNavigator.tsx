import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeStackNavigator from '../../stacks/HomeStackNavigator';
import LikesStackNavigator from '../../stacks/LikesStackNavigator';
import MessagesStackNavigator from '../../stacks/MessagesStackNavigator';
import ProfileStackNavigator from '../../stacks/ProfileStackNavigator';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Likes') {
            iconName = focused ? 'favorite' : 'favorite-outline';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'message' : 'message-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} /> 
      <Tab.Screen name="Likes" component={LikesStackNavigator} />
      <Tab.Screen name="Messages" component={MessagesStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
