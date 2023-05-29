import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import SecondaryButton from '../../../components/Buttons/SecondaryButton';
import IconsContainer from '../../../components/Redirects/IconsContainer';
import DividerWhite from '../../../components/Visual/DividerWhite';
import { StatusBar, TouchableOpacity, TouchableHighlight } from 'react-native';
import * as Haptics from 'expo-haptics';
import { viewStyles, textStyles } from '../../../styles';
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

  const loginRedirect = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate("Login");
  };


  return (
    <ImageBackground
      source={require("spark-dating/assets/backgrounds/Onboardingv2.jpg")}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" />
      <View style={viewStyles.container}>
        <View style={viewStyles.topView}>
          <Text
            style={[
              styles.textWhiteBold,
              {
                display: "flex",
                alignSelf: "center",
                marginTop: -40,
                marginBottom: 40,
                color: "white"
              },
            ]}
          >
            Spark
          </Text>
          <Text style={styles.header}>
            Experience the{" "}
            <Text style={{ fontFamily: "OpenSans_700Bold" }}>
              future of love
            </Text>
          </Text>
          <Text style={textStyles.subHeader}>
            Our AI-powered dating app redefines connections, turning digital
            encounters into lasting romance.
          </Text>
          <IconsContainer dark={false} style={{ marginTop: 80 }} />
          <DividerWhite style={{ marginTop: 30 }} />
        </View>
        <View style={viewStyles.bottomView}>
          <SecondaryButton onPress={() => navigation.navigate("Signup")}>
            Sign up
          </SecondaryButton>
          <TouchableOpacity onPress={loginRedirect} activeOpacity={0.8} underlayColor={"#1B5F56"}>
            <Text style={[styles.textWhiteBold, { marginTop: 14 }]}>
              Existing account? <Text style={{ color: "#24786D" }}>Log in</Text>
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
    marginBottom: 70, // margin to push the button away from the bottom
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
  subHeader: {
    color: '#B9C1BE',
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'OpenSans_400Regular',
    marginTop: 18,
  }
});

