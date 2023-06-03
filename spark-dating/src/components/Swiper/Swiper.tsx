import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-deck-swiper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { PRIMARY_COLOR } from "../../constants";
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

  return (
    
    <Swiper
      cards={[user]}
      stackSeparation={0}
      cardHorizontalMargin={0}
      cardVerticalMargin={0}
      verticalSwipe={false}
      showSecondCard={false}
      renderCard={(card) => (
        <View style={styles.card}>
          <TouchableOpacity activeOpacity={0.8}  onPress={onPress}>
            <Image
              style={styles.cardImage}
              source={{ uri: picture.large }}
              />
              </TouchableOpacity>
            <Text style={styles.cardText}>{`${name.first} ${name.last}`}</Text>
            </View>
            )}
            onSwiped={onSwipe}
            infinite={false}
            {...styles.card}
      />
  );
}

export default SwiperComponent;

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
  },
  card: {
    fontFamily: "OpenSans_400Regular",
    borderWidth: 3,
    borderColor: 'red',
    height: '100%',
    width: '100%',
    flex: 1,
    borderRadius: wp("2%"),
    // borderWidth: 1,
    overflow: "visible",
    justifyContent: "center",
    backgroundColor: "white",
  },
  cardText: {
    textAlign: "center",
    fontSize: hp("3%"),
    backgroundColor: "transparent",
  },
  cardImage: {
    width: "100%",
    height: hp("45%"),
  },
});
