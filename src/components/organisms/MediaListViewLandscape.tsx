import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {Design} from '../../namespaces/Design';
import {PMTextLabel} from '../atoms';
import ScalePress from '../atoms/ScalePress';
import {MediaListViewProps} from './types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../namespaces/RootStackParamList';
import {cdnUrl} from '../../utils/constant';
import {Post} from '../../namespaces/Post';

export default function MediaListViewLandscape({
  data,
  title,
}: MediaListViewProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  if (data?.length <= 0) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitle} />
        <PMTextLabel title={title} style={styles.titleLabel} />
      </View>
      <FlatList
        style={styles.flatList}
        horizontal
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}
        renderItem={({item, index}: {item: Post; index: number}) => {
          return (
            <ScalePress
              key={index}
              style={styles.wrapper}
              onPress={() =>
                navigation.push('VideoPlayScreen', {
                  postItem: item,
                  relatedVodeos: data,
                })
              }>
              <>
                <Image
                  source={{uri: cdnUrl + item?.imagePath}}
                  style={styles.image}
                />
                <PMTextLabel
                  title={item?.name}
                  numberOfLines={2}
                  style={styles.imageTitle}
                />
              </>
            </ScalePress>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleLabel: {
    color: Design.color.black,
    fontSize: 20,
    marginLeft: Design.space.small,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
  },
  flatList: {},
  flatListContent: {
    alignSelf: 'flex-start',
    marginLeft: Design.space.regular,
    paddingRight: 16,
  },
  wrapper: {
    borderRadius: 10,
    paddingVertical: 5,
    marginRight: 7,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 8,
  },
  imageTitle: {
    fontSize: 14,
    marginTop: Design.space.small,
    color: Design.color.lightGray,
    width: 120,
    textAlign: 'center',
    fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  headerTitle: {
    width: 4,
    height: 20,
    backgroundColor: Design.color.gray,
  },
});
