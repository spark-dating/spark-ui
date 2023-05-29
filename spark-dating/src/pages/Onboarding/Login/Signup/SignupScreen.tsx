import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Signup</Text>
      <TextInput placeholder="Name" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry={true} />
      <Button 
        title="Signup" 
        onPress={() => {}}
      />
    </View>
  );
};

export default SignupScreen;
