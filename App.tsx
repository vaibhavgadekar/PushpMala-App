// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import TrackPlayer from 'react-native-track-player';
import { Provider } from 'react-redux';
import { RootStackNavigation } from './src/navigation/RootStackNavigation';
import { store } from './src/redux/store';

const App = () => {
  const hideSplash = async () => {
    await BootSplash.hide({fade: true});
    await TrackPlayer.setupPlayer();
    // …do multiple sync or async tasks
  };
  useEffect(() => {
    hideSplash();
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
