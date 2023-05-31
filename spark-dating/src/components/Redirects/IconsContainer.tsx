import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { IconsContainerStyles } from '../../styles';


const CircleIcon = ({ children }) => {
  return (
    <View style={IconsContainerStyles.circle}>
      {children}
    </View>
  );
};


const IconsContainer = ({style, dark}) => {

  const onPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // add logic here for redirect
  };
  

  const color = dark ? 'black' : 'white';

  return (
    <View style={[IconsContainerStyles.container, style]}>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <CircleIcon>
          <FontAwesome name="facebook" size={24} color={color} />
        </CircleIcon>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <CircleIcon>
          <AntDesign name="google" size={24} color={color} />
        </CircleIcon>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <CircleIcon>
          <Ionicons name="logo-apple" size={24} color={color} />
        </CircleIcon>
      </TouchableOpacity>
    </View>
  );
};


export default IconsContainer;
