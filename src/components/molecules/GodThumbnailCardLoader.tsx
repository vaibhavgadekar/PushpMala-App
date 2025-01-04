import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Design} from '../../namespaces/Design';
import {Skeleton} from '../atoms/Skeleton';

export default function GodThumbnailCardLoader() {
  const data = [1, 2, 3, 4];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Skeleton height={30} width={130} style={styles.headerSkeleton} />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.scrollContainer}>
          {data?.map(index => (
            <View key={index} style={styles.cardContainer}>
              <Skeleton key={index} height={120} width={120} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Design.space.small,
  },
  headerContainer: {
    marginTop: Design.space.large,
    paddingHorizontal: Design.space.regular,
  },
  headerSkeleton: {
    marginLeft: Design.space.small,
  },
  scrollContainer: {
    marginTop: 16,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Design.space.small,
  },
  cardSkeleton: {
    marginTop: Design.space.small,
  },
});
