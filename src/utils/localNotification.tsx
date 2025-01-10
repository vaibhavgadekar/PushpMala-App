// import PushNotification, {Importance} from 'react-native-push-notification';
import notifee, { AndroidImportance, AndroidStyle, AndroidVisibility, IntervalTrigger, TimestampTrigger, TimeUnit, TriggerType } from '@notifee/react-native';

export const localNotification=async()=> {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  const trigger: IntervalTrigger = {
    type: TriggerType.INTERVAL,
    interval: 15,
    timeUnit: TimeUnit.MINUTES,
  };

  // Display a notification
  await notifee.createTriggerNotification({
    title: '🌸 दिन की शुरुआत भगवान के साथ करें',
    body: '📿 सुबह के मंत्र सुनें और ✨ सकारात्मक ऊर्जा से भरें। 🙏 अपने दिन की शुभ शुरुआत करें।',
    android: {
      channelId,
      largeIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture: 'https://m.media-amazon.com/images/I/91GXbWO4sTL.jpg',
      },
      pressAction: {
        id: 'default',
      },
    },
  },
  trigger).catch((er)=> console.log({er})
  );
}

