import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import GodsCircularList from '../components/organisms/GodsCircularList';
import {Design} from '../namespaces/Design';
import {useFetchDashbordQuery} from '../redux/Dashbord/api';
import HomeScreenHeader from '../components/organisms/HomeScreenHeader';

export const HomeScreen = () => {
  const {data} = useFetchDashbordQuery({});
  const {gods} = data ?? {};

  return (
    <View style={styles.conatiner}>
      <StatusBar backgroundColor={'#FFFEFA'} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.headerContainer}>
          <HomeScreenHeader />
          <GodsCircularList data={gods} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Design.color.white,
    marginTop: StatusBar.currentHeight,
  },
  headerContainer: {
    height: 400,
    width: '100%',
    backgroundColor: '#FFFEFA',
    borderBottomColor: '#fff5d5',
    borderBottomWidth: 0.6,
  },
});
