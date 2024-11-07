import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {SquircleView} from 'react-native-figma-squircle';
import {Design} from '../../namespaces/Design';
import {PMTextLabel} from './PMTextLabel';
import ScalePress from './ScalePress';

export type PMButtonType = 'primary' | 'disable' | 'secondary' | 'withIcon';

interface ButtonProps {
  buttonType?: PMButtonType;
  title: string;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  fontFamily?: keyof typeof Design.fontFamily;
  onPress: () => void;
}

export const PMButton = (props: ButtonProps) => {
  const {buttonType = 'disable', title, rightIcon, leftIcon, onPress} = props;

  // Define styles for different button types
  const buttonStyles = StyleSheet.flatten([
    styles.button,
    buttonType === 'primary' && {
      borderColor: 'transparent',
    },
    buttonType === 'secondary' && {
      backgroundColor: 'transparent',
      borderColor: Design.color.lightGray,
      borderWidth: 1,
    },
    buttonType === 'disable' && {
      backgroundColor: Design.color.gray,
      borderColor: 'transparent',
    },
  ]);

  return (
    <ScalePress onPress={onPress}>
      <SquircleView
        style={buttonStyles}
        squircleParams={{
          cornerSmoothing: 0.6,
          cornerRadius: 20,
          fillColor: Design.color.primary,
          strokeWidth: buttonType === 'secondary' ? 1 : 0,
        }}>
        <View style={styles.content}>
          <View style={styles.icon}>{leftIcon}</View>
          <PMTextLabel
            title={title}
            color={buttonType === 'secondary' ? 'lightGray' : 'white'}
            fontFamily={props?.fontFamily ?? 'KohinoorDevanagari-Regular'}
            style={styles.text}
          />
          <View style={styles.icon}>{rightIcon}</View>
        </View>
      </SquircleView>
    </ScalePress>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: Dimensions.get('window').width * 0.9,
    maxWidth: Dimensions.get('window').width * 0.9,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  icon: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
