import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {PMTextLabel} from '../components/atoms';
import MediaListViewLandscape from '../components/organisms/MediaListViewLandscape';
import {Design} from '../namespaces/Design';
import {cdnUrl} from '../utils/constant';
import {useFetPostsByGodIdQuery} from '../redux/god/api';
import {Post} from '../namespaces/Post';

import GodScreenLoader from '../components/molecules/GodScreenLoader';

const GodDetailsScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {godItem} = params;
  const {data, isLoading: isGodLoading} = useFetPostsByGodIdQuery({
    id: godItem?._id,
  });

  const filterResponse = (postCategoryType: string): Post[] => {
    return data?.data?.data?.filter(
      (item: Post) => item.postCategoryType === postCategoryType,
    );
  };

  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');

    return () => {
      StatusBar.setTranslucent(false);
      StatusBar.setBackgroundColor('white');
    };
  }, [navigation]);

  const goBack = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../assets/images/god-bg.jpeg')}
          style={styles.headerImage}>
          <Animated.View entering={FadeInDown.duration(600)}>
            <PMTextLabel title={godItem?.name} style={styles.godTitle} />
          </Animated.View>
        </ImageBackground>

        <Animated.View
          entering={FadeInDown.duration(900)}
          style={styles.profileContainer}>
          <ImageBackground
            source={{uri: cdnUrl + godItem?.imagePath}}
            style={styles.profileImage}
          />
        </Animated.View>
        {isGodLoading && <GodScreenLoader />}
        {!isGodLoading && (
          <>  
            <MediaListViewLandscape
              title="Top Arati"
              data={filterResponse('ARATI')}
            />
            <MediaListViewLandscape
              title="Top Bhajans"
              data={filterResponse('BHAJAN')}
            />
            <MediaListViewLandscape
              title="Top Mantra"
              data={filterResponse('MANTRA')}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default GodDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Design.color.white,
  },
  headerImage: {
    height: 280,
    width: 'auto',
    backgroundColor: Design.color.gray,
    justifyContent: 'center',
  },
  godTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
    color: '#756D6D',
    marginTop: 4,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -84,
  },
  profileImage: {
    height: 150,
    width: 150,
  },
});
