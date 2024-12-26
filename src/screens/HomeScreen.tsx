import React, {useRef} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import ScalePress from '../components/atoms/ScalePress';
import GodsCircularList from '../components/organisms/GodsCircularList';
import GodsList from '../components/organisms/GodsList';
import HomeScreenHeader from '../components/organisms/HomeScreenHeader';
import MediaListView from '../components/organisms/MediaListView';
import {Design} from '../namespaces/Design';
import {useFetchDashbordQuery} from '../redux/Dashbord/api';
import {cdnUrl} from '../utils/constant';
import {useFetchGodsQuery} from '../redux/god/api';

export const HomeScreen = () => {
  const {data} = useFetchDashbordQuery({});
  const {data: allGods, isLoading} = useFetchGodsQuery({});
  const {gods} = data ?? {};

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

  const aaratiArray = [
    'https://c.saavncdn.com/099/Shri-Krishna-Govinda-Hare-Murari-Hindi-2022-20220715191446-500x500.jpg',
    'https://c.saavncdn.com/143/Ashutosh-Shashank-Shekhar-Hindi-2021-20211203184303-500x500.jpg',
    'https://c.saavncdn.com/null/Sukhakarta-Dukhakarta-Marathi-2019-20190830080731-500x500.jpg',
    'https://c.saavncdn.com/151/Durga-Stuti-Hindi-2000-20240925111323-500x500.jpg',
    cdnUrl + 'pushpmala/image/kxo2w.webp',
    cdnUrl + 'pushpmala/image/v2oab.webp',
    cdnUrl + 'pushpmala/image/htx8ek.webp',
    cdnUrl + 'pushpmala/image/kylo7.webp',
    cdnUrl + 'pushpmala/image/3mntc.webp',
    cdnUrl + 'pushpmala/image/99bif.webp',
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

  console.log({allGods});

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
          <MediaListView title="Top Songs" data={aaratiArray} />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <MediaListView title="Top Bhajans" data={bhajans} />
          <MediaListView title="Top Bhajans" data={bhajans} />
        </View>
      </ScrollView>

     
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
