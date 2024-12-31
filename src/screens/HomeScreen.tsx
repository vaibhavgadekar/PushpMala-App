import React from 'react';
import {Button, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import UpdateDialog from '../components/organisms/dialogs/UpdateDialog';
import GodsList from '../components/organisms/GodsList';
import HomeScreenHeader from '../components/organisms/HomeScreenHeader';
import MediaListViewLandscape from '../components/organisms/MediaListViewLandscape';
import {Design} from '../namespaces/Design';
import {useFetchDashbordQuery} from '../redux/Dashbord/api';
import HomeScreenLoader from '../components/molecules/HomeScreenLoader';
import { localNotification } from '../utils/localNotification';


export const HomeScreen = () => {
  const {data, isLoading: isDashboardLoading} = useFetchDashbordQuery({});
  const {gods, list1, list2, list3, updateConfig} = data ?? {};

  return (
    <View style={styles.conatiner}>
      <StatusBar backgroundColor={'#FFFEFA'} barStyle={'dark-content'} />
      <Button title="Send Notification" onPress={localNotification}></Button>
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
