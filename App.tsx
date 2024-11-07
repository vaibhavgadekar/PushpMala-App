// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigation} from './src/navigation/RootStackNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import BootSplash from 'react-native-bootsplash';

const App = () => {
  const hideSplash = async () => {
    await BootSplash.hide({fade: true});
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
