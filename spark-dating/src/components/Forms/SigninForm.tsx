import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../constants';
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
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 16,
    color: PRIMARY_COLOR,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'grey', // thin grey line
    marginBottom: 16,
  },
});
