import React from "react";
import { ScrollView, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import ProfilePicture from "./ProfilePicture";
import DetailsView from "./DetailsView";
import ImageGallery from "./ImageGallery";
import Swiper from "react-native-deck-swiper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface ScrollViewCardProps {
  user: any;
  onPress: () => void;
  onSwipe: (index: number) => void;
}

const ScrollViewCard: React.FC<ScrollViewCardProps> = ({
  user,
  onPress,
  onSwipe,
}) => (
  <ScrollView>
    <Swiper
      cards={[user]}
      stackSeparation={0}
      cardHorizontalMargin={0}
      cardVerticalMargin={0}
      verticalSwipe={false}
      showSecondCard={false}
      renderCard={(card) => (
        <>
          <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <ProfilePicture imageUri={user.picture.large} />
          </TouchableOpacity>
        </>
      )}
      onSwiped={onSwipe}
      infinite={false}
      {...styles.card}
    />
          <DetailsView
            name={`${user.name.first} ${user.name.last}`}
            location={user.location.city}
          />
          <ImageGallery images={user.additionalPictures || []} />
  </ScrollView>
);


export default ScrollViewCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    fontFamily: "OpenSans_400Regular",
    borderWidth: 3,
    borderColor: "red",
    height: "100%",
    width: "100%",
    flex: 1,
    borderRadius: wp("2%"),
    overflow: "visible",
    backgroundColor: "#f0f0f0", // very light gray
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






           