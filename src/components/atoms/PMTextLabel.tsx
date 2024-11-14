import React from 'react';
import {Text, TextProps} from 'react-native';
import {Design} from '../../namespaces/Design';

export type TextLabelProps = {
  type?: keyof typeof Design.fontSize;
  fontFamily?: keyof typeof Design.fontFamily;
  title: string;
  color?: keyof typeof Design.color;
} & Omit<TextProps, 'testID'>;

export const PMTextLabel = ({
  color = 'black',
  title,
  type = 'regular',
  fontFamily = 'OnestRegular',
  style,
  ...props
}: TextLabelProps) => {
  return (
    <Text
      {...props}
      style={[
        {
          color: Design.color[color],
          fontSize: Design.fontSize[type],
          fontFamily: Design.fontFamily[fontFamily],
        },
        style,
      ]}>
      {title}
    </Text>
  );
};
