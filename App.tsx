// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigation} from './src/navigation/RootStackNavigation';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
