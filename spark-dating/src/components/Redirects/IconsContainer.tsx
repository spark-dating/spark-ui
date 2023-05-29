import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';

const CircleIcon = ({ children }) => {
  return (
    <View style={styles.circle}>
      {children}
    </View>
  );
};

const IconsContainer = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <CircleIcon>
        <FontAwesome name="facebook" size={24} color="white" />
      </CircleIcon>
      <CircleIcon>
        <AntDesign name="google" size={24} color="white" />
      </CircleIcon>
      <CircleIcon>
        <Ionicons name="logo-apple" size={24} color="white" />
      </CircleIcon>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconsContainer;
