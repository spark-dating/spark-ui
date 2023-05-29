import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SecondaryButton from '../../../components/Buttons/SecondaryButton';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

const OnboardingV2 = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style = {styles.header}>Experience the <Text style = {{fontFamily: 'OpenSans_700Bold'}}>future of love</Text></Text>
        <Text style = {styles.subHeader}>Our AI-powered dating app redefines connections, turning digital encounters into lasting romance.</Text>
      </View>
      <View style={styles.bottomView}>
        <SecondaryButton style={styles.button} onPress={() => navigation.navigate('Login')}>
          Sign up
        </SecondaryButton>
        <Text style = {[styles.text, {marginTop: 14}]}>Existing account? <Text style = {{color: '#24786D'}}>Log in</Text></Text>
      </View>
    </View>
  );
};

export default OnboardingV2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 70, // padding to push the contents away from the edges
  },
  topView: {
    justifyContent: 'center',
    paddingTop: 70, 
    width: '90%'
  },
  bottomView: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 70, // margin to push the button away from the bottom
  },
  text : {
    color: 'white',
    fontSize: 14,
    fontFamily: 'OpenSans_700Bold',
  },
  header : {
    color: 'white',
    fontSize: 64,
    fontFamily: 'OpenSans_400Regular',
  },
  subHeader: {
    color: '#B9C1BE',
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'OpenSans_400Regular',
    marginTop: 18
  }
});
