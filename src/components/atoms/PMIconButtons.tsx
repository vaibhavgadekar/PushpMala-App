import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Design} from '../../namespaces/Design';



export type PMIconButtonsProps= {
  title: string,
  icon: React.ReactElement
  onPress?: () => void;
}

const PMIconButtons =({title,icon, onPress}: PMIconButtonsProps) => {
  
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        {icon}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Design.color.baseLight,
    paddingHorizontal: 10,
    paddingVertical:4,
    borderRadius: 50,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:4
  },
  text: {
    color: Design.color.black,
    fontSize: Design.space.regular,
    fontFamily: 'KohinoorDevanagari-Regular',
  },
});

export default PMIconButtons;
