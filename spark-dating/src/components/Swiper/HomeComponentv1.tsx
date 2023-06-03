import { View, Text, FlatList, Animated } from "react-native";
import React from "react";
import Modules from "./Modules";
import Swiper from "react-native-deck-swiper";


interface HomeComponentProps {
  users: Array<any>;
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const HomeComponent: React.FC<HomeComponentProps> = ({ users }) => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
    useNativeDriver: true,
  });

  return (
    <AnimatedFlatList
      data={users}
      bounces={true}
      renderItem={({ index, item }) => (
        <Modules user={item} {...{ index, y }} />
      )}
      keyExtractor={(item) => item.login.uuid}
      scrollEventThrottle={16}
        {...{ onScroll }}
    />
  );
};

export default HomeComponent;
