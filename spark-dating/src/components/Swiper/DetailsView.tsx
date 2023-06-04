import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface DetailsViewProps {
  name: string;
  location: string;
}

const DetailsView: React.FC<DetailsViewProps> = ({ name, location }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.location}>{location}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    borderRadius: wp('8%'),
    paddingTop: hp('8%'),
  },
  name: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  location: {
    fontSize: hp('2%'),
    color: 'gray',
  },
});

export default DetailsView;
