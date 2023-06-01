import React, {useState} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SwiperComponent({ users }) {
  const [expandedUser, setExpandedUser] = useState(null);

  const renderCard = (card, index) => {
    const { name } = card;
    return (
      <TouchableOpacity
        onPress={() => setExpandedUser(card)}
        style={styles.card}
        key={index}
      >
        <Text style={styles.cardText}>{`${name.first} ${name.last}`}</Text>
      </TouchableOpacity>
    );
  };

  const renderExpandedUser = () => {
    return (
      expandedUser && (
        <TouchableOpacity
          style={styles.expandedCard}
          onPress={() => setExpandedUser(null)}
        >
          <Text style={styles.expandedText}>{`${expandedUser.name.first} ${expandedUser.name.last}`}</Text>
        </TouchableOpacity>
      )
    );
  };

  return (
    <View style={styles.container}>
      <Swiper
        cards={users.results}
        renderCard={renderCard}
        infinite
      />
      {renderExpandedUser()}
    </View>
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
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  expandedCard: {
    position: 'absolute',
    top: windowHeight * 0.1,
    left: windowWidth * 0.1,
    width: windowWidth * 0.8,
    height: windowHeight * 0.8,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  expandedText: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  expandedImage: {
    width: '100%',
    height: '70%',
  },
});
