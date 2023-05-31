import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../constants';
import { formStyles } from '../../styles';
import {
    useFonts,
    OpenSans_600SemiBold
  } from '@expo-google-fonts/open-sans';

  type SignInFormProps = {
    email: string,
    setEmail: (email: string) => void,
    password: string,
    setPassword: (password: string) => void
  }


const SignInForm: React.FC<SignInFormProps> = ({setPassword, setEmail, email, password}) => {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  let [fontsLoaded] = useFonts({
    OpenSans_600SemiBold
  });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

  return (
    <View style={formStyles.container}>
      <Text style={formStyles.label}>Email</Text>
      <TextInput
        style={formStyles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={formStyles.label}>Password</Text>
      <TextInput
        style={formStyles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
    </View>
  );
};

export default SignInForm;
