import React, { useState } from "react";
import { useHeaderHeight } from '@react-navigation/elements'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import IconsContainer from "../../../components/Redirects/IconsContainer";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import { AntDesign } from "@expo/vector-icons";
import { viewStyles, textStyles, commonStyles } from "../../../styles";
import DividerBlack from "../../../components/Visual/DividerBlack";
import SignUpForm from "../../../components/Forms/SignUpForm";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const headerHeight = useHeaderHeight();

  const allowButton = () => {
    if (
      email.length !== 0 &&
      password.length !== 0 &&
      confirmPassword.length !== 0 &&
      firstName.length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={viewStyles.container}>
          <View style={viewStyles.topView}>
            <Image
              tintColor="black"
              source={require("spark-dating/assets/sparkblack.png")}
              style={commonStyles.icon}
            />
            <Text style={textStyles.formHeader}>Sign up with email</Text>
            <Text style={textStyles.subHeader}>
              Sign up with your email address.
            </Text>
            <View style={{ width: "100%", marginTop: 30 }}>
              <SignUpForm
                firstName={firstName}
                email={email}
                setEmail={setEmail}
                password={password}
                setFirstName={setFirstName}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
              />
            </View>
          </View>
          <View style={viewStyles.bottomView}>
            {/* <IconsContainer dark={true} style={{marginTop: 0}}/> */}
            {/* <DividerBlack style={{marginTop: 30, paddingBottom: 21, width: '80%'}}/> */}
            {allowButton() ? (
              <PrimaryButton onPress={() => {}}>Sign up</PrimaryButton>
            ) : (
              <PrimaryButton disabled={true}>Sign up</PrimaryButton>
            )}
            <Text style={[textStyles.text, { marginTop: 14 }]}>
              Secondary Text
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignUp;
