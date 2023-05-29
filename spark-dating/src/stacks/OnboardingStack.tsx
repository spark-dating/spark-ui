import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingV2 from '../pages/Onboarding/Intro/OnboardingV2';
import LoginScreen from '../pages/Onboarding/Login/Signup/LoginScreen';
import SignupScreen from '../pages/Onboarding/Login/Signup/SignupScreen';


const Stack = createStackNavigator();

const OnboardingStack = () => (
  <Stack.Navigator initialRouteName="OnboardingV2">
    <Stack.Screen name="OnboardingV2" component={OnboardingV2} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
  </Stack.Navigator>
);

export default OnboardingStack;
