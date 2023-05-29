import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, TextStyle, Text } from 'react-native';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';


interface PrimaryButtonProps {
  onPress: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({children, onPress}) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
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