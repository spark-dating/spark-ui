import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <Button 
        title="Login" 
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default LoginScreen;
