import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  useFonts,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

const DividerWhite = ({style}) => {
  let [fontsLoaded] = useFonts({
    OpenSans_700Bold,
  });

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
    height: 0.4,
    color: '#CDD1D0',
    opacity: 0.3,
    backgroundColor: 'white',
  },
  text: {
    paddingHorizontal: 8,
    fontSize: 16,
    fontFamily: 'OpenSans_700Bold',
    color: 'white',
  },
});

export default DividerWhite;
