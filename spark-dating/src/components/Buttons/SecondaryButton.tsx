import React, { FC } from 'react';
import { TouchableHighlight, StyleSheet, TextStyle, Text, ViewStyle } from 'react-native'
import * as Haptics from 'expo-haptics';

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

interface SecondaryButtonProps {
  children: string;
  onPress: () => void;
  style?: ViewStyle; 
}

const SecondaryButton: FC<SecondaryButtonProps> = ({children, onPress, style}) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // update this
  }

  const pressHandler = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };
  

  return (
    <TouchableHighlight underlayColor={'#BABABA'} style={[styles.button, style]} activeOpacity={0.8} onPress={pressHandler}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 295,
    height: 56,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'OpenSans_700Bold',
  },
});

export default SecondaryButton;
