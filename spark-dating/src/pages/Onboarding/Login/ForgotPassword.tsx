import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import IconsContainer from '../../../components/Redirects/IconsContainer';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import { AntDesign } from '@expo/vector-icons';
import { viewStyles, textStyles, commonStyles } from '../../../styles';
import ForgotPasswordForm from '../../../components/Forms/ForgotPasswordForm';

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import DividerBlack from '../../../components/Visual/DividerBlack';

const ForgotPassword = ({ navigation }) => {


  const [email, setEmail] = useState('');


  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }



  return (
    <View style={viewStyles.container}>
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
        <Text style={textStyles.formHeader}>Forgot your password?</Text>
        <Text style={textStyles.subHeader}>
          We'll send you instructions to reset your password and regain access
          to your account.
        </Text>
        <View style={{ width: "100%", paddingTop: 50 }}>
          <ForgotPasswordForm email={email} setEmail={setEmail} />
        </View>
      </View>
      <View style={viewStyles.bottomView}>
        {email.length !== 0 ? <PrimaryButton onPress={() => {}}>Reset Password</PrimaryButton> : <PrimaryButton disabled={true}>Reset Password</PrimaryButton>}
        <Text style={[textStyles.text, { marginTop: 14 }]}>
        </Text>
      </View>
    </View>
  );
};

export default ForgotPassword;
