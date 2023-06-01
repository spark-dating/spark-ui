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
import SwiperComponent from "./Swiper";
import { PRIMARY_COLOR } from "../../constants";

type ModulesProps = {
  item: Array<any>;
  index: number;
  isPrimary: boolean;
  setPrimaryIndex: (index: number) => void;
  scrollToItem: (index: number) => void;
  handleSwipe: (item: any) => void;

};

const Modules: React.FC<ModulesProps> = React.memo(
  ({ item, index, isPrimary, setPrimaryIndex, scrollToItem, handleSwipe }) => {


    const handleSwipeAction = (item) => {
      handleSwipe(item);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setPrimaryIndex(null);

    };


    const onPress = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      if (isPrimary) {
        // If this module is already primary, un-Primary it
        setPrimaryIndex(null);
      } else {
        // Otherwise, make this module the primary one
        scrollToItem(index);
        setPrimaryIndex(index);
      }
    };

    return (
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          {!isPrimary ? (
            <Animated.View style={styles.module}>
              <View style={styles.moduleContent}>
                <Text style={styles.moduleText}>{item.name.first}</Text>
                <Image
                  style={styles.moduleImage}
                  source={{ uri: item.picture.thumbnail }}
                />
              </View>
            </Animated.View>
          ) : (
            <Animated.View style={styles.moduleExpanded}>
              {/* <View style={styles.moduleContentExpanded}>
              <Text style={styles.moduleText}>{item.name.first}</Text>
              <Image
                style={styles.moduleImage}
                source={{ uri: item.picture.thumbnail }}
                />
            </View> */}
              <SwiperComponent onPress={onPress} user={item} onSwipe={() => handleSwipeAction(item)} />
            </Animated.View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  module: {
    width: wp("80%"),
    height: hp("10%"),
    backgroundColor: PRIMARY_COLOR,
    marginBottom: hp("2%"),
    borderRadius: hp("1.875%"),
    // borderWidth: 1,
    // borderColor: "black",
    overflow: "hidden",
  },
  moduleExpanded: {
    alignSelf: "center",
    width: wp("90%"),
    height: hp("80%"),
    backgroundColor: "black",
    marginBottom: hp("2%"),
    borderRadius: hp("1.875%"),
    // borderWidth: 1,
    // borderColor: "black",
    overflow: "hidden",
  },
  moduleContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    // alignSelf: "flex-end",
    paddingHorizontal: wp("3%"),
  },
  moduleContentExpanded: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    height: "100%",
    paddingTop: hp("3%"),
    // alignSelf: "flex-end",
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
    fontSize: hp("2.5%"),
    fontFamily: "OpenSans_700Bold",
  },
});

export default Modules;
