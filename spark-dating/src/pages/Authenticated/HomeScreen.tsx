import { View, Text, SafeAreaView, Alert, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { viewStyles } from "../../styles";
import axios from "axios";
import HomeComponent from "../../components/Swiper/HomeComponent";
import users from "./Users.js";

export default function HomeScreen() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://randomuser.me/api/?gender=female&results=10')
  //     .then(res => {
  //       setUsers(res.data.results);
  //     })
  //     .catch(err => {
  //       Alert.alert('Error getting users');
  //     });
  // }, []);

  const importedUsers = users;

  const handleLike = (user) => {
    console.log("Like");
  };

  const handleDislike = (user) => {
    console.log("Dislike");
  };

  const handleSuperlike = (user) => {
    console.log("Superlike");
  };

  return (
    <View style={viewStyles.container}>
      {importedUsers && importedUsers.length > 0 ? (
        <HomeComponent
          data={importedUsers}
          handleLike={handleLike}
          handleDislike={handleDislike}
          handleSuperlike={handleSuperlike}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
