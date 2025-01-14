/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/core/localization/i18n';
import TrackPlayer from 'react-native-track-player';
import notifee, {AndroidImportance, AndroidStyle} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

async function onMessageReceived(message) {
  const res = JSON.parse(message?.data?.notifee);

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
    lights: true,
    lightColor: 'red',
  });

  if (res) {
    // Do something
    notifee.displayNotification({
      title: res?.title,
      body: res?.body,
      android: {
        channelId: channelId,
        smallIcon: 'ic_stat_onesignal_default',
        importance: AndroidImportance.HIGH,
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture: res?.picture,
        },
        largeIcon: 'ic_launcher',
        color: '#D42727',
        sound: 'tone',
        timestamp: Date.now(), // 5 minutes ago
        showTimestamp: true,
        pressAction: {
          id: 'default',
        },
      },
    });
  }
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

TrackPlayer.registerPlaybackService(() => require('./service'));
AppRegistry.registerComponent(appName, () => App);
