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

const IconsContainer = ({style, dark}) => {

  const color = dark ? 'black' : 'white';

  return (
    <View style={[styles.container, style]}>
      <CircleIcon>
        <FontAwesome name="facebook" size={24} color={color} />
      </CircleIcon>
      <CircleIcon>
        <AntDesign name="google" size={24} color={color} />
      </CircleIcon>
      <CircleIcon>
        <Ionicons name="logo-apple" size={24} color={color} />
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
