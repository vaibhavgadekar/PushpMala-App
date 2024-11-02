import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Design} from '../../namespaces/Design';

export type TextLabelProps = {
  type?: keyof typeof Design.fontSize;
  fontFamily?: keyof typeof Design.fontFamily;
  title: string;
  color: keyof typeof Design.color;
};

export const PMTextLabel = ({
  color,
  title,
  type = 'regular',
  fontFamily = 'OnestRegular',
}: TextLabelProps) => {
  return (
    <Text
      style={[
        styles.text,
        {
          color: Design.color[color],
          fontSize: Design.fontSize[type],
          fontFamily: Design.fontFamily[fontFamily],
        },
      ]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
