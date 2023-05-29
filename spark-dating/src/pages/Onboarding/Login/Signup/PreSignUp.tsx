import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import IconsContainer from '../../../../components/Redirects/IconsContainer';
import PrimaryButton from '../../../../components/Buttons/PrimaryButton';
import { AntDesign } from '@expo/vector-icons';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import DividerBlack from '../../../../components/Visual/DividerBlack';


const SignUpPreScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
        activeOpacity={0.8}
        style={styles.arrow}
      >
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <View style={{...styles.topView, width: '70%'}}>
        <Text style={styles.header}>Sign up</Text>
        <Text style={styles.subHeader}>
          Sign up with a social media account or your email address.
        </Text>
        <View style = {{marginTop: 200}}>
        <IconsContainer dark={true} style={{marginTop: 80}}/>
        <DividerBlack style={{marginTop: 30}}/>
        </View>
      </View>
      <View style={styles.bottomView}>
        <PrimaryButton
          onPress={() => navigation.navigate("Signup")}
        >
          Sign up with email
        </PrimaryButton>
        <Text style={[styles.text, { marginTop: 14 }]}>
            Already have an account? <Text style={{ color: "#24786D", fontFamily: 'OpenSans_700Bold' }}>Log in</Text>
          </Text>
      </View>
    </View>
  );
};

export default SignUpPreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrow: {
    position: 'absolute',
    top: 60,
    left: 40,
  },
  topView: {
    justifyContent: 'center',
    width: '90%',
    paddingTop: 140, 
  },
  bottomView: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 70,
  },
  subHeader: {
    color: '#797C7B',
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'OpenSans_400Regular',
    marginTop: 18,
  },
  header: {
    color: 'black',
    fontSize: 64,
    fontFamily: 'OpenSans_400Regular',
    marginTop: 18,
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'OpenSans_400Regular',
  },
});
