import React from "react";
import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from "react-native";

import { PRIMARY_COLOR } from "../../constants";
import ScrollViewCard from "./ScrollViewCard";
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";

interface SwiperComponentProps {
  user: any;
  onSwipe: (index: number) => void;
  onPress: () => void;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({user, onSwipe, onPress}) => {
  const { name, picture } = user;

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    
    <ScrollViewCard user={user} onPress={onPress} onSwipe = {onSwipe} />
    
  );
}

export default SwiperComponent;


