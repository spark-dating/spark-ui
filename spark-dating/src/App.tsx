import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';
import PrimaryButton from './components/Buttons/PrimaryButton';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('../assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'OpenSans' }}>Hello Expo!</Text>
      <PrimaryButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
});
