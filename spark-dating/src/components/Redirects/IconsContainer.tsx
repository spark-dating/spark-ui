import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';


const CircleIcon = ({ children }) => {
  return (
    <View style={styles.circle}>
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
    <View style={[styles.container, style]}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <CircleIcon>
          <FontAwesome name="facebook" size={24} color={color} />
        </CircleIcon>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <CircleIcon>
          <AntDesign name="google" size={24} color={color} />
        </CircleIcon>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <CircleIcon>
          <Ionicons name="logo-apple" size={24} color={color} />
        </CircleIcon>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#797C7B',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconsContainer;
