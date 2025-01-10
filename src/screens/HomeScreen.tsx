import React from 'react';
import {Button, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import UpdateDialog from '../components/organisms/dialogs/UpdateDialog';
import GodsList from '../components/organisms/GodsList';
import HomeScreenHeader from '../components/organisms/HomeScreenHeader';
import MediaListViewLandscape from '../components/organisms/MediaListViewLandscape';
import {Design} from '../namespaces/Design';
import {useFetchDashbordQuery} from '../redux/Dashbord/api';
import HomeScreenLoader from '../components/molecules/HomeScreenLoader';
import {useTranslation} from 'react-i18next';

export const HomeScreen = () => {
  const {data, isLoading: isDashboardLoading} = useFetchDashbordQuery({});
  const {t} = useTranslation();
  const {gods, list1, list2, list3, list4, list5, updateConfig} = data ?? {};

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
        {isDashboardLoading && <HomeScreenLoader />}
        <View>
          {!isDashboardLoading && (
            <>
              <GodsList title={t('home:godList:title')} data={gods} />

              <View style={{paddingVertical: Design.space.large}}>
                <MediaListViewLandscape
                  title={t('home:postLists:list1')}
                  data={list1?.posts}
                />
                <MediaListViewLandscape
                  title={t('home:postLists:list2')}
                  data={list2?.posts}
                />
                <MediaListViewLandscape
                  title={t('home:postLists:list3')}
                  data={list3?.posts}
                />
                <MediaListViewLandscape
                  title={t('home:postLists:list4')}
                  data={list4?.posts}
                />
                <MediaListViewLandscape
                  title={t('home:postLists:list5')}
                  data={list5?.posts}
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>

      {updateConfig && <UpdateDialog updateConfig={updateConfig} />}
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Design.color.white,
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
