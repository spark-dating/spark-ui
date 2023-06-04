import React, { useState, useRef, useEffect } from "react";
import { View, Text, FlatList, ViewToken } from "react-native";
import { viewStyles } from "../../styles";
import Modules from "./Modules";
import Animated, { useSharedValue } from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface HomeComponentProps {
  data: Array<any>;
  handleLike: (item: any) => void;
  handleDislike: (item: any) => void;
  handleSuperlike: (item: any) => void;
}

const HomeComponent: React.FC<HomeComponentProps> = ({ data, handleLike, handleDislike, handleSuperlike}) => {
  const [primaryIndex, setPrimaryIndex] = useState<number | null>(null);
  const [users, setUsers] = useState(data);
  const [scrollEnabled, setScrollEnabled] = useState(true);


  const viewableItems = useSharedValue<ViewToken[]>([]);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(({ viewableItems: vItems }) => {
    viewableItems.value = vItems;
  });

  const handleSwipe = (item) => {
    setUsers(users.filter((user) => user !== item));

  };


  const scrollToItem = (index: number) => {
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({ index, viewOffset: hp("5.5%") });
    }, 50);
  };

  return (
    <View style={viewStyles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        data={users}
        contentContainerStyle={{ paddingTop: 10 }}
        keyExtractor={(item, index) => `${index}-${item.name.first}`}
        onViewableItemsChanged={onViewableItemsChanged.current}
        contentInset={{ top: hp("5%") }}
        contentOffset={{ x: 0, y: -hp("5%") }}
        renderItem={({ item, index }) => (
          <Modules
            key={index}
            item={item}
            index={index}
            viewableItems={viewableItems}
            isPrimary={index === primaryIndex}
            setPrimaryIndex={setPrimaryIndex} 
            scrollToItem={scrollToItem}
            handleSwipe={handleSwipe}
            setScrollEnabled={setScrollEnabled}
            handleLike={handleLike}
            handleDislike={handleDislike}
            handleSuperlike={handleSuperlike}
            />
            )}
            scrollEnabled={scrollEnabled}
      />
    </View>
  );
};

export default HomeComponent;
