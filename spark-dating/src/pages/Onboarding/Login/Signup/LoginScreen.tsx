import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { viewStyles } from '../../../../styles';



const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
        activeOpacity={0.8}
        style={viewStyles.arrow}
      >
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
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

