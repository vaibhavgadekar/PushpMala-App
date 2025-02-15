import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {Design} from '../../namespaces/Design';
import {PMTextLabel} from '../atoms';
import ScalePress from '../atoms/ScalePress';
import {MediaListViewProps} from './types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../namespaces/RootStackParamList';

export default function MediaListView({data, title}: MediaListViewProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <PMTextLabel title={title} style={styles.titleLabel} />
      <FlatList
        style={styles.flatList}
        horizontal
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}
        renderItem={({item, index}) => {
          return (
            <ScalePress
              key={index}
              style={styles.wrapper}
              onPress={() => navigation.push('VideoPlayScreen', {image: item})}>
              <>
                <Image source={{uri: item}} style={styles.image} />
                <PMTextLabel
                  title="Deewana Tera Aaya Baba Teri Shirdi Mein"
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
    marginTop: Design.space.regular,
  },
  titleLabel: {
    color: Design.color.lightGray,
    fontSize: 20,
    marginLeft: Design.space.regular,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
  },
  flatList: {
    marginTop: Design.space.small,
  },
  flatListContent: {
    alignSelf: 'flex-start',
    marginLeft: Design.space.regular,
  },
  wrapper: {
    borderRadius: 10,
    marginVertical: 5,
    marginRight: 7,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  imageTitle: {
    fontSize: Design.space.regularsmall,
    marginTop: Design.space.small,
    color: Design.color.primary,
    width: 120,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
  },
});
