import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, TextStyle, Text, ViewStyle, TouchableHighlight } from 'react-native';
import * as Haptics from 'expo-haptics';
import { PRIMARY_COLOR } from '../../constants';
import { buttonStyles } from '../../styles';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

interface PrimaryButtonProps {
  children: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean; // added this line
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, onPress, style, disabled }) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const pressHandler = () => {
    if (!disabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onPress();
    }
  };

  const backgroundColor = disabled ? '#F3F6F6' : PRIMARY_COLOR;
  const textColor = disabled ? '#797C7B' : 'white';
  const pressColor = disabled ? '#F3F6F6' : '#1B5F56';

  const styles = StyleSheet.create({
    button: {
      backgroundColor: backgroundColor,
      // width: 295,
      // height: 56,
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
      underlayColor={pressColor}
      style={[buttonStyles.button, styles.button, style]}
      activeOpacity={disabled ? 1 : 0.8}
      onPress={pressHandler}
    >
      <Text style={[buttonStyles.text, styles.buttonText]}>{children}</Text>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
