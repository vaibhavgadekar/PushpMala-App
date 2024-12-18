import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  AppState,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import YoutubePlayer, {
  getYoutubeMeta,
  YoutubeIframeRef,
  YoutubeMeta,
} from 'react-native-youtube-iframe';
import Slider from '@react-native-community/slider';
import {Design} from '../../namespaces/Design';
import {PMTextLabel} from '../atoms';
export default function YTPlayerView() {
  const playerRef = useRef<YoutubeIframeRef>(null);
  const [videoId, setVideoId] = useState('zTzjxoLfShM');
  const [data, setData] = useState<YoutubeMeta | null>(null);
  const [showControls, setShowControls] = useState<boolean>(true);
  const {width} = useWindowDimensions();
  const appState = useRef(AppState.currentState);
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
    getYoutubeMeta(videoId).then(setData);
  }, [videoId]);

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

  const YoutubeCard = ({youtubeId}: {youtubeId: string}) => {
    return (
      <Pressable
        onPress={() => setVideoId(youtubeId)}
        style={{
          padding: 8,
          justifyContent: 'space-between',
          flexDirection: 'row',
          gap: 4,
          backgroundColor: youtubeId === videoId ? '#efefef' : 'white',
        }}>
        <View style={{width: '40%', height: 90}}>
          <Image
            source={{
              uri: `https://img.youtube.com/vi/${youtubeId}/sddefault.jpg`,
            }}
            style={{height: '100%', width: '100%', borderRadius: 4}}
          />
        </View>
        <View style={{width: '60%', height: 90}}>
          <PMTextLabel
            title={data?.title ?? ''}
            numberOfLines={3}
            style={{
              fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
              fontSize: Design.fontSize.small,
              marginLeft: 4,
            }}
          />
          <PMTextLabel
            title={data?.author_name ?? ''}
            numberOfLines={3}
            style={{
              fontFamily: Design.fontFamily['KohinoorDevanagari-Regular'],
              fontSize: Design.fontSize.small,
              marginLeft: 4,
              color: Design.color.lightGray,
            }}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <>
      <Pressable
        style={{
          height: 250,
        }}
        onPress={() => setShowControls(prev => !prev)}>
        <YoutubePlayer
          ref={playerRef}
          height={300}
          play={true}
          videoId={videoId}
          baseUrlOverride="https://matrimony-fe-swart.vercel.app/YTIframe.html"
          // onChangeState={e => console.log({e})}
          initialPlayerParams={{
            controls: false,
            loop: false,
          }}
        />
        {showControls && (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              marginBottom: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.sliderContainer}>
              <Slider
                style={{width: width * 0.75}}
                maximumValue={100}
                value={30}
                minimumTrackTintColor={'#FFF'}
                maximumTrackTintColor="#D9D9D9"
                thumbTintColor={'#FFF'}
                onSlidingComplete={handleChange}
              />
            </View>
            {/* <PMButton
          title="Oka"
          onPress={() => {
            playerRef.current
              ?.getCurrentTime()
              .then(currentTime => console.log({currentTime}));

            playerRef.current
              ?.getDuration()
              .then(getDuration => console.log({getDuration}));
          }}
        />

        <PMButton
          title="Oka"
          onPress={() => {
            playerRef.current?.seekTo(10, true);
          }}
        /> */}
          </View>
        )}
      </Pressable>
      <View style={{paddingHorizontal: Design.space.regular}}>
        <PMTextLabel
          title={data?.title ?? ''}
          style={{fontFamily: Design.fontFamily['KohinoorDevanagari-Medium']}}
        />
      </View>
      <YoutubeCard youtubeId="2k69JF5Fpa4" />
      <YoutubeCard youtubeId="NGeTpIrmAkg" />
      <YoutubeCard youtubeId="_Z1fjiaCPEk" />
    </>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Design.space.regular,
  },
});
