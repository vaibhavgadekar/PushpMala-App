import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import ArrowLeft from '../assets/icons/ArrowLeft';
import PMHeader from '../components/molecules/PMHeader';
import YTPlayerView from '../components/organisms/YTPlayerView';
import {Design} from '../namespaces/Design';

export default function VideoPlayScreen() {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <PMHeader
        title="सभी देवी-देवताओं के भजन"
        leftIcon={{
          icon: <ArrowLeft />,
          onPress: goBack,
        }}
      />
      <YTPlayerView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Design.color.white,
  },
});
