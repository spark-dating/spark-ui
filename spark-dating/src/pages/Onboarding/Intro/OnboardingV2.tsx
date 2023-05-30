import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, SafeAreaView } from 'react-native';
import SecondaryButton from '../../../components/Buttons/SecondaryButton';
import IconsContainer from '../../../components/Redirects/IconsContainer';
import DividerWhite from '../../../components/Visual/DividerWhite';
import { StatusBar, TouchableOpacity, TouchableHighlight } from 'react-native';
import * as Haptics from 'expo-haptics';
import { viewStyles, textStyles } from '../../../styles';
import { PRIMARY_COLOR } from '../../../constants';
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

  const [typewrittenText, setTypewrittenText] = useState('');
  const [typewrittenTextBold, setTypewrittenTextBold] = useState('');
  const [displaySubHeader, setDisplaySubHeader] = useState(false);
  const [navigationAway, setNavigationAway] = useState(false);
  const [initialRender, setInitialRender] = useState(true);


  useEffect(() => { // typewriter effect
    const text = 'Experience the ';
    const textBold = 'future of love...';
    let currentText = '';
    let currentTextBold = '';
  
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

  useEffect(() => { // haptic feedback
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
  

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const loginRedirect = () => {
    setNavigationAway(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate("Login");
  };

  const signUpRedirect = () => {
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
            style={styles.icon}
          />
          <Text style={styles.header}>
            {typewrittenText}{''}
        <Text style={styles.boldText}>{typewrittenTextBold}</Text>
          </Text>
          {displaySubHeader ? <Text style={textStyles.subHeader}>
            Our AI-powered dating app redefines connections, turning digital
            encounters into lasting romance.
          </Text> : null}
          
        </View>
        <View style={viewStyles.bottomView}>
          <IconsContainer dark={false} style={{ marginTop: 80 }} />
          <DividerWhite
            style={{ marginTop: 30, paddingBottom: 21, width: "80%" }}
          />
          <SecondaryButton 
          onPress={signUpRedirect}>
            Sign up
          </SecondaryButton>
          <TouchableOpacity
            onPress={loginRedirect}
            activeOpacity={0.8}
            underlayColor={"#1B5F56"}
          >
            <Text style={[styles.textWhiteBold, { marginTop: 14 }]}>
              Existing account? <Text style={{ color: PRIMARY_COLOR}}>Log in</Text>
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
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  textWhiteBold : {
    color: 'white',
    fontSize: 14,
    fontFamily: 'OpenSans_700Bold',
  },
  header : {
    color: 'white',
    fontSize: 64,
    fontFamily: 'OpenSans_400Regular',
  },
  boldText: {
    fontFamily: 'OpenSans_700Bold',
  },
  subHeader: {
    color: '#B9C1BE',
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'OpenSans_400Regular',
    marginTop: 18,
  },
  icon : {
    width: 50,
    height: 50,
    zIndex: 1,
    alignSelf: 'center',
    marginTop: -20,
    marginBottom: 20,
  }
});
