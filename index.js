/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/core/localization/i18n';
import TrackPlayer from 'react-native-track-player';

TrackPlayer.registerPlaybackService(() => require('./service'));
AppRegistry.registerComponent(appName, () => App);
