import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../constants';
import { formStyles } from '../../styles';
import {
    useFonts,
    OpenSans_600SemiBold
  } from '@expo-google-fonts/open-sans';


  type SignUpFormProps = {
    firstName: string,
    email: string,
    setEmail: (email: string) => void,
    password: string,
    setFirstName: (firstName: string) => void,
    setPassword: (password: string) => void,
    confirmPassword: string,
    setConfirmPassword: (confirmPassword: string) => void
  }

const SignUpForm: React.FC<SignUpFormProps> = ({email, setEmail, setPassword, setFirstName, firstName, password, confirmPassword, setConfirmPassword}) => {

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
      <Text style={formStyles.label}>First Name</Text>
      <TextInput
        style={formStyles.input}
        onChangeText={setFirstName}
        value={firstName}
        keyboardType="default"
        // autoCapitalize="first-letter"
      />
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
      <Text style={formStyles.label}>Confirm Password</Text>
      <TextInput
        style={formStyles.input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
      />
    </View>
  );
};

export default SignUpForm;
