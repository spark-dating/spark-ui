import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingV2 from '../pages/Onboarding/Intro/OnboardingV2';
import LoginScreen from '../pages/Onboarding/Login/LoginScreen';
import PreSignUp from '../pages/Onboarding/Signup/PreSignUp';
import ForgotPassword from '../pages/Onboarding/Login/ForgotPassword';
import SignUp from '../pages/Onboarding/Signup/SignUp';

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
    <Stack.Screen name="PreSignUp" component={PreSignUp} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="SignUp" component={SignUp} />
    {/* Questionnaire starts here */}

  </Stack.Navigator>
);

export default OnboardingStack;
