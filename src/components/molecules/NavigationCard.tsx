import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Design} from '../../namespaces/Design';

export type NavigationCardProps = {
  title?: string;
  rightIcon?: React.ReactElement;
  onPress: () => void;
  isSelected?: boolean;
  alpabetTitle: string;
};

const NavigationCard = ({
  title,
  rightIcon,
  onPress,
  alpabetTitle,
  isSelected = false,
}: NavigationCardProps) => {
  const backgroundColor = isSelected ? '#E7FBE6' : 'transparent';
  const highLightColor = isSelected ? '#2E7D32' : Design.color.lightGray;
  return (
    <>
      <Pressable
        onPress={onPress}
        style={[
          styles.container,
          {backgroundColor: backgroundColor, borderWidth: isSelected ? 1 : 0.7, borderColor:highLightColor},

        ]}>
        <Text style={[styles.textView, {color: highLightColor, fontFamily: isSelected? Design.fontFamily['KohinoorDevanagari-Bold']: Design.fontFamily['KohinoorDevanagari-Regular']}]}>{title}</Text>
        <Text style={styles.alpabetTitleView}>{alpabetTitle}</Text>
      </Pressable>
    </>
  );
};

export default NavigationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    width: '90%',
    borderRadius: 8,
    marginVertical: 8,
    justifyContent: 'space-between',
  },

  textView: {
    fontFamily: Design.fontFamily['KohinoorDevanagari-Regular'],
    fontSize: Design.space.regular,
    marginLeft: Design.space.regular,
  },
  alpabetTitleView: {
    color: Design.color.lightGray,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
    fontSize: Design.space.regular,
    marginRight: Design.space.regular,
  },
});
