import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {Design} from '../../namespaces/Design';
import {Skeleton} from '../atoms/Skeleton';
import ThumbnailCardLoader from './ThumbnailCardLoader';
import YoutubeThumbnailCardLoader from './YotubeThumbnailCardLoader';

export default function YoutubeScreenLoader() {

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.separatorLine} />
        <Skeleton height={200} width={'100%'} />
        <View style={styles.separatorLine} />
      </View>

      <YoutubeThumbnailCardLoader />
      <YoutubeThumbnailCardLoader />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    gap: Design.space.small,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 12,
    marginTop: Design.space.small,
  },
  separatorLine: {
    height: 2,
    width: 60,
    backgroundColor: Design.color.baseLight,
  },
  titleText: {
    color: Design.color.lightGray,
    fontSize: 20,
    marginVertical: Design.space.regular,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
  },
  flatListContainer: {
    alignSelf: 'flex-start',
    marginLeft: Design.space.regular,
  },
  wrapper: {
    borderRadius: 30,
    marginVertical: 5,
    marginRight: 7,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 150,
    width: 150,
  },
});
