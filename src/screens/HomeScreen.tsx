import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import GodsList from '../components/organisms/GodsList';
import HomeScreenHeader from '../components/organisms/HomeScreenHeader';
import MediaListViewLandscape from '../components/organisms/MediaListViewLandscape';
import {Design} from '../namespaces/Design';
import {Post} from '../namespaces/Post';
import {useFetchDashbordQuery} from '../redux/Dashbord/api';
import {useFetchGodsQuery} from '../redux/god/api';
import {cdnUrl} from '../utils/constant';

export const aaratiArray: Post[] = [
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
  {
    _id: '676d2680502507d77e3fa273',
    name: 'केजो केशरी के लाल',
    description: 'केजो केशरी के लाल',
    imagePath: 'pushpmala/image/k7h3e.webp',
    url: 'https://www.youtube.com/watch?v=0zG8JMSqVXs',
    savanUrl: '',
    youtubeUrl: '0zG8JMSqVXs',
    postType: 'VIDEO',
    postCategoryType: 'BHAJAN',
    streamType: 'FREE',
    godId: '674c03c4553bfe7521e193eb',
    language: 'hi',
    createdAt: '2024-12-26T09:48:48.371Z',
    updatedAt: '2024-12-26T09:48:48.371Z',
  },
  {
    _id: '676d27d191deef2fe07305f6',
    name: 'दुनिया रचने वाले को भगवान कहते हैं।',
    description: 'दुनिया रचने वाले को भगवान कहते हैं।',
    imagePath: 'pushpmala/image/26xet.webp',
    url: 'https://www.youtube.com/watch?v=QRj1cjqVwCA',
    savanUrl: '',
    youtubeUrl: 'QRj1cjqVwCA',
    postType: 'VIDEO',
    postCategoryType: 'BHAJAN',
    streamType: 'FREE',
    godId: '674c03c4553bfe7521e193eb',
    language: 'hi',
    createdAt: '2024-12-26T09:54:25.494Z',
    updatedAt: '2024-12-26T09:54:25.494Z',
  },
  {
    _id: '676d2bfea98208142fdc6c8a',
    name: 'राम ना मिलेंगे हनुमान के बिना।',
    description: 'राम ना मिलेंगे हनुमान के बिना।',
    imagePath: 'pushpmala/image/2s7oz.webp',
    url: 'https://www.youtube.com/watch?v=fdD4_lexi7s',
    savanUrl: '',
    youtubeUrl: 'fdD4_lexi7s',
    postType: 'VIDEO',
    postCategoryType: 'BHAJAN',
    streamType: 'FREE',
    godId: '674c03c4553bfe7521e193eb',
    language: 'hi',
    createdAt: '2024-12-26T10:12:14.641Z',
    updatedAt: '2024-12-26T10:12:14.641Z',
  },
  {
    _id: '676d2dcfc75f6bdf3a81d0c3',
    name: 'राम जी के साथ जो हनुमान नहीं होते।',
    description: 'राम जी के साथ जो हनुमान नहीं होते।',
    imagePath: 'pushpmala/image/6ijox.webp',
    url: 'https://www.youtube.com/watch?v=ATpugS1sWh4',
    savanUrl: '',
    youtubeUrl: 'ATpugS1sWh4',
    postType: 'VIDEO',
    postCategoryType: 'BHAJAN',
    streamType: 'FREE',
    godId: '674c03c4553bfe7521e193eb',
    language: 'hi',
    createdAt: '2024-12-26T10:19:59.379Z',
    updatedAt: '2024-12-26T10:19:59.379Z',
  },
  {
    _id: '676d3005b51a9dde9472eed1',
    name: 'राम भी मिलेंगे तुझे, श्याम भी मिलेंगे।"',
    description: 'राम भी मिलेंगे तुझे, श्याम भी मिलेंगे।"',
    imagePath: 'pushpmala/image/s193ti.webp',
    url: 'https://www.youtube.com/watch?v=GApGMssxELQ',
    savanUrl: '',
    youtubeUrl: 'GApGMssxELQ',
    postType: 'VIDEO',
    postCategoryType: 'BHAJAN',
    streamType: 'FREE',
    godId: '674c03c4553bfe7521e193eb',
    language: 'hi',
    createdAt: '2024-12-26T10:29:25.625Z',
    updatedAt: '2024-12-26T10:29:25.625Z',
  },
  {
    _id: '676d49fcaeed7f25c547703a',
    name: 'घर में पधारो गजानन जी।',
    description: 'घर में पधारो गजानन जी।',
    imagePath: 'pushpmala/image/d4elg.webp',
    url: 'https://www.youtube.com/watch?v=nLUmRxc6140',
    savanUrl: '',
    youtubeUrl: 'nLUmRxc6140',
    postType: 'VIDEO',
    postCategoryType: 'BHAJAN',
    streamType: 'FREE',
    godId: '674c07a2a7db3531ce6ca989',
    language: 'hi',
    createdAt: '2024-12-26T12:20:12.042Z',
    updatedAt: '2024-12-26T12:20:12.042Z',
  },
  {
    _id: '676d4a92aeed7f25c547703d',
    name: 'आओ आओ गजानन आओ',
    description: 'आओ आओ गजानन आओ',
    imagePath: 'pushpmala/image/yepp8.webp',
    url: 'https://www.youtube.com/watch?v=UktwNM4dog0',
    savanUrl: '',
    youtubeUrl: 'UktwNM4dog0',
    postType: 'VIDEO',
    postCategoryType: 'BHAJAN',
    streamType: 'FREE',
    godId: '674c07a2a7db3531ce6ca989',
    language: 'hi',
    createdAt: '2024-12-26T12:22:42.141Z',
    updatedAt: '2024-12-26T12:22:42.141Z',
  },
  {
    _id: '676e2b8ea4dec42867e81ab2',
    name: 'ॐ गं गणपतये नमो नमः',
    description: 'ॐ गं गणपतये नमो नमः',
    imagePath: 'pushpmala/image/3v8ge.webp',
    url: 'https://www.youtube.com/watch?v=On8RhqLwLvw',
    savanUrl: '',
    youtubeUrl: 'On8RhqLwLvw',
    postType: 'VIDEO',
    postCategoryType: 'MANTRA',
    streamType: 'FREE',
    godId: '674c07a2a7db3531ce6ca989',
    language: 'hi',
    createdAt: '2024-12-27T04:22:38.105Z',
    updatedAt: '2024-12-27T04:22:38.105Z',
  },
  {
    _id: '676e2c16a4dec42867e81ab4',
    name: 'वक्रतुंड महाकाय',
    description: 'वक्रतुंड महाकाय',
    imagePath: 'pushpmala/image/1qtap.webp',
    url: 'https://www.youtube.com/watch?v=9MAshN0I9Kk',
    savanUrl: '',
    youtubeUrl: '9MAshN0I9Kk',
    postType: 'VIDEO',
    postCategoryType: 'MANTRA',
    streamType: 'FREE',
    godId: '674c07a2a7db3531ce6ca989',
    language: 'hi',
    createdAt: '2024-12-27T04:24:54.655Z',
    updatedAt: '2024-12-27T04:24:54.655Z',
  },
  {
    _id: '676e2f83a6eed65007d622a8',
    name: 'सुखकर्ता दुखहर्ता',
    description: 'सुखकर्ता दुखहर्ता',
    imagePath: 'pushpmala/image/qdgb9.webp',
    url: 'https://www.youtube.com/watch?v=4ncAlDhIfTw',
    savanUrl: '',
    youtubeUrl: '4ncAlDhIfTw',
    postType: 'VIDEO',
    postCategoryType: 'ARATI',
    streamType: 'FREE',
    godId: '674c07a2a7db3531ce6ca989',
    language: 'hi',
    createdAt: '2024-12-27T04:39:31.026Z',
    updatedAt: '2024-12-27T04:39:31.026Z',
  },
  {
    _id: '676e306fa6eed65007d622ac',
    name: 'गौरी सूत प्रथमेश्वर : गणेश भजन',
    description: 'गौरी सूत प्रथमेश्वर : गणेश भजन',
    imagePath: 'pushpmala/image/ct33i.webp',
    url: 'https://www.youtube.com/watch?v=PH96z1wmHXU',
    savanUrl: '',
    youtubeUrl: 'PH96z1wmHXU',
    postType: 'VIDEO',
    postCategoryType: 'BHAJAN',
    streamType: 'FREE',
    godId: '674c07a2a7db3531ce6ca989',
    language: 'hi',
    createdAt: '2024-12-27T04:43:27.430Z',
    updatedAt: '2024-12-27T04:43:27.430Z',
  },
  {
    _id: '676e30e5a6eed65007d622ae',
    name: 'चलो आरती उतारे श्री गणेश की ',
    description: 'चलो आरती उतारे श्री गणेश की ',
    imagePath: 'pushpmala/image/ohoga.webp',
    url: 'https://www.youtube.com/watch?v=8o5QUaukoTw',
    savanUrl: '',
    youtubeUrl: '8o5QUaukoTw',
    postType: 'VIDEO',
    postCategoryType: 'ARATI',
    streamType: 'FREE',
    godId: '674c07a2a7db3531ce6ca989',
    language: 'hi',
    createdAt: '2024-12-27T04:45:25.354Z',
    updatedAt: '2024-12-27T04:45:25.354Z',
  },
  {
    _id: '676e3253b579de1ce4eff9da',
    name: 'एकदंताय वक्रतुण्डाय गौरीतनयाय धीमहि',
    description: 'एकदंताय वक्रतुण्डाय गौरीतनयाय धीमहि',
    imagePath: 'pushpmala/image/8m98d.webp',
    url: 'https://www.youtube.com/watch?v=ym4o5F8ncY0',
    savanUrl: '',
    youtubeUrl: 'ym4o5F8ncY0',
    postType: 'VIDEO',
    postCategoryType: 'BHAJAN',
    streamType: 'FREE',
    godId: '674c07a2a7db3531ce6ca989',
    language: 'hi',
    createdAt: '2024-12-27T04:51:31.460Z',
    updatedAt: '2024-12-27T04:51:31.460Z',
  },
  {
    _id: '676e34f729a0189edf667480',
    name: 'जय गणेश जय गणेश देवा',
    description: 'जय गणेश जय गणेश देवा',
    imagePath: 'pushpmala/image/5ug5u.webp',
    url: 'https://www.youtube.com/watch?v=Yuex2EnsGiY',
    savanUrl: '',
    youtubeUrl: 'Yuex2EnsGiY',
    postType: 'VIDEO',
    postCategoryType: 'ARATI',
    streamType: 'FREE',
    godId: '674c07a2a7db3531ce6ca989',
    language: 'hi',
    createdAt: '2024-12-27T05:02:47.493Z',
    updatedAt: '2024-12-27T05:02:47.493Z',
  },
  {
    _id: '676e358129a0189edf667483',
    name: '108 श्री गणेश मंत्र',
    description: '108 श्री गणेश मंत्र',
    imagePath: 'pushpmala/image/kxbf1j.webp',
    url: 'https://www.youtube.com/watch?v=8vduH02Oi1U',
    savanUrl: '',
    youtubeUrl: '8vduH02Oi1U',
    postType: 'VIDEO',
    postCategoryType: 'MANTRA',
    streamType: 'FREE',
    godId: '674c07a2a7db3531ce6ca989',
    language: 'hi',
    createdAt: '2024-12-27T05:05:05.739Z',
    updatedAt: '2024-12-27T05:05:05.739Z',
  },
];

export const bhajans = [
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

export const HomeScreen = () => {
  const {data} = useFetchDashbordQuery({});
  const {data: allGods, isLoading} = useFetchGodsQuery({});
  const {gods, list1, list2, list3} = data ?? {};

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
            <>
              <GodsList title="सभी देवी-देवताओं के भजन" data={gods} />
              <View style={{paddingVertical: Design.space.large}}>
                <MediaListViewLandscape
                  title={'हनुमान भक्तिगीत'}
                  data={list1?.posts}
                />
                <MediaListViewLandscape
                  title={'गणेश आरती और भजन'}
                  data={list2?.posts}
                />
                <MediaListViewLandscape
                  title={list3?.label}
                  data={list3?.posts}
                />
              </View>
            </>
          )}
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
