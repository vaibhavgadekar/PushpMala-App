import React from 'react';
import {Image, Pressable, View, StyleSheet} from 'react-native';
import {Design} from '../../namespaces/Design';
import {PMTextLabel} from '../atoms';

export type props = {
  id: string;
  title: string;
  author_name: string;
  isCurrentPlaying: boolean;
  onPress: (selectedVideoId: string) => void;
};

export default function YoutubeCard({
  author_name,
  title,
  onPress,
  id,
  isCurrentPlaying,
}: props) {
  return (
    <View>
      <Pressable
        onPress={() => onPress(id)}
        style={[
          styles.pressableContainer,
          isCurrentPlaying && styles.currentPlayingBackground,
        ]}>
        <View style={styles.thumbnailContainer}>
          <Image
            source={{
              uri: `https://img.youtube.com/vi/${id}/sddefault.jpg`,
            }}
            style={styles.thumbnailImage}
          />
        </View>
        <View style={styles.textContainer}>
          <PMTextLabel
            title={title ?? ''}
            numberOfLines={3}
            style={styles.titleText}
          />
          <PMTextLabel
            title={author_name ?? ''}
            numberOfLines={3}
            style={styles.authorText}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressableContainer: {
    padding: Design.space.small,
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: Design.space.xsmall,
    backgroundColor: 'white',
  },
  currentPlayingBackground: {
    backgroundColor: '#efefef',
  },
  thumbnailContainer: {
    width: '40%',
    height: 90,
  },
  thumbnailImage: {
    height: '100%',
    width: '100%',
    borderRadius: Design.space.xsmall,
  },
  textContainer: {
    width: '60%',
    height: 90,
  },
  titleText: {
    fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
    fontSize: Design.fontSize.regular,
    marginLeft: Design.space.xsmall,
  },
  authorText: {
    fontFamily: Design.fontFamily['KohinoorDevanagari-Regular'],
    fontSize: Design.fontSize.small,
    marginLeft: Design.space.xsmall,
    color: Design.color.lightGray,
  },
});
