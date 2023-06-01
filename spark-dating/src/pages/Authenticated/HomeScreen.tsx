import { View, Text, SafeAreaView, Alert, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SwiperComponent from '../../components/Swiper/Swiper';

export default function HomeScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?gender=female&results=10')
      .then(res => {
        setUsers(res.data.results);
      })
      .catch(err => {
        Alert.alert('Error getting users', err);
      });
  }, []);

  return (
    <SafeAreaView>
      <Text>Home</Text>
      {users.length > 0 && <SwiperComponent users={users} />}
    </SafeAreaView>
  );
}
