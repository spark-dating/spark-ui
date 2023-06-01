import React, { useState, useRef } from 'react';
import { View, Text, FlatList, ViewToken } from 'react-native';
import { viewStyles } from '../../styles';
import Modules from './Modules';
import Animated, {useSharedValue} from 'react-native-reanimated';

interface HomeComponentProps {
  data: Array<any>;
}

const HomeComponent: React.FC<HomeComponentProps> = ({ data }) => {

  const viewableItems = useSharedValue<ViewToken[]>([]);

  const onViewableItemsChanged = useRef(({ viewableItems: vItems }) => {
    viewableItems.value = vItems;
  });

  return (
    <View style={viewStyles.container}>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingTop: 10 }}
        onViewableItemsChanged={onViewableItemsChanged.current}
        renderItem={({ index, item }) => (
          <Modules key={index} item={item} viewableItems={viewableItems} />
        )}
      />
    </View>
  );
};

export default HomeComponent;
