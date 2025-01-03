import React, {useEffect, useRef, useState} from 'react';
import {
  AppState,
  Button,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import YoutubePlayer, {
  getYoutubeMeta,
  YoutubeIframeRef,
  YoutubeMeta,
} from 'react-native-youtube-iframe';
import {Design} from '../../namespaces/Design';
import {PMTextLabel} from '../atoms';
import YoutubeCard from '../molecules/YoutubeCard';
import {Post} from '../../namespaces/Post';
import {useTranslation} from 'react-i18next';
import {useFetchDashbordQuery} from '../../redux/Dashbord/api';
import {iFrameDefaultBaseUrl} from '../../utils/constant';
import Slider from '@react-native-community/slider';
import ScalePress from '../atoms/ScalePress';
import Pause from '../../assets/icons/Pause';
import Play from '../../assets/icons/Play';
import {formatTime} from '../../utils/formatSeconds';

export type props = {
  postItem: Post;
  relatedVodeos: Post[];
};
export default function YTPlayerView({postItem, relatedVodeos}: props) {
  const playerRef = useRef<YoutubeIframeRef>(null);
  const [playing, setPlaying] = useState(true);
  const {data: respData} = useFetchDashbordQuery({});
  const {youtubeConfig} = respData ?? {};

  const [videoId, setVideo] = useState<Post>(postItem);
  const {t} = useTranslation();
  const [errors, setErrors] = useState<string | null>(null);
  const [data, setData] = useState<YoutubeMeta | null>(null);
  const appState = useRef(AppState.currentState);
  const [duration, setDuration] = useState<number>(0);
  const [elapsed, setElapsed] = useState(0);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const {width} = useWindowDimensions();
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      //   if (
      //     appState.current.match(/inactive|background/) &&
      //     nextAppState === 'active'
      //   ) {
      //     console.log('App has come to the foreground!');
      //   }

      // if(appState.current==='background'){
      //     playerRef?.current.
      // }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const elapsed_sec = await playerRef?.current?.getCurrentTime(); // this is a promise. dont forget to await
      const dura = await playerRef?.current?.getDuration();
      console.log({dura});

      // calculations
      const elapsed_ms = Math.floor(elapsed_sec * 1000) ?? 0;
      const ms = elapsed_ms % 1000;
      const min = Math.floor(elapsed_ms / 60000);
      const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);

      setElapsed(Math.floor(elapsed_ms / 1000) ?? 0);
      setDuration(Math.floor(dura ?? 0));
    }, 1000); // 100 ms refresh. increase it if you don't require millisecond precision

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (showControls) {
      setTimeout(() => {
        setShowControls(false);
      }, 4000);
    }
  }, [showControls]);

  const handleChange = (seek: number) => {
    playerRef.current?.seekTo(seek, true);
  };

  useEffect(() => {
    setPlaying(true);
    if (errors) {
      setErrors(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  const handlePlayPause = () => setPlaying(prev => !prev);

  return (
    <>
      <Pressable
        style={{height: 250}}
        onPress={() => setShowControls(prev => !prev)}>
        {/* Added this for the custom controller */}
        <View pointerEvents="none">
          {errors ? (
            <View style={styles.invalidVideoContainer}>
              <PMTextLabel
                title={t('common:invalidVideo')}
                style={styles.invalidTitle}
              />
            </View>
          ) : (
            <YoutubePlayer
              ref={playerRef}
              height={300}
              volume={100}
              play={playing}
              forceAndroidAutoplay={true}
              videoId={videoId?.youtubeUrl}
              onReady={() => setIsReady(true)}
              onError={setErrors}
              baseUrlOverride={
                youtubeConfig?.iframeBaseURL ?? iFrameDefaultBaseUrl
              }
              initialPlayerParams={{
                controls: false,
                loop: false,
                preventFullScreen: false,
              }}
            />
          )}
        </View>
        {showControls && isReady && (
          <View style={styles.container}>
            <View style={styles.pausIcon}>
              <ScalePress onPress={() => handlePlayPause()}>
                {!playing ? <Pause /> : <Play />}
              </ScalePress>
            </View>
            {/* slider View */}
            <View style={[styles.sliderViewContainer, {width: width * 0.95}]}>
              <View style={styles.sliderView}>
                <PMTextLabel
                  title={formatTime(elapsed) ?? ''}
                  style={styles.timerView}
                />
                <PMTextLabel title={' / '} style={styles.timerView} />
                <PMTextLabel
                  title={formatTime(duration) ?? ''}
                  style={styles.timerView}
                />
              </View>
              <Slider
                style={{width: width * 0.95}}
                maximumValue={duration}
                value={elapsed}
                minimumTrackTintColor={'#FFF'}
                maximumTrackTintColor="#D9D9D9"
                thumbTintColor={'#FFF'}
                onSlidingComplete={handleChange}
              />
            </View>
          </View>
        )}
      </Pressable>

      {/* Youtube Scroll View */}
      <ScrollView>
        <View style={styles.containerTextView}>
          <PMTextLabel title={videoId?.name ?? ''} style={styles.pmtext} />
        </View>
        {relatedVodeos?.map((item, index) => {
          return (
            <Animated.View
              key={`${item?.youtubeUrl}+${index}`}
              entering={FadeIn.duration(1000).delay(index * 100)}>
              <YoutubeCard
                id={item?.youtubeUrl}
                isCurrentPlaying={item?._id === videoId._id}
                key={index}
                author_name=""
                onPress={() => {
                  setPlaying(true);
                  setVideo(item);
                }}
                title={item?.name}
              />
            </Animated.View>
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  invalidVideoContainer: {
    height: 250,
    width: '100%',
    backgroundColor: Design.color.baseLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  invalidTitle: {
    fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
    color: Design.color.lightGray,
  },

  // Show controllls
  container: {
    position: 'absolute',
    height: 230,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.290)',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  pausIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%',
  },

  sliderViewContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    height: '15%',
    justifyContent: 'center',
  },
  sliderView: {
    flexDirection: 'row',
    marginLeft: Design.space.regular,
  },
  timerView: {
    fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
    fontSize: Design.space.regular,
    color: Design.color.white,
  },
  /* Youtube Scroll View */
  containerTextView: {paddingHorizontal: Design.space.regular},
  pmtext: {
    fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
    fontSize: Design.space.large,
    color: Design.color.lightGray,
  },
});
