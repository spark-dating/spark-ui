import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, TextStyle, Text, ViewStyle, TouchableHighlight } from 'react-native';
import * as Haptics from 'expo-haptics';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';


interface PrimaryButtonProps {
  children: string;
  onPress: () => void;
  style?: ViewStyle; // added this line

}

const PrimaryButton: FC<PrimaryButtonProps> = ({children, onPress, style}) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const pressHandler = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };
  


  return (
    <TouchableHighlight underlayColor={'#1B5F56'} style={[styles.button, style]} activeOpacity={0.8} onPress={pressHandler}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 295,
    height: 56,
    backgroundColor: '#24786D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'OpenSans_700Bold',
  },
});

export default PrimaryButton;