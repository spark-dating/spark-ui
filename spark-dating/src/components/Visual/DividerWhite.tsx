import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

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
    height: hp('0.05%'),
    color: '#CDD1D0',
    opacity: 0.3,
    backgroundColor: 'white',
  },
  text: {
    paddingHorizontal: wp('2%'),
    fontSize: hp('2%'),
    fontFamily: 'OpenSans_700Bold',
    color: 'white',
  },
});

export default DividerWhite;
