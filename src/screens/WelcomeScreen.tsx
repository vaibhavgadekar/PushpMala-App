import React from 'react';
import {ImageBackground, StatusBar, View, StyleSheet} from 'react-native';
import {PMButton, PMTextLabel} from '../components/atoms';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <ImageBackground
            source={require('../assets/images/welcome-bg-2.png')}
            style={styles.imageBackground}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <PMTextLabel
              title="पुष्पमाला में आपका स्वागत है"
              fontFamily="KohinoorDevanagari-Bold"
              type="large"
              color="lightGray"
            />
            <PMTextLabel
              title="यहाँ, आप भक्ति, आरती और भजन का आनंद ले सकते हैं। चलिए, इस आध्यात्मिक यात्रा की शुरुआत करें और भगवान के प्रति अपनी श्रद्धा साझा करें"
              fontFamily="KohinoorDevanagari-Regular"
              type="regular"
              color="lightGray"
              style={styles.descriptionText}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PMButton
              title="अपनी भक्ति यात्रा शुरू करें"
              onPress={handleNavigation}
              buttonType="primary"
              fontFamily="KohinoorDevanagari-Regular"
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  backgroundContainer: {
    height: '80%',
    width: '100%',
    backgroundColor: 'lightgray',
    overflow: 'hidden',
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: 'white',
    gap: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: -70,
  },
  descriptionText: {
    textAlign: 'center',
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
