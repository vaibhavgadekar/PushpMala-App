import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../namespaces/RootStackParamList';
import WelcomeScreen from '../screens/WelcomeScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {Design} from '../namespaces/Design';
import AudioPlayScreen from '../screens/AudioPlayScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <RootStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
          navigationBarColor: Design.color.lightYellow,
        }}
      />
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          navigationBarColor: Design.color.white,
        }}
      />
      <RootStack.Screen
        name="AudioPlayScreen"
        component={AudioPlayScreen}
        options={{
          headerShown: false,
          navigationBarColor: Design.color.white,
        }}
      />
    </RootStack.Navigator>
  );
};
