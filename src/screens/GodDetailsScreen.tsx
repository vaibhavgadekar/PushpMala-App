import React, { useEffect } from 'react';
import {ImageBackground, ScrollView, StatusBar, Text, View} from 'react-native';
import PMHeader from '../components/molecules/PMHeader';
import ArrowLeft from '../assets/icons/ArrowLeft';
import NavigationCard from '../components/molecules/NavigationCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Design} from '../namespaces/Design';
import MediaListViewLandscape from '../components/organisms/MediaListViewLandscape';
import {cdnUrl} from '../utils/constant';
import {PMTextLabel} from '../components/atoms';
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { aaratiArray, bhajans } from './HomeScreen';
import MediaListView from '../components/organisms/MediaListView';

const GodDetailsScreen = () => {
  const navigation = useNavigation();
  const {params}=useRoute()
  const { godItem}= params


  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');

   return ()=>{
    StatusBar.setTranslucent(false);
    StatusBar.setBackgroundColor('white');
   }
  }, [navigation]);

  const goBack = () => navigation.goBack();
  return (
    <View style={{flex: 1, backgroundColor: Design.color.white}}>
      <ScrollView>
        {/* <StatusBar translucent backgroundColor={'transparent'}/> */}
        {/* <PMHeader
        title="सभी देवी-देवताओं के भजन"
        leftIcon={{
          icon: <ArrowLeft />,
          onPress: goBack,
        }}
      /> */}

        <ImageBackground
          source={require('../assets/images/god-bg.jpeg')}
          style={{
            height: 280,
            width: 'auto',
            backgroundColor: Design.color.gray,
            justifyContent: 'center',
          }}>
          <Animated.View entering={FadeInDown.duration(600)}>
            <PMTextLabel
              title={godItem?.name}
              style={{
                textAlign: 'center',
                fontSize: 32,
                fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
                color: '#756D6D',
                marginTop: 4,
              }}
            />
          </Animated.View>
        </ImageBackground>

        <Animated.View
          entering={FadeInDown.duration(900)}
          style={{alignItems: 'center', marginTop: -84}}>
          <ImageBackground
            source={{uri: cdnUrl + godItem?.imagePath}}
            style={{height: 150, width: 150}}></ImageBackground>
        </Animated.View>

        {/* <View style={{justifyContent: 'center', alignItems: 'center', marginTop:16}}>
          <View
            style={{
              paddingVertical: 16,
              backgroundColor: Design.color.baseLight,
              paddingHorizontal: 16,
              width: '90%',
              borderRadius:8
            }}>

<PMTextLabel
              title={godItem?.description}
              style={{
                textAlign: 'center',
                fontSize: 14,
                fontFamily: Design.fontFamily['KohinoorDevanagari-Regular'],
                color: '#756D6D',
                marginTop: 4,
              }}
            />
            </View>
        </View> */}
        <MediaListViewLandscape title="Top Songs" data={aaratiArray} />
        <MediaListViewLandscape title="Top Songs" data={aaratiArray} />
        <MediaListViewLandscape title="Top Songs" data={aaratiArray} />
        <MediaListViewLandscape title="Top Songs" data={aaratiArray} />
      </ScrollView>
    </View>
  );
};

export default GodDetailsScreen;
