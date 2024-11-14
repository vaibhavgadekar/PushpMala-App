/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/core/localization/i18n';
import {AdManager, TestIds} from 'react-native-admob-native-ads';
import TrackPlayer from 'react-native-track-player';

AdManager.registerRepository({
  name: 'imageAd',
  adUnitId: TestIds.Image,
  numOfAds: 3,
  nonPersonalizedAdsOnly: false,
  videoOptions: {
    mute: false,
  },
  expirationPeriod: 3600000, // in milliseconds (optional)
  mediationEnabled: false,
}).then(result => {
  console.log('registered: ', result);
});

TrackPlayer.registerPlaybackService(() => require('./service'));
AppRegistry.registerComponent(appName, () => App);
