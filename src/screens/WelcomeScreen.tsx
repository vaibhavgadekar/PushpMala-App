// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
// import ArrowRight from '../assets/icons/ArrowRight';
// import { PMButton, PMTextLabel } from '../components/atoms';
// import ChangeLangDialog from '../components/organisms/dialogs/ChangeLangDialog';
// import { Design } from '../namespaces/Design';
// import { RootStackParamList } from '../namespaces/RootStackParamList';

// export default function WelcomeScreen() {
//   const {t} = useTranslation();
//   const navigation =
//     useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//   const handleNavigation = () => {
//     navigation.navigate('HomeScreen');
//   };
//   return (
//     <>
//       <StatusBar backgroundColor="transparent" translucent />
//       <View style={styles.container}>
//         <View style={styles.backgroundContainer}>
//           <ImageBackground
//             source={require('../assets/images/welcome-bg-2.png')}
//             style={styles.imageBackground}>
//             <ChangeLangDialog />
//           </ImageBackground>
//         </View>
//         <View style={styles.contentContainer}>
//           <View style={styles.textContainer}>
//             <PMTextLabel
//               title={t('userOnboard:welcome:titleText')}
//               fontFamily="KohinoorDevanagari-Bold"
//               type="large"
//               color="lightGray"
//             />
//             <PMTextLabel
//               title={t('userOnboard:welcome:infoText')}
//               fontFamily="KohinoorDevanagari-Regular"
//               type="regular"
//               color="lightGray"
//               style={styles.descriptionText}
//             />
//           </View>
//           <View style={styles.buttonContainer}>
//             <PMButton
//               title={t('userOnboard:welcome:buttonText')}
//               onPress={handleNavigation}
//               buttonType="primary"
//               fontFamily="KohinoorDevanagari-Regular"
//               rightIcon={<ArrowRight />}
//             />
//           </View>
//         </View>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     flexDirection: 'column',
//   },
//   backgroundContainer: {
//     height: '80%',
//     width: '100%',
//     overflow: 'hidden',
//   },
//   imageBackground: {
//     height: '100%',
//     width: '100%',
//   },
//   contentContainer: {
//     height: '20%',
//     width: '100%',
//     backgroundColor: Design.color.lightYellow,
//     gap: 10,
//   },
//   textContainer: {
//     alignItems: 'center',
//     marginTop: -70,
//   },
//   descriptionText: {
//     textAlign: 'center',
//     paddingHorizontal: Design.space.regular,
//     marginVertical: Design.space.small,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
// });

import {View, Text, ImageBackground, StatusBar, Image} from 'react-native';
import React from 'react';
import ScalePress from '../components/atoms/ScalePress';
import Shankh from '../assets/icons/Shankh';
import {Dimensions} from 'react-native';
import YoutubePlayer, {
  YoutubeIframeRef,
  YoutubeMeta,
} from 'react-native-youtube-iframe';

export default function WelcomeScreen() {
  return (
    <View>
      <StatusBar backgroundColor={'#462E23'} />
      <ImageBackground
        source={require('../assets/images/gods/god_bg.png')}
        style={{height: '100%'}}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: 16,
          justifyContent: 'space-between',
          // backgroundColor: 'red',
        }}>
        <ScalePress onPress={() => {}}>
          <Image
            source={require('../assets/images/gods/bells.png')}
            resizeMode="contain"
            style={{height: 250, width: 60}}
          />
        </ScalePress>
        <ScalePress onPress={() => {}}>
          <Image
            source={require('../assets/images/gods/bells.png')}
            resizeMode="contain"
            style={{height: 250, width: 60}}
          />
        </ScalePress>
      </View>
      <View
        style={{
          bottom: 0,
          position: 'absolute',
          marginBottom: 20,
          width: Dimensions.get('window').width,
          flexDirection: 'row',
          alignItems: 'flex-end',
          // justifyContent: 'center',
        }}>
        <View
          style={{
            width: Dimensions.get('window').width * 0.15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ScalePress onPress={() => {}}>
            <Image
              source={require('../assets/images/gods/dia.png')}
              resizeMode="contain"
              style={{height: 50, width: 50, marginVertical: 4}}
            />
          </ScalePress>
          <ScalePress onPress={() => {}}>
            <Image
              source={require('../assets/images/gods/flower.png')}
              resizeMode="contain"
              style={{height: 50, width: 50, marginVertical: 4}}
            />
          </ScalePress>
          <ScalePress onPress={() => {}}>
            <Image
              source={require('../assets/images/gods/shankh.png')}
              resizeMode="contain"
              style={{height: 50, width: 50, marginVertical: 4}}
            />
          </ScalePress>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width * 0.7,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/gods/thali.png')}
            resizeMode="contain"
            style={{
              height: 120,
              width: 120,
              marginVertical: 4,
            }}
          />
        </View>
        <View style={{width: Dimensions.get('window').width * 0.15}} />
      </View>
      <View>
        <YoutubePlayer
          // ref={playerRef}
          height={100}
          volume={100}
          play={true}
          forceAndroidAutoplay={true}
          videoId={'UAKzQsn8iaY'}
          // onReady={() => setIsReady(true)}
          // onError={setErrors}
          // baseUrlOverride={youtubeConfig?.iframeBaseURL ?? iFrameDefaultBaseUrl}
          initialPlayerParams={{
            controls: true,
            loop: false,
            preventFullScreen: false,
          }}
        />
      </View>
    </View>
  );
}
