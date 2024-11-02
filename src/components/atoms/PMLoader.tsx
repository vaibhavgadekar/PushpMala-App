import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import Animated, { FadeOut } from 'react-native-reanimated';
import { Design } from '../../namespaces/Design';

const PMLoader = () => {
  return (
    <Animated.View style={styles.container} exiting={FadeOut.duration(400)}>
      <ActivityIndicator size="large" color={Design.color.black} />
    </Animated.View>
  );
};

export default PMLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Design.color.white,
  },
});
