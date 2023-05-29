import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingV2 from '../pages/Onboarding/Intro/OnboardingV2';
import LoginScreen from '../pages/Onboarding/Login/Signup/LoginScreen';
import PreSignUp from '../pages/Onboarding/Login/Signup/PreSignUp';


const Stack = createStackNavigator();

const OnboardingStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="OnboardingV2"
  >
    <Stack.Screen name="OnboardingV2" component={OnboardingV2} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={PreSignUp} />
  </Stack.Navigator>
);

export default OnboardingStack;
