import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, TextStyle, Text } from 'react-native';
import OpenSansText from '../OpenSansText';


const PrimaryButton: FC = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Press Me</Text>
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
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    // fontWeight: 'bold',
    // fontFamily: 'OpenSans-Bold',
  },
});

export default PrimaryButton;
