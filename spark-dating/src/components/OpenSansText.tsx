import React, { FC } from "react";
import { useFonts } from "expo-font";
import { Text } from "react-native";



const OpenSansText: React.FC<{ style?: TextStyle }> = ({ children, style }) => {
    let [fontsLoaded] = useFonts({
      OpenSans: require("../../assets/fonts/OpenSans-Regular.ttf"),
    });
  
    if (!fontsLoaded) {
      return null;
    }
  
    return <Text style={[{ fontFamily: "OpenSans" }, style]}>{children}</Text>;
  };
  

  export default OpenSansText;