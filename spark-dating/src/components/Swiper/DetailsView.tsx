import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 18,
    color: 'gray',
  },
});

export default DetailsView;
