import React, {useRef} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  useForeground,
} from 'react-native-google-mobile-ads';
import ScalePress from '../components/atoms/ScalePress';
import GodsCircularList from '../components/organisms/GodsCircularList';
import GodsList from '../components/organisms/GodsList';
import HomeScreenHeader from '../components/organisms/HomeScreenHeader';
import MediaListView from '../components/organisms/MediaListView';
import {Design} from '../namespaces/Design';
import {useFetchDashbordQuery} from '../redux/Dashbord/api';
import {cdnUrl} from '../utils/constant';
import {useFetchGodsQuery} from '../redux/god/api';
import MediaListViewLandscape from '../components/organisms/MediaListViewLandscape';
import {Post} from '../namespaces/Post';

export const HomeScreen = () => {
  const {data} = useFetchDashbordQuery({});
  const {data: allGods, isLoading} = useFetchGodsQuery({});
  const {gods} = data ?? {};
  const bannerRef = useRef<BannerAd>(null);
  const adUnitId = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

  const imageArray = [
    cdnUrl + 'pushpmala/image/musjy.webp',
    cdnUrl + 'pushpmala/image/8oqye.webp',
    cdnUrl + 'pushpmala/image/kxo2w.webp',
    cdnUrl + 'pushpmala/image/v2oab.webp',
    cdnUrl + 'pushpmala/image/htx8ek.webp',
    cdnUrl + 'pushpmala/image/kylo7.webp',
    cdnUrl + 'pushpmala/image/3mntc.webp',
    cdnUrl + 'pushpmala/image/99bif.webp',
  ];

  const aaratiArray: Post[] = [
    {
      _id: '6769064b12cf3d4f4e9bef7b',
      name: 'श्री हनुमान चालीसा',
      description: 'श्री हनुमान चालीसा',
      imagePath: 'pushpmala/image/9167k.webp',
      url: 'https://www.youtube.com/watch?v=AETFvQonfV8',
      savanUrl: '',
      youtubeUrl: 'AETFvQonfV8',
      postType: 'VIDEO',
      postCategoryType: 'BHAJAN',
      streamType: 'FREE',
      godId: '674c03c4553bfe7521e193eb',
      language: 'hi',
      createdAt: '2024-12-23T06:42:19.743Z',
      updatedAt: '2024-12-23T06:42:19.743Z',
    },
    {
      _id: '6769076b12cf3d4f4e9bef7f',
      name: 'मंगल भवन अमंगल हारी',
      description: 'मंगल भवन अमंगल हारी',
      imagePath: 'pushpmala/image/8qqbnl.webp',
      url: 'https://www.youtube.com/watch?v=9cBqVkPhIH4',
      savanUrl: '9cBqVkPhIH4',
      youtubeUrl: '9cBqVkPhIH4',
      postType: 'VIDEO',
      postCategoryType: 'BHAJAN',
      streamType: 'FREE',
      godId: '674c03c4553bfe7521e193eb',
      language: 'hi',
      createdAt: '2024-12-23T06:47:07.100Z',
      updatedAt: '2024-12-23T06:47:07.100Z',
    },
    {
      _id: '67690937da4c362ab63f9745',
      name: 'श्री बजरंग बाण का पाठ',
      description: 'श्री बजरंग बाण का पाठ',
      imagePath: 'pushpmala/image/96ypmi.webp',
      url: 'https://www.youtube.com/watch?v=WZKs6mbbhLQ',
      savanUrl: '',
      youtubeUrl: 'WZKs6mbbhLQ',
      postType: 'VIDEO',
      postCategoryType: 'BHAJAN',
      streamType: 'FREE',
      godId: '674c03c4553bfe7521e193eb',
      language: 'hi',
      createdAt: '2024-12-23T06:54:47.734Z',
      updatedAt: '2024-12-23T06:54:47.734Z',
    },
    {
      _id: '67690a73da4c362ab63f9749',
      name: 'है दुःख भंजन',
      description: 'है दुःख भंजन',
      imagePath: 'pushpmala/image/5j1z8.webp',
      url: 'https://www.youtube.com/watch?v=L2ZSKlaX7lU',
      savanUrl: '',
      youtubeUrl: 'L2ZSKlaX7lU',
      postType: 'VIDEO',
      postCategoryType: 'BHAJAN',
      streamType: 'FREE',
      godId: '674c03c4553bfe7521e193eb',
      language: 'hi',
      createdAt: '2024-12-23T07:00:03.672Z',
      updatedAt: '2024-12-23T07:00:03.672Z',
    },
    {
      _id: '676922bbe8773243ed77ee23',
      name: 'जय जय जय बंजरग बली',
      description: 'जय जय जय बंजरग बली',
      imagePath: 'pushpmala/image/z8r1p.webp',
      url: 'https://www.youtube.com/watch?v=Nx6s4AEFIeI',
      savanUrl: '',
      youtubeUrl: 'Nx6s4AEFIeI',
      postType: 'VIDEO',
      postCategoryType: 'BHAJAN',
      streamType: 'FREE',
      godId: '674c03c4553bfe7521e193eb',
      language: 'hi',
      createdAt: '2024-12-23T08:43:39.881Z',
      updatedAt: '2024-12-23T08:43:39.881Z',
    },
  ];

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

  return (
    <View style={styles.conatiner}>
      <StatusBar backgroundColor={'#FFFEFA'} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.headerContainer}>
          <HomeScreenHeader />
          {/* <GodsCircularList data={gods} /> */}
          {/* <ScalePress
            onPress={() => console.log('oks')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <Image
              source={require('../assets/images/share-pushpmala.png')}
              style={{
                height: 140,
                width: '90%',
                marginTop: 10,
                alignSelf: 'center',
              }}
              // resizeMode="contain"
            />
          </ScalePress> */}
        </View>
        <View>
          {!isLoading && (
            <GodsList
              title="सभी देवी-देवताओं के भजन"
              data={allGods?.data?.data}
            />
          )}
          <MediaListViewLandscape title="Top Songs" data={aaratiArray} />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <MediaListView title="Top Bhajans" data={bhajans} />
        </View>
      </ScrollView>

      {/* <View style={{position: 'absolute', bottom: 0}}> */}
      {/* <BannerAd
        ref={bannerRef}
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      /> */}
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Design.color.white,
    // marginTop: StatusBar.currentHeight,
  },
  headerContainer: {
    height: 100,
    width: '100%',
    backgroundColor: '#FFFEFA',
    borderBottomColor: '#fff5d5',
    borderBottomWidth: 0.6,
  },
  wrapper: {
    borderRadius: 10,
    marginVertical: 5,
    marginRight: 7,
    backgroundColor: '#ffffff',
  },
});
