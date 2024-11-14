import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Design} from '../../namespaces/Design';
import {Trans, useTranslation} from 'react-i18next';

export default function HomeScreenHeader() {
  const {t} = useTranslation();
  return (
    <View>
      <Trans
        components={{
          text: <Text style={styles.mainText} />,
          orange: <Text style={styles.highlightText} />,
        }}>
        {t('home:jaiShriRam', {name: 'Vaibhav'})}
      </Trans>
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>{t('home:greeting')}</Text>
        <View style={styles.separator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 24,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
    color: '#666664',
    paddingHorizontal: Design.space.regular,
  },
  highlightText: {
    fontSize: 22,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
    color: '#FA9C3D',
  },
  subTextContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
    paddingHorizontal: Design.space.regular,
  },
  subText: {
    fontSize: 14,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
    color: '#666664',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#A3A5A4',
    marginLeft: 12,
    opacity: 0.4,
  },
});
