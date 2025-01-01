import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {Design} from '../../namespaces/Design';
import {Skeleton} from '../atoms/Skeleton';
import ThumbnailCardLoader from './ThumbnailCardLoader';
import GodThumbnailCardLoader from './GodThumbnailCardLoader';

export default function GodScreenLoader() {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <View>
      <GodThumbnailCardLoader />
      <GodThumbnailCardLoader />
      <GodThumbnailCardLoader />

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    gap: Design.space.small,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: Design.space.regular,
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
    marginLeft: 16,
  },
  wrapper: {
    borderRadius: 10,
    marginVertical: 5,
    marginRight: 7,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 150,
    width: 150,
  },
});
