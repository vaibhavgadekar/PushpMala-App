import React from 'react';
import { StatusBar, StyleSheet, View} from 'react-native';

import {Design} from '../../namespaces/Design';
import {PMTextLabel} from '../atoms';
import ScalePress from '../atoms/ScalePress';

export type HeaderProps = {
  title: string;
  rightIcon?: React.ReactElement;
  leftIcon?: React.ReactElement;
  onPress: () => void;
};

const PMHeader = ({title, rightIcon, leftIcon, onPress}: HeaderProps) => {
  return (
    <>
      <StatusBar backgroundColor={'white'} />
      <View style={styles.container}>
        <View style={styles.mainView}>
          <ScalePress style={styles.iconContainer} onPress={onPress}>
            <>{leftIcon && <View style={styles.iconView}>{leftIcon}</View>}</>
          </ScalePress>
          <View style={styles.textView}>
            <PMTextLabel
              title={title}
              color="black"
              type="regular"
              fontFamily="OnestMedium"
            />
          </View>
          <ScalePress style={styles.iconContainer} onPress={onPress}>
            <>{rightIcon && <View style={styles.iconView}>{rightIcon}</View>}</>
          </ScalePress>
        </View>
      </View>
    </>
  );
};

export default PMHeader;

const styles = StyleSheet.create({
  container: {
    height: 110,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 20,
    borderBottomWidth: 2,
    borderBottomColor: Design.color.baseLight,
  },
  mainView: {
    flex: 1,
    flexDirection: 'row',
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
