import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {Design} from '../../namespaces/Design';
import {PMTextLabel} from '../atoms';
import ScalePress from '../atoms/ScalePress';

export type HeaderProps = {
  title: string;
  rightIcon?: {
    icon: React.ReactElement;
    onPress: () => void;
  };
  leftIcon?: {
    icon: React.ReactElement;
    onPress: () => void;
  };
};

const PMHeader = ({title, rightIcon, leftIcon}: HeaderProps) => {
  const emptyFunction = () => {
    //TODO
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.mainView}>
          <ScalePress
            style={styles.iconContainer}
            onPress={leftIcon?.onPress ?? emptyFunction}>
            <>
              {leftIcon && (
                <View style={styles.iconView}>{leftIcon?.icon}</View>
              )}
            </>
          </ScalePress>
          <View style={styles.textView}>
            <PMTextLabel
              title={title}
              color="black"
              style={{textAlign: 'center'}}
              type="regular"
              fontFamily="KohinoorDevanagari-Regular"
            />
          </View>
          <ScalePress
            style={styles.iconContainer}
            onPress={rightIcon?.onPress ?? emptyFunction}>
            <>
              {rightIcon && (
                <View style={styles.iconView}>{rightIcon?.icon}</View>
              )}
            </>
          </ScalePress>
        </View>
      </View>
    </>
  );
};

export default PMHeader;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: Design.color.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Design.color.baseLight,
    marginTop: StatusBar.currentHeight,
  },
  mainView: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: Design.space.regular,
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    height: 38,
    width: 38,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Design.color.gray,
    backgroundColor: Design.color.baseLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    width: '70%',
    justifyContent: 'center',
  },
});
