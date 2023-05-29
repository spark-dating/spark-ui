import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SecondaryButton from '../../../components/Buttons/SecondaryButton';

const OnboardingV2 = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold,
      });
      
      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }

      
    return (
      <View style = {styles.container}>
        <Text>Welcome to our app!</Text>
        <SecondaryButton onPress={() => navigation.navigate('Login')}>
          Sign up
        </SecondaryButton>
      </View>
    );
  };
  
  export default OnboardingV2;
  


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        },
    });


    import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';


