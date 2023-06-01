import { View, Text, SafeAreaView, Alert, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { viewStyles } from '../../styles';
import axios from 'axios';
import HomeComponent from '../../components/Swiper/HomeComponent';
import { FlatList, Animated } from 'react-native';


const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

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
    <SafeAreaView style = {viewStyles.container}>
      <HomeComponent data = {users}/>
      {/* {users.map((user, index) => (
        <Modules key={index} user={user} />
      ))} */}
    </SafeAreaView>
  );
}
