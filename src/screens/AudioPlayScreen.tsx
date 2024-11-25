import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ArrowLeft from '../assets/icons/ArrowLeft';
import {PMTextLabel} from '../components/atoms';
import PMHeader from '../components/molecules/PMHeader';
import MediaListView from '../components/organisms/MediaListView';
import {Design} from '../namespaces/Design';
import {cdnUrl} from '../utils/constant';
import PlayerView from '../components/organisms/PlayerView';

const bhajans = [
  'https://c.saavncdn.com/704/Achutam-Keshvam-Hindi-2022-20220729081207-500x500.jpg',
  'https://c.saavncdn.com/399/Baba-Teri-Shirdi-Mein-Hindi-2018-20180918-500x500.jpg',
  'https://c.saavncdn.com/256/Shree-Hanuman-Chalisa-Hanuman-Ashtak-Hindi-1992-20230904173628-500x500.jpg',
  'https://c.saavncdn.com/316/Govind-Bolo-Hindi-2017-500x500.jpg',
  'https://c.saavncdn.com/211/Essential-Divine-Anup-Jalota-Hindi-2016-500x500.jpg',
  'https://c.saavncdn.com/151/Durga-Stuti-Hindi-2000-20240925111323-500x500.jpg',
  cdnUrl + 'pushpmala/image/kxo2w.webp',
  cdnUrl + 'pushpmala/image/v2oab.webp',
  cdnUrl + 'pushpmala/image/htx8ek.webp',
  cdnUrl + 'pushpmala/image/kylo7.webp',
  cdnUrl + 'pushpmala/image/3mntc.webp',
  cdnUrl + 'pushpmala/image/99bif.webp',
];

export default function AudioPlayScreen() {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const aartiLyrics = '';

  return (
    <View style={styles.container}>
      <PMHeader
        title="सभी देवी-देवताओं के भजन"
        leftIcon={{
          icon: <ArrowLeft />,
          onPress: goBack,
        }}
      />
      <ScrollView>
        <View style={styles.centerContent}>
          <PlayerView />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <View style={styles.lyricsContainer}>
            <PMTextLabel
              type="large"
              style={styles.lyricsText}
              title={aartiLyrics}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Design.color.white,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedCard: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingBottom: 16,
    marginTop: 40,
    borderRadius: 20,
  },
  imageBackground: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  pmTextLabel: {
    fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
    color: '#616161',
    marginTop: Design.space.regular,
    paddingHorizontal: Design.space.regular,
    textAlign: 'center',
  },
  sliderContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  timerText: {
    fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
    color: '#616161',
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    width: '90%',
  },
  controlIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  lyricsContainer: {
    marginTop: 32,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lyricsText: {
    textAlign: 'center',
    lineHeight: 22,
    color: '#333333',
  },
});
