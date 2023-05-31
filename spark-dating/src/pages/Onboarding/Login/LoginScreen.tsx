import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import IconsContainer from '../../../components/Redirects/IconsContainer';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import { AntDesign } from '@expo/vector-icons';
import DividerBlack from '../../../components/Visual/DividerBlack';
import { viewStyles, textStyles, commonStyles } from '../../../styles';
import SignInForm from '../../../components/Forms/SigninForm';
import * as Haptics from 'expo-haptics';


import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_600SemiBold
} from '@expo-google-fonts/open-sans';
import { PRIMARY_COLOR } from '../../../constants';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const forgotPasswordRedirect = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate("ForgotPassword");
  };



  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[viewStyles.container, { backgroundColor: "white" }]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        activeOpacity={0.8}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        style={commonStyles.arrow}
      >
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <View style={viewStyles.topView}>
        <Image
          tintColor="black"
          source={require("spark-dating/assets/sparkblack.png")}
          style={commonStyles.icon}
        />
        <Text style={textStyles.formHeader}>Log in</Text>
        <Text style={textStyles.subHeader}>
          Welcome back! Sign in using a social media account or your email
          address.
        </Text>
        <View style={{ width: "100%", paddingTop: 50 }}>
          <SignInForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        </View>
        <DividerBlack
          style={{ marginTop: 30, paddingBottom: 20, width: "100%" }}
        />
        <IconsContainer dark={true} style={{ marginTop: 20 }} />
      </View>
      <View style={viewStyles.bottomView}>
        {email.length !== 0 && password.length !== 0 ? (
          <PrimaryButton onPress={() => {}}>Log in</PrimaryButton>
        ) : (
          <PrimaryButton disabled={true}>Log in</PrimaryButton>
        )}
        <TouchableOpacity
          onPress={forgotPasswordRedirect}
          activeOpacity={0.8}
          underlayColor={"#1B5F56"}
        >
          <Text
            style={[
              textStyles.boldText,
              { color: PRIMARY_COLOR, marginTop: 14 },
            ]}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
