import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {Design} from '../../namespaces/Design';
import {Skeleton} from '../atoms/Skeleton';
import ThumbnailCardLoader from './ThumbnailCardLoader';

export default function HomeScreenLoader() {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.separatorLine} />
        <Skeleton height={50} width={'50%'} />
        <View style={styles.separatorLine} />
      </View>

      <ScrollView
        style={{marginTop: Design.space.regular}}
        horizontal
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          numColumns={Math.ceil(data.length / 2)}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          directionalLockEnabled={true}
          alwaysBounceVertical={true}
          renderItem={({index}) => {
            return (
              <Skeleton
                height={150}
                width={150}
                key={index}
                style={styles.wrapper}
              />
            );
          }}
        />
      </ScrollView>

      <ThumbnailCardLoader />
      <ThumbnailCardLoader />
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
