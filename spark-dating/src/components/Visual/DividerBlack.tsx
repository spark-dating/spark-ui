import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


import {
  useFonts,
  OpenSans_400Regular
} from '@expo-google-fonts/open-sans';

const DividerBlack = ({style}) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
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
    height: hp('0.05%'),
    backgroundColor: '#CDD1D0',
    opacity: 1,
  },
  text: {
    paddingHorizontal: wp('2%'),
    fontSize: hp('2%'),
    fontFamily: 'OpenSans_400Regular',
    color: '#797C7B',
  },
});


export default DividerBlack;
