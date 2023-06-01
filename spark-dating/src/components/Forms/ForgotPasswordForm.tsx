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
  }


const ForgotPasswordForm: React.FC<SignInFormProps> = ({setEmail, email}) => {

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
    </View>
  );
};

export default ForgotPasswordForm;
