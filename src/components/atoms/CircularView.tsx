import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {Design} from '../../namespaces/Design';

export type CircularViewProps = {
  imgPath: ImageSourcePropType;
  bgColor: string;
  title: string;
};

export default function CircularView({
  imgPath,
  bgColor,
  title,
}: CircularViewProps) {
  return (
    <View
      style={{
        justifyContent: 'center',
        width: 80,
        alignItems: 'center',
      }}>
      <View
        style={{
          padding: 4,
          borderWidth: 2,
          height: 70,
          width: 70,
          borderRadius: 80,
          borderColor: Design.color.gray,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {imgPath && (
          <Image
            style={{
              height: 60,
              width: 60,
              borderRadius: 80,
              backgroundColor: bgColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={imgPath}
          />
        )}
      </View>
      <Text
        style={{
          fontSize: 12,
          color: '#666664',
          textAlign: 'center',
          fontFamily: Design.fontFamily['KohinoorDevanagari-Regular'],
        }}>
        {title}
      </Text>
    </View>
  );
}
