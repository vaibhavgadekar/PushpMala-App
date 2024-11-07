import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../namespaces/RootStackParamList';
import WelcomeScreen from '../screens/WelcomeScreen';
import {HomeScreen} from '../screens/HomeScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
      }}>
      <RootStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name="HomeScreen" component={HomeScreen} options={{
        headerShown:false
      }}/>
    </RootStack.Navigator>
  );
};
