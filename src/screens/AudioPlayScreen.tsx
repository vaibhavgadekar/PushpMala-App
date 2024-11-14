import {View, Text, Image, useWindowDimensions} from 'react-native';
import React, {useEffect} from 'react';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {Design} from '../namespaces/Design';
import PMHeader from '../components/molecules/PMHeader';
import ArrowLeft from '../assets/icons/ArrowLeft';
import {useNavigation} from '@react-navigation/native';

export default function AudioPlayScreen() {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const s = useProgress();
  useEffect(() => {
    setupPlayer();
    playSongs();
  }, []);

  console.log({s});

  const setupPlayer = async () => {};
  const playSongs = async () => {
    await TrackPlayer.setupPlayer();
    var track1 = {
      url: 'https://aac.saavncdn.com/706/52c9dc96ecc44b15ae6f0fe1e66a3b86_320.mp4', // Load media from the network
      title: 'Avaritia',
      artist: 'deadmau5',
      album: 'while(1<2)',
      genre: 'Progressive House, Electro House',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork: 'http://example.com/cover.png', // Load artwork from the network
      duration: 402, // Duration in seconds
    };
    await TrackPlayer.add([track1]);
    await TrackPlayer.play();
  };

  const goBack = () => navigation.goBack();
  return (
    <View style={{flex: 1, backgroundColor: Design.color.white}}>
      <PMHeader
        title="सभी देवी-देवताओं के भजन"
        leftIcon={{
          icon: <ArrowLeft />,
          onPress: goBack,
        }}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://c.saavncdn.com/706/Aarti-Sai-Baba-Sanskrit-2016-500x500.jpg',
          }}
          style={{
            height: height * 0.45,
            width: width * 0.9,
            borderRadius: 10,
            marginTop: 20,
          }}
          resizeMode="contain"
        />
      </View>
      <Text>AudioPlayScreen</Text>
    </View>
  );
}
