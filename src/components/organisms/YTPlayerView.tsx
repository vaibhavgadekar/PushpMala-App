import React, {useEffect, useRef, useState} from 'react';
import {
  AppState,
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import YoutubePlayer, {
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

export type props = {
  postItem: Post;
  relatedVodeos: Post[];
};
export default function YTPlayerView({postItem, relatedVodeos}: props) {
  const playerRef = useRef<YoutubeIframeRef>(null);
  const {data: respData} = useFetchDashbordQuery({});
  const {youtubeConfig} = respData ?? {};

  const [videoId, setVideo] = useState<Post>(postItem);
  const {t} = useTranslation();
  const [errors, setErrors] = useState<string | null>(null);
  const [data, setData] = useState<YoutubeMeta | null>(null);
  const appState = useRef(AppState.currentState);
  // const [duration, setDuration] = useState<number>(0);
  // const [elapsed, setElapsed] = useState(0);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  // const {width} = useWindowDimensions();
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
    });

    return () => {
      subscription.remove();
    };
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     const elapsed_sec = await playerRef?.current?.getCurrentTime(); // this is a promise. dont forget to await

  //     // calculations
  //     const elapsed_ms = Math.floor(elapsed_sec * 1000);
  //     const ms = elapsed_ms % 1000;
  //     const min = Math.floor(elapsed_ms / 60000);
  //     const seconds = Math.floor((elapsed_ms - min * 60000) / 1000);

  //     setElapsed(min);
  //   }, 100); // 100 ms refresh. increase it if you don't require millisecond precision

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (isReady) {
  //     getYoutubeMeta(videoId).then(res => {
  //       setData(res);
  //     });
  //   }
  // }, [isReady, videoId]);

  // useEffect(() => {
  //   if (isReady) {
  //     playerRef.current?.getDuration().then(getDuration => {
  //       if (getDuration) {
  //         setDuration(getDuration);
  //       }
  //     });
  //   }
  // }, [isReady]);

  // useEffect(() => {
  //   if (showControls) {
  //     setTimeout(() => {
  //       setShowControls(false);
  //     }, 4000);
  //   }
  // }, [showControls]);

  // const handleChange = (seek: number) => {
  //   playerRef.current?.seekTo(seek, true);
  // };

  useEffect(() => {
    if (errors) {
      setErrors(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <FlatList
      data={['2ZKSdkpzHOM', 'ZddR1nV-ygA', 'EZYBybuKYj4', 'F2klvYe4ZUg']}
      pagingEnabled
      renderItem={({item, index}) => {
        return (
          <YoutubePlayer
            ref={playerRef}
            height={Dimensions.get('window').height}
            volume={100}
            play={true}
            forceAndroidAutoplay={true}
            videoId={item}
            contentScale={0}
            onReady={() => setIsReady(true)}
            onError={setErrors}
            baseUrlOverride={
              youtubeConfig?.iframeBaseURL ?? iFrameDefaultBaseUrl
            }
            initialPlayerParams={{
              controls: true,
              loop: false,
              preventFullScreen: false,
            }}
            webViewProps={{
              injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.position = 'unset';
            true;
          `,
            }}
          />
        );
      }}
    />
  );

  // return (
  //   <>
  //     <Pressable
  //       style={{height: 250}}
  //       onPress={() => setShowControls(prev => !prev)}>
  //       {/* Added this for the custom controller */}
  //       {/* <View pointerEvents="none"> */}
  //       {errors ? (
  //         <View style={styles.invalidVideoContainer}>
  //           <PMTextLabel
  //             title={t('common:invalidVideo')}
  //             style={styles.invalidTitle}
  //           />
  //         </View>
  //       ) : (
  //         <YoutubePlayer
  //           ref={playerRef}
  //           height={Dimensions.get('window').height}
  //           volume={100}
  //           play={true}
  //           forceAndroidAutoplay={true}
  //           videoId={'2ZKSdkpzHOM'}
  //           onReady={() => setIsReady(true)}
  //           onError={setErrors}
  //           baseUrlOverride={
  //             youtubeConfig?.iframeBaseURL ?? iFrameDefaultBaseUrl
  //           }
  //           initialPlayerParams={{
  //             controls: true,
  //             loop: false,
  //             preventFullScreen: false,
  //           }}
  //         />
  //       )}
  //       {/* </View> */}
  //       {/* {showControls && isReady && (
  //         <View
  //           style={{
  //             position: 'absolute',
  //             bottom: 0,
  //             marginBottom: 35,
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //           }}>
  //           <View style={styles.sliderContainer}>
  //             <Slider
  //               style={{width: width * 0.75}}
  //               maximumValue={duration}
  //               // value={30}
  //               minimumTrackTintColor={'#FFF'}
  //               maximumTrackTintColor="#D9D9D9"
  //               thumbTintColor={'#FFF'}
  //               onSlidingComplete={handleChange}
  //             />
  //           </View>
  //         </View>
  //       )} */}
  //     </Pressable>
  //     <ScrollView>
  //       <View style={{paddingHorizontal: Design.space.regular}}>
  //         <PMTextLabel
  //           title={videoId?.name ?? ''}
  //           style={{
  //             fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
  //             fontSize: Design.space.large,
  //             color: Design.color.lightGray,
  //           }}
  //         />
  //       </View>
  //       {relatedVodeos?.map((item, index) => {
  //         return (
  //           <Animated.View
  //             key={`${item?.youtubeUrl}+${index}`}
  //             entering={FadeIn.duration(1000).delay(index * 100)}>
  //             <YoutubeCard
  //               id={item?.youtubeUrl}
  //               isCurrentPlaying={item?._id === videoId._id}
  //               key={index}
  //               author_name=""
  //               onPress={() => setVideo(item)}
  //               title={item?.name}
  //             />
  //           </Animated.View>
  //         );
  //       })}
  //     </ScrollView>
  //   </>
  // );
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
});
