import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from "react-native";
import ProfilePicture from "./ProfilePicture";
import DetailsView from "./DetailsView";
import ImageGallery from "./ImageGallery";
import Swiper from "react-native-deck-swiper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import ActionButtons from './ActionButtons';


interface ScrollViewCardProps {
  user: any;
  onPress: () => void;
  handleSwipeAction: (item: any) => void;
  handleLike: (item: any) => void;
  handleDislike: (item: any) => void;
  handleSuperlike: (item: any) => void;
}






const ScrollViewCard: React.FC<ScrollViewCardProps> = ({
  user,
  onPress,
  handleSwipeAction,
  handleLike,
  handleDislike,
  handleSuperlike,
}) => (
  <ScrollView>
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <ProfilePicture imageUri={user.picture.large} />
  </TouchableOpacity>
  <View style={styles.container}>
  <ActionButtons
  handleSwipeAction = {handleSwipeAction}
  handleDislike = {handleDislike}
  handleLike = {handleLike}
  handleSuperlike = {handleSuperlike}
  />

  <DetailsView
    name={`${user.name.first} ${user.name.last}`}
    location={user.location.city}
  />


  <ImageGallery images={user.additionalPictures || []} />
  </View>
</ScrollView>
);

export default ScrollViewCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 3,
    marginTop: -hp("9%"),
    height:'100%',
    width: "100%",
    // borderColor: 'red'
  },
  card: {
    fontFamily: "OpenSans_400Regular",
    height: "100%",
    width: "100%",
    flex: 1,
    borderRadius: wp("%"),
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

// Swiper component

{
  /* <Swiper
      cards={[user]}
      stackSeparation={0}
      cardHorizontalMargin={0}
      cardVerticalMargin={0}
      verticalSwipe={false}
      showSecondCard={false}
      renderCard={(card) => (
        
        )}
      onSwiped={onSwipe}
      infinite={false}
      {...styles.card}
    /> */
}
