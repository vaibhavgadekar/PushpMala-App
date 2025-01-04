// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import TrackPlayer from 'react-native-track-player';
import {Provider} from 'react-redux';
import {RootStackNavigation} from './src/navigation/RootStackNavigation';
import {store} from './src/redux/store';
import {PermissionsAndroid} from 'react-native';

const App = () => {
  const hideSplash = async () => {
    await BootSplash.hide({fade: true});
    await TrackPlayer.setupPlayer();
    // …do multiple sync or async tasks
  };
  useEffect(() => {
    setTimeout(() => {
      hideSplash();
    }, 3000);
  }, []);

  useEffect(() => {
    requestUserPermission();
  }, []);

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
