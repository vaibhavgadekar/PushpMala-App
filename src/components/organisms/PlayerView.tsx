import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import TrackPlayer, {
  Capability,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import Bookmark from '../../assets/icons/Bookmark';
import Pause from '../../assets/icons/Pause';
import Play from '../../assets/icons/Play';
import Share from '../../assets/icons/Share';
import {Design} from '../../namespaces/Design';
import {formatMillisecondsToTime} from '../../utils/formatMillisecondsToTime';
import {PMTextLabel} from '../atoms';
import ScalePress from '../atoms/ScalePress';

export type PlayerViewProps = {
  image: string;
};

export default function PlayerView({image}: PlayerViewProps) {
  const {width, height} = useWindowDimensions();
  const progress = useProgress();
  const {state} = usePlaybackState();
  const navigation = useNavigation();

  useEffect(() => {
    playSongs();
    return () => {
      resetTrack();
    };
  }, [navigation]);

  const handlePlayPause = async () => {
    if (state === 'playing') {
      await TrackPlayer.pause();
      return;
    }
    await TrackPlayer.play();
  };

  const resetTrack = async () => {
    await TrackPlayer.reset();
  };

  const playSongs = async () => {
    // await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [Capability.Play, Capability.Pause],
    });
    var track1 = {
      url: 'https://aac.saavncdn.com/511/95a4ab47a27098a4ed4691684e9f40c5_320.mp4', // Load media from the network
      title: 'Aarti (Om Jai Ambe Mata)',
      artist: 'PushpMala Bhajan App',
      album: 'while(1<2)',
      genre: 'Progressive House, Electro House',
      date: '2014-05-20T07:00:00+00:00', // RFC 3339
      artwork:
        'https://c.saavncdn.com/399/Baba-Teri-Shirdi-Mein-Hindi-2018-20180918-500x500.jpg', // Load artwork from the network
      duration: 402, // Duration in seconds
    };
    await TrackPlayer.add([track1]);
    await TrackPlayer.play();
  };

  const handleChange = (value: number) => {
    TrackPlayer.seekTo(value);
  };

  return (
    <Animated.View
      entering={FadeInDown.duration(700).delay(400)}
      style={styles.animatedCard}>
      <ImageBackground
        blurRadius={20}
        imageStyle={styles.imageBackground}
        style={[
          styles.imageContainer,
          {height: height * 0.45, width: width * 0.9},
        ]}
        source={{
          uri: image,
        }}>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.image, {height: height * 0.4, width: width * 0.8}]}
        />
      </ImageBackground>
      <PMTextLabel
        type="mlarge"
        numberOfLines={2}
        title="आरती (ओम जय अंबे माता)"
        style={styles.pmTextLabel}
      />
      <View style={styles.sliderContainer}>
        <Slider
          style={{width: width * 0.9}}
          maximumValue={progress.duration}
          value={progress.position}
          minimumTrackTintColor={'#756D6D'}
          maximumTrackTintColor="#D9D9D9"
          thumbTintColor={'#756D6D'}
          onSlidingComplete={handleChange}
        />
      </View>
      <View style={[styles.row, {width: width * 0.8}]}>
        <PMTextLabel
          type="small"
          style={styles.timerText}
          title={formatMillisecondsToTime(progress.position)}
        />
        <PMTextLabel
          type="small"
          style={styles.timerText}
          title={formatMillisecondsToTime(progress.duration)}
        />
      </View>
      <View style={styles.controlRow}>
        <ScalePress onPress={() => handlePlayPause()}>
          {state !== 'playing' ? <Pause /> : <Play />}
        </ScalePress>
        <View style={styles.controlIcons}>
          <ScalePress onPress={() => handlePlayPause()}>
            <Share />
          </ScalePress>
          <ScalePress onPress={() => handlePlayPause()}>
            <Bookmark />
          </ScalePress>
        </View>
      </View>
    </Animated.View>
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
    backgroundColor: '#FAF9F6',
    paddingBottom: Design.space.regular,
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
    color: '#756D6D',
    marginTop: Design.space.regular,
    paddingHorizontal: Design.space.regular,
    textAlign: 'center',
  },
  sliderContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Design.space.regular,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  timerText: {
    fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
    color: '#756D6D',
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Design.space.large,
    width: '90%',
  },
  controlIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  lyricsContainer: {
    marginTop: Design.space.xlarge,
    paddingHorizontal: Design.space.regular,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lyricsText: {
    textAlign: 'center',
    color: '#333333',
  },
});
