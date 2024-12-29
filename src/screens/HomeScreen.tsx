import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import UpdateDialog from '../components/organisms/dialogs/UpdateDialog';
import GodsList from '../components/organisms/GodsList';
import HomeScreenHeader from '../components/organisms/HomeScreenHeader';
import MediaListViewLandscape from '../components/organisms/MediaListViewLandscape';
import { Design } from '../namespaces/Design';
import { useFetchDashbordQuery } from '../redux/Dashbord/api';

export const HomeScreen = () => {
  const {data, isLoading: isDashboardLoading} = useFetchDashbordQuery({});
  const {gods, list1, list2, list3, updateConfig} = data ?? {};

  

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
          {!isDashboardLoading && (
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
