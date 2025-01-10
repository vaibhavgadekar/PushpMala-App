import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../namespaces/RootStackParamList';
import WelcomeScreen from '../screens/WelcomeScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {Design} from '../namespaces/Design';
import AudioPlayScreen from '../screens/AudioPlayScreen';
import VideoPlayScreen from '../screens/VideoPlayScreen';
import GodDetailsScreen from '../screens/GodDetailsScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        animation: 'slide_from_right',
      }}>
      <RootStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
          navigationBarColor: '#BD936E',
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
      <RootStack.Screen
        name="VideoPlayScreen"
        component={VideoPlayScreen}
        options={{
          headerShown: false,
          navigationBarColor: Design.color.white,
        }}
      />
      <RootStack.Screen
        name="GodDetailsScreen"
        component={GodDetailsScreen}
        options={{
          headerShown: false,
          navigationBarColor: Design.color.white,
        }}
      />
    </RootStack.Navigator>
  );
};
