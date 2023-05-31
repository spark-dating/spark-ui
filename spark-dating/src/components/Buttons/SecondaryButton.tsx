import React, { FC } from 'react';
import { TouchableHighlight, StyleSheet, TextStyle, Text, ViewStyle } from 'react-native';
import * as Haptics from 'expo-haptics';

import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { buttonStyles } from '../../styles';

interface SecondaryButtonProps {
  children: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean; // added this line
}

const SecondaryButton: FC<SecondaryButtonProps> = ({ children, onPress, style, disabled }) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // update this
  }

  const pressHandler = () => {
    if (!disabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onPress();
    }
  };

  const backgroundColor = disabled ? '#BABABA' : '#BABABA';
  const textColor = disabled ? '#797C7B' : 'black';

  const styles = StyleSheet.create({
    button: {
      // width: 295,
      // height: 56,
      backgroundColor: disabled ? '#BABABA' : '#FFFFFF',
      // justifyContent: 'center',
      // alignItems: 'center',
      // borderRadius: 15,
    },
    buttonText: {
      color: textColor,
      // fontSize: 16,
      // fontFamily: 'OpenSans_700Bold',
    },
  });

  return (
    <TouchableHighlight
      underlayColor={backgroundColor}
      style={[buttonStyles.button, styles.button, style]}
      activeOpacity={disabled ? 1 : 0.8}
      onPress={pressHandler}
    >
      <Text style={[buttonStyles.text, styles.buttonText]}>{children}</Text>
    </TouchableHighlight>
  );
};

export default SecondaryButton;
