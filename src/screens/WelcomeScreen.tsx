import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import ArrowRight from '../assets/icons/ArrowRight';
import { PMButton, PMTextLabel } from '../components/atoms';
import ChangeLangDialog from '../components/organisms/dialogs/ChangeLangDialog';
import { Design } from '../namespaces/Design';
import { RootStackParamList } from '../namespaces/RootStackParamList';

export default function WelcomeScreen() {
  const {t} = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
            style={styles.imageBackground}>
            <ChangeLangDialog />
          </ImageBackground>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <PMTextLabel
              title={t('userOnboard:welcome:titleText')}
              fontFamily="KohinoorDevanagari-Bold"
              type="large"
              color="lightGray"
            />
            <PMTextLabel
              title={t('userOnboard:welcome:infoText')}
              fontFamily="KohinoorDevanagari-Regular"
              type="regular"
              color="lightGray"
              style={styles.descriptionText}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PMButton
              title={t('userOnboard:welcome:buttonText')}
              onPress={handleNavigation}
              buttonType="primary"
              fontFamily="KohinoorDevanagari-Regular"
              rightIcon={<ArrowRight />}
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
    overflow: 'hidden',
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: Design.color.lightYellow,
    gap: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: -70,
  },
  descriptionText: {
    textAlign: 'center',
    paddingHorizontal: Design.space.regular,
    marginVertical: Design.space.small,
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
