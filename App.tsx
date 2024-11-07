// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigation} from './src/navigation/RootStackNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <RootStackNavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
