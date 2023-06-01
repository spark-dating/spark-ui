import React, {useState} from "react";
import { textStyles } from "../../styles";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import {
    useFonts,
    OpenSans_400Regular,
    OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import { ScrollView } from "react-native-gesture-handler";


const Modules = ({ user, y, index }) => {
  
  const [expanded, setExpanded] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  
  const height = expanded ? hp("80%") : styles.module.height

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold,
    });


    const onPress = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(!expanded);
    };

  const position = Animated.subtract(index * styles.module.height, y);
  const isDisappearing = -styles.module.height;
  const isTop = 0;
  const isBottom = hp("80%") - styles.module.height;
  const isAppearing = hp("80%");

  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: "clamp",
  });

  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1.5, 1, 0.5],
  });

  const translateY = Animated.add(
    y,
    y.interpolate({
      inputRange: [0, 0.00001 + index * styles.module.height],
      outputRange: [0, -index * styles.module.height],
      extrapolateRight: "clamp",
    })
  );

  return (
    <Animated.View
      style={[
        styles.module,
        { opacity, transform: [{ translateY }, { scale }], height },
      ]}
    >
      <TouchableOpacity onPress={onPress} style={styles.moduleContent}>
        <Image
          style={styles.moduleImage}
          source={{ uri: user.picture.large }}
        />
        <Text style={styles.moduleText}>{user.name.first}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  module: {
    width: wp("80%"),
    height: hp("10%"),
    backgroundColor: "black",
    marginBottom: hp("2%"),
    borderRadius: hp("1.875%"),
    borderWidth: 1,
    borderColor: "black",
    overflow: "hidden",
  },
  moduleContent: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("3%"),
  },
  moduleImage: {
    width: hp("6%"),
    height: hp("6%"),
    borderRadius: hp("3%"),
    marginRight: wp("3%"),
  },
  moduleText: {
    color: "white",
    fontSize: hp("2.5s%"),
    fontFamily: "OpenSans_700Bold",
  },
});

export default Modules;
