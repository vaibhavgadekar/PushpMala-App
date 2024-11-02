import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {Design} from '../../namespaces/Design';
import {SquircleView} from 'react-native-figma-squircle';
import ArrowRight from '../../assets/icons/ArrowRight';
import ScalePress from './ScalePress';

export type InputProps = {
  leftIcon?: {
    icon: React.ReactElement;
    onIconPress: () => void;
  };
  onPress: () => void;
} & Omit<TextInputProps, 'testID'>;

export const PMInput = ({...props}: InputProps) => {
  const emptyFunction = () => {};

  return (
    <SquircleView
      squircleParams={{
        cornerSmoothing: 0.9,
        cornerRadius: Design.space.regular,
        fillColor: 'transparent',
      }}
      style={styles.container}>
      <TextInput
        {...props}
        placeholderTextColor={'#595D62'}
        style={styles.textView}
      />
      <ScalePress
        onPress={props?.leftIcon?.onIconPress ?? emptyFunction}
        style={styles.iconScale}>
        <>{props?.leftIcon?.icon && props?.leftIcon.icon}</>
      </ScalePress>
    </SquircleView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Design.color.white,
    borderRadius: 16,
    borderColor: Design.color.gray,
    borderWidth: 1,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textView: {
    fontFamily: Design.fontFamily.OnestRegular,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Design.space.regularsmall,
    color: Design.color.black,
    width: '80%',
  },
  iconScale: {width: '12 %', justifyContent: 'center', alignItems: 'center'},
});
