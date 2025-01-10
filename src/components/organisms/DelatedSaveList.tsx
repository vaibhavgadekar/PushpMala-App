import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Design} from '../../namespaces/Design';
import { useTranslation } from 'react-i18next';

const DelatedSaveList = () => {
  const {t}=useTranslation()
  return (
    <View
      style={styles.container}>
      <Text
        style={styles.text}>
      {t("home:youtubeScreen:noData")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '50%',
    },
    text:{
        fontSize: 30,
        color: Design.color.lightGray,
        fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
    }
})

export default DelatedSaveList;
