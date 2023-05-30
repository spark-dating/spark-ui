import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import IconsContainer from '../../../components/Redirects/IconsContainer';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import { AntDesign } from '@expo/vector-icons';
import { viewStyles, textStyles, commonStyles } from '../../../styles';
import * as Haptics from 'expo-haptics';
import { PRIMARY_COLOR } from '../../../constants';

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import DividerBlack from '../../../components/Visual/DividerBlack';


const SignUpPreScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  const loginRedirect = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate("Login");
  };

  return (
    <View style={[viewStyles.container, {backgroundColor: 'white'}]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
        activeOpacity={0.8}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        style={commonStyles.arrow}
      >
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <View style={{...viewStyles.topView}}>
      <Image
            tintColor="black"
            source={require("spark-dating/assets/sparkblack.png")}
            style={styles.icon}/>
        <Text style={textStyles.header}>Sign up</Text>
        <Text style={textStyles.subHeader}>
          Sign up with a social media account or your email address.
        </Text>
        {/* <View style = {{marginTop: 200}}> */}
        </View>
      {/* </View> */}
      <View style={viewStyles.bottomView}>
        <IconsContainer dark={true} style={{marginTop: 80}}/>
        <DividerBlack style={{marginTop: 30, paddingBottom: 21, width: '80%'}}/>
        <PrimaryButton
          onPress={() => navigation.navigate("SignUp")}
        > 
          Sign up with email
        </PrimaryButton>
        <TouchableOpacity
            onPress={loginRedirect}
            activeOpacity={0.8}
            underlayColor={"#1B5F56"}
          >
        <Text style={[textStyles.text, { marginTop: 14 }]}>
            Already have an account? <Text style={{ color: PRIMARY_COLOR, fontFamily: 'OpenSans_700Bold' }}>Log in</Text>
          </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpPreScreen;

const styles = StyleSheet.create({
  icon : {
    width: 50,
    height: 50,
    zIndex: 1,
    alignSelf: 'center',
    marginTop: -20,
    marginBottom: 20,
  }
})