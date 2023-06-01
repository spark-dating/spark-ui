import React, { useState } from "react";
import { textStyles, viewStyles } from "../../styles";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  ViewToken,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import Collapsible from "react-native-collapsible";

type ModulesProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: Array<any>;
};

const Modules: React.FC<ModulesProps> = React.memo(
  ({ item, viewableItems }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const onPress = () => {
      setIsCollapsed(!isCollapsed);
    };

    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter((item) => item.isViewable)
          .find(
            (viewableItem) => viewableItem.item.login.uuid === item.login.uuid
          )
      );
      return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [{ scale: withTiming(isVisible ? 1 : 0.6) }],
      };
    });

    return (
      <TouchableOpacity onPress={onPress}>
        <Collapsible collapsedHeight={styles.module.height} collapsed={isCollapsed}>
          <Animated.View style={styles.moduleExpanded}>
            <Text style={styles.moduleText}>{item.name.first}</Text>
          </Animated.View>
        </Collapsible>
      </TouchableOpacity>
    );
  }
);

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
  moduleExpanded: {
    width: wp("80%"),
    height: hp("80%"),
    backgroundColor: "black",
    paddingBottom: hp("2%"),
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
