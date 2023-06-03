import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface ProfilePictureProps {
  imageUri: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUri }) => (
  <Image source={{ uri: imageUri }} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1, // make it square
  },
});

export default ProfilePicture;
