import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, TextStyle, Text, ViewStyle } from 'react-native';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

interface SecondaryButtonProps {
  onPress: () => void;
  style?: ViewStyle; // added this line
}

const SecondaryButton: FC<SecondaryButtonProps> = ({children, onPress, style}) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <TouchableOpacity style={[styles.button, style]} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
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
