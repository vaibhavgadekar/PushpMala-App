import React from 'react';
import {StyleProp, TouchableOpacity} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  StyleProps,
} from 'react-native-reanimated';

export type ScalePressProps = {
  onPress: () => void;
  children: React.ReactElement;
  style?: StyleProps;
};

export default function ScalePress({
  onPress,
  children,
  style,
}: ScalePressProps) {
  const scaleValue = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleValue.value}],
    };
  });

  const onPressIn = () => {
    scaleValue.value = withSpring(0.94, {
      damping: 255, // Slows down the animation
      stiffness: 6550, // Adjusts the bounciness
      mass: 0.5, // Controls the heaviness of the animation
    });
  };

  const onPressOut = () => {
    scaleValue.value = withSpring(1, {
      damping: 15,
      stiffness: 150,
      mass: 0.5,
    });
  };

  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      activeOpacity={1}
      style={style}>
      <Animated.View style={[animatedStyle, {width: '100%'}]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
}
