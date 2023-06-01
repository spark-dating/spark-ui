import * as React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';

import OnboardingStack from './stacks/OnboardingStack';
import BottomTabNavigator from './components/Navigation/BottomTabNavigator';

const App = () => {
  const user = null; // TODO: replace this with real authentication logic
  return (
    <NavigationContainer>
      {/* {user ? <BottomTabNavigator /> : <OnboardingStack />} */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
});
