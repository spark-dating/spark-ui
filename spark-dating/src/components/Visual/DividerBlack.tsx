import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DividerBlack = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.line} />
      <Text style={styles.text}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  text: {
    paddingHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DividerBlack;
