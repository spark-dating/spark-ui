import { View, Text, SafeAreaView, Alert, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { viewStyles } from '../../styles';
import axios from 'axios';
import HomeComponent from '../../components/Swiper/HomeComponent';

export default function HomeScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?gender=female&results=10')
      .then(res => {
        setUsers(res.data.results);
      })
      .catch(err => {
        Alert.alert('Error getting users');
      });
  }, []);

  return (
    <View style={viewStyles.container}>
      <HomeComponent data={users} />
    </View>
  );
}
