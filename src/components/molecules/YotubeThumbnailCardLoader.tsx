import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Design} from '../../namespaces/Design';
import {Skeleton} from '../atoms/Skeleton';

export default function YoutubeThumbnailCardLoader() {
  const data = [1, 2, 3, 4];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Skeleton height={30} width={150} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          {data?.map(index => (
            <View key={index} style={styles.cardContainer}>
              <Skeleton key={index} height={90} width={'40%'} />
              <Skeleton height={20} width={200} />
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
    marginTop: Design.space.small,
    paddingHorizontal: Design.space.regular,
  },

  scrollContainer: {
    marginTop: 16,
  },
  cardContainer: {
    gap: 12,
    marginTop: 12,
    flexDirection: 'row',
  },
  cardSkeleton: {
    marginTop: Design.space.small,
  },
});
