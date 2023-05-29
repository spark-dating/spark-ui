import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';


import OnboardingStack from './stacks/OnboardingStack';
import UserStack from './stacks/UserStack';


const App = () => {
  const user = null; // TODO: replace this with real authentication logic
  return (
    <NavigationContainer>
      {/* {user ? <UserStack /> : <OnboardingStack />} */}
      <OnboardingStack />
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




// use this for fonts 


// import {
//   useFonts,
//   OpenSans_400Regular,
//   OpenSans_700Bold,
// } from '@expo-google-fonts/open-sans';
// 
// 
// let [fontsLoaded] = useFonts({
//   OpenSans_400Regular,
//   OpenSans_700Bold,
// });

// if (!fontsLoaded) {
//   return <Text>Loading...</Text>;
// }
