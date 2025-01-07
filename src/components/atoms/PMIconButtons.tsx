import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import EyeIcon from '../../assets/icons/EyeIcon';
import {Design} from '../../namespaces/Design';



export type PMIconButtonsProps= {
  title: string,
  onPress?: () => void;
}

const PMIconButtons =({title, onPress}: PMIconButtonsProps) => {
  
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        <EyeIcon style={styles.icon} height={16} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Design.color.baseLight,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 2,
  },
  text: {
    color: 'black',
    fontSize: Design.space.regular,
    fontFamily: 'KohinoorDevanagari-Regular',
  },
});

export default PMIconButtons;
