import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "../../constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import * as Haptics from "expo-haptics";


const ActionButtons = ({
  handleDislike,
  handleLike,
  handleSuperLike,
  handleSwipeAction,
}) => {
  const handleLocalLike = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    handleLike();
  };

  const handleLocalDislike = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    handleDislike();
  };

  const handleLocalSuperLike = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    handleSuperLike();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.buttonSide, styles.shadow]}
        onPress={handleLocalLike}
      >
        <MaterialCommunityIcons
          name="close"
          size={hp("4%")}
          color="red"
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.buttonCenter, styles.shadow]}
        onPress={handleLocalDislike}
      >
        <MaterialCommunityIcons
          name="heart"
          size={hp("7%")}
          color="white"
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.buttonSide, styles.shadow]}
        onPress={handleLocalSuperLike}
      >
        <Ionicons
          name="star"
          size={hp("4%")}
          color="purple"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: wp("2%"),
    alignItems: "center",
    // position: 'absolute',
    bottom: hp("0%"),
    width: wp("100%"),
    alignSelf: "center",
    marginBottom: -hp("6%"),
    zIndex: 1,
  },
  buttonSide: {
    display: "flex",
    backgroundColor: "white",
    width: hp("9%"),
    height: hp("9%"),
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCenter: {
    backgroundColor: PRIMARY_COLOR,
    width: hp("12%"),
    height: hp("12%"),
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    textAlign: "center",
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOpacity: 0.5,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});

export default ActionButtons;
