// this is the intro page for the onboarding process

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
} from "react-native";
import SecondaryButton from "../../../components/Buttons/SecondaryButton";
import IconsContainer from "../../../components/Redirects/IconsContainer";
import DividerWhite from "../../../components/Visual/DividerWhite";
import { StatusBar, TouchableOpacity, TouchableHighlight } from "react-native";
import * as Haptics from "expo-haptics";
import { viewStyles, textStyles, commonStyles } from "../../../styles";
import { PRIMARY_COLOR } from "../../../constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

const OnboardingV2 = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  const [typewrittenText, setTypewrittenText] = useState("");
  const [typewrittenTextBold, setTypewrittenTextBold] = useState("");
  const [displaySubHeader, setDisplaySubHeader] = useState(false);
  const [navigationAway, setNavigationAway] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    // typewriter effect -----------------------------
    const text = "Experience the ";
    const textBold = "future of love...";
    let currentText = "";
    let currentTextBold = "";

    const typingTimer = setInterval(() => {
      if (currentText !== text) {
        const newText = currentText + text[currentText.length];
        setTypewrittenText(newText);
        currentText = newText;
      } else if (currentTextBold !== textBold) {
        const newTextBold = currentTextBold + textBold[currentTextBold.length];
        setTypewrittenTextBold(newTextBold);
        currentTextBold = newTextBold;
      } else {
        clearInterval(typingTimer);
        setDisplaySubHeader(true);
      }
    }, 50);
    return () => {
      clearInterval(typingTimer);
      setInitialRender(false);
    };
  }, []);
  //---------------------------------------------------------------

  useEffect(() => {
    // haptic feedback -----------------------------
    const hapticTimer = setInterval(() => {
      if (!navigationAway && initialRender && !displaySubHeader) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } else {
        if (!navigationAway && initialRender) {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
        clearInterval(hapticTimer);
      }
    }, 50);

    return () => clearInterval(hapticTimer);
  }, [navigationAway, initialRender, displaySubHeader]);
  // ---------------------------------------------------------------

  if (!fontsLoaded) {
    // font failure
    return <Text>Loading...</Text>;
  }

  const loginRedirect = () => {
    // login redirect
    setNavigationAway(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate("Login");
  };

  const signUpRedirect = () => {
    // sign up redirect
    setNavigationAway(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate("PreSignUp");
  };

  return (
    <ImageBackground
      source={require("spark-dating/assets/backgrounds/Onboardingv2.jpg")}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" />
      <View style={viewStyles.containerIntro}>
        <View style={viewStyles.topView}>
          <Image
            tintColor="white"
            source={require("spark-dating/assets/sparkblack.png")}
            style={commonStyles.icon}
          />
          <Text style={textStyles.headerWhite}>
            {typewrittenText}
            {""}
            <Text style={textStyles.boldOnboarding}>{typewrittenTextBold}</Text>
          </Text>
          {displaySubHeader ? (
            <Text style={textStyles.subHeader}>
              Our AI-powered dating app redefines connections, turning digital
              encounters into lasting romance.
            </Text>
          ) : null}
        </View>
        <View style={viewStyles.bottomView}>
          <IconsContainer dark={false} style={{ marginTop: hp("10%") }} />
          <DividerWhite
            style={{
              marginTop: hp("3.75%"),
              paddingBottom: hp("2.625%"),
              width: wp("80%"),
            }}
          />
          <SecondaryButton onPress={signUpRedirect}>Sign up</SecondaryButton>
          <TouchableOpacity
            onPress={loginRedirect}
            activeOpacity={0.8}
            underlayColor={"#1B5F56"}
          >
            <Text style={[styles.textWhiteBold, { marginTop: 14 }]}>
              Existing account?{" "}
              <Text style={{ color: PRIMARY_COLOR }}>Log in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnboardingV2;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  textWhiteBold: {
    color: "white",
    fontSize: hp("1.70%"),
    fontFamily: "OpenSans_700Bold",
  },
});
