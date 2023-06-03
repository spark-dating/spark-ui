import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, LayoutAnimation } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Animated from "react-native-reanimated";
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import SwiperComponent from "./Swiper";
import { PRIMARY_COLOR } from "../../constants";

type ModulesProps = {
  item: Array<any>;
  index: number;
  isPrimary: boolean;
  setPrimaryIndex: (index: number) => void;
  scrollToItem: (index: number) => void;
  handleSwipe: (item: any) => void;
  setScrollEnabled: (enabled: boolean) => void;
};

const Modules: React.FC<ModulesProps> = React.memo(({ item, index, isPrimary, setPrimaryIndex, scrollToItem, handleSwipe, setScrollEnabled }) => {

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });


  const handleSwipeAction = (item) => {
    handleSwipe(item);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setPrimaryIndex(null);
    setScrollEnabled(true);
  };

  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (isPrimary) {
      setPrimaryIndex(null);
      setScrollEnabled(true);
    } else {
      scrollToItem(index);
      setPrimaryIndex(index);
      setScrollEnabled(false);
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      {!isPrimary ? (
        <ImageBackground style={styles.module} source={{ uri: item.picture.large }}>
          <View style={styles.overlay} />
          <View style={styles.locationContainer}>
            <View style={styles.locationBox}>
              <Text style={styles.locationText}>{item.location.city}</Text>
            </View>
            <View style={styles.nameBox}>
              <Text style={styles.moduleText}>{item.name.first}</Text>
            </View>
          </View>
        </ImageBackground>
      ) : (
        <Animated.View style={styles.moduleExpanded}>
          <SwiperComponent onPress={onPress} user={item} onSwipe={() => handleSwipeAction(item)} />
        </Animated.View>
      )}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  module: {
    width: wp("80%"),
    height: hp("10%"),
    marginBottom: hp("2%"),
    borderRadius: hp("1.875%"),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  overlay: {
    backgroundColor: "black",
    opacity: 0.5,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: hp("1.875%")
  },
  moduleExpanded: {
    alignSelf: "center",
    width: wp("90%"),
    height: hp("80%"),
    backgroundColor: "black",
    marginBottom: hp("2%"),
    borderRadius: hp("1.875%"),
    overflow: "hidden",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    left: wp("3%"),
    zIndex: 1
  },
  locationBox: {
    backgroundColor: "rgba(128, 128, 128, 0.75)",
    borderRadius: hp("1%"),
    padding: wp("1%"),
    alignSelf: 'flex-start',
    maxWidth: wp("27%"),
    maxHeight: hp("7%"),
  },
  nameBox: {
    position: "absolute",
    left: wp('30%'),
    zIndex: 1
  },
  moduleText: {
    color: "white",
    fontSize: hp("2.5%"),
    fontFamily: "OpenSans_700Bold",
  },
  locationText: {
    color: "white",
    fontSize: hp("2%"),
    fontFamily: "OpenSans_700Bold"
  }
});


export default Modules;
