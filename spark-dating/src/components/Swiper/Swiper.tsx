import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function SwiperComponent({ user, onSwipe }) {
  const { name, picture } = user;
  return (
    <Swiper
      cards={[user]}
      renderCard={(card) => (
        <View style={styles.card}>
          <Image style={styles.cardImage} source={{ uri: picture.thumbnail }} />
          <Text style={styles.cardText}>{`${name.first} ${name.last}`}</Text>
        </View>
      )}
      onSwiped={onSwipe}
      infinite={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  cardText: {
    textAlign: 'center',
    fontSize: hp('6.5%'),
    backgroundColor: 'transparent',
  },
  cardImage: {
    width: '100%',
    height: hp('45%'),
  },
});
