import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import ArrowLeft from '../assets/icons/ArrowLeft';
import PMHeader from '../components/molecules/PMHeader';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <PMHeader
        title="हनुमानगढ़ी के इतिहास"
        leftIcon={{
          icon: <ArrowLeft />,
          onPress: goBack,
        }}
      />
      <ScrollView>
        <View style={{height: 400, width: '100%', backgroundColor: 'white'}} />
        <View style={{height: 400, width: '100%', backgroundColor: 'pink'}} />
        <View style={{height: 400, width: '100%', backgroundColor: 'green'}} />
        <View style={{height: 400, width: '100%', backgroundColor: 'gray'}} />
        <View style={{height: 400, width: '100%', backgroundColor: 'blue'}} />
      </ScrollView>
    </View>
  );
};
