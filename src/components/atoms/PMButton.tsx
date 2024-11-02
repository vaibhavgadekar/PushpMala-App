import React, {Component} from 'react';
import {
  Platform,
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import {SquircleView} from 'react-native-figma-squircle';

import {PMTextLabel} from './PMTextLabel';
import {Design} from '../../namespaces/Design';
import ScalePress from './ScalePress';


export type PMButtonType =
  | 'primary'
  | 'disable'
  | 'secondary'
  | 'withIcon'
  | 'search';

interface ButtonProps {
  buttonType?: PMButtonType;
  title: string;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;

  onPress: () => void;
  onSubmit?: () => void;
}

const DisableButton = (props: ButtonProps) => (
  <ScalePress onPress={props?.onPress}>
    <SquircleView
      style={styles.button}
      squircleParams={{
        cornerSmoothing: 0.9,
        cornerRadius: Design.space.regular,
        fillColor: Design.color.gray,
      }}>
      <PMTextLabel
        type="regular"
        title={props?.title}
        color="black"
        fontFamily="OnestMedium"
      />
    </SquircleView>
  </ScalePress>
);
const PrimaryButton = (props: ButtonProps) => (
  <ScalePress onPress={props?.onPress}>
    <SquircleView
      style={styles.button}
      squircleParams={{
        cornerSmoothing: 0.9,
        cornerRadius: 20,
        fillColor: Design.color.primary,
      }}>
      <PMTextLabel
        title={props?.title}
        color="white"
        fontFamily="OnestMedium"
      />
    </SquircleView>
  </ScalePress>
);

const IconicButton = (props: ButtonProps) => (
  <ScalePress onPress={props?.onPress}>
    <SquircleView
      style={styles.button}
      squircleParams={{
        cornerSmoothing: 0.9,
        cornerRadius: 20,
        fillColor: Design.color.primary,
      }}>
      <View
        style={styles.IconicButtonContainer}>
        <View style={{width: '20%'}}>{props?.leftIcon && props?.leftIcon}</View>
        <View style={{width: '60%'}}>
          <PMTextLabel
            title={props?.title}
            color="white"
            fontFamily="OnestMedium"
          />
        </View>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {props?.rightIcon && props?.rightIcon}
        </View>
      </View>
    </SquircleView>
  </ScalePress>
);

const SecondaryButton = (props: ButtonProps) => (
  <ScalePress onPress={props?.onPress}>
    <SquircleView
      style={styles.button}
      squircleParams={{
        cornerSmoothing: 0.9,
        cornerRadius: 20,
        fillColor: 'transparent',
        strokeColor: Design.color.lightGray,
        strokeWidth: 1,
      }}>
      <PMTextLabel title={props?.title} color={'lightGray'} />
    </SquircleView>
  </ScalePress>
);



export const PMButton = (props: ButtonProps) => {
  const RenderElement = () => {
    switch (props?.buttonType) {
      case 'primary':
        return <PrimaryButton {...props} />;
        break;
      case 'secondary':
        return <SecondaryButton {...props} />;
        break;
      case 'disable':
        return <DisableButton {...props} />;
        break;
      case 'withIcon':
        return <IconicButton {...props} />;
        break;
     
      default:
        return <DisableButton {...props} />;
    }
  };
  return <RenderElement />;
};

const styles = StyleSheet.create({
  button: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    padding: Design.space.regular,
    height: 58,
  },
  IconicButtonContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
