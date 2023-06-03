import React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => (
  <ScrollView horizontal style={styles.container}>
    {images.map((image, index) => (
      <TouchableOpacity key={index} onPress={() => console.log('Open image: ' + image)}>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default ImageGallery;
