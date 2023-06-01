import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import IconsContainer from '../../components/Redirects/IconsContainer';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { AntDesign } from '@expo/vector-icons';
import * as stylesheet from '../../styles';

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import DividerBlack from '../../components/Visual/DividerBlack';

const TemplateScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={stylesheet.viewStyles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
        activeOpacity={0.8}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        style={stylesheet.commonStyles.arrow}
      >
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <View style={stylesheet.viewStyles.topView}>
        <Image
          tintColor="black"
          source={require("spark-dating/assets/sparkblack.png")}
          style={stylesheet.commonStyles.icon}
        />
        <Text style={stylesheet.textStyles.header}>Header</Text>
        <Text style={stylesheet.textStyles.subHeader}>Sub header</Text>
      </View>
      <View style={stylesheet.viewStyles.bottomView}>
        <IconsContainer dark={true} style={{marginTop: 80}}/>
        <DividerBlack style={{marginTop: 30, paddingBottom: 21, width: '80%'}}/>
        <PrimaryButton onPress={() => {}}>
          Button Text
        </PrimaryButton>
        <Text style={[stylesheet.textStyles.text, { marginTop: 14 }]}>
          Secondary Text
        </Text>
      </View>
    </View>
  );
};

export default TemplateScreen;

// don't forget to update documentation on Notion