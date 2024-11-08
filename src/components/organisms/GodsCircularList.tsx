import React from 'react';
import {Alert, ImageSourcePropType, StyleSheet, View} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import CircularView from '../atoms/CircularView';
import ScalePress from '../atoms/ScalePress';
import {cdnUrl} from '../../utils/constant';
import {Design} from '../../namespaces/Design';

export type GodsCircularListProps = {
  data: {
    _id: string;
    backgroundColor: string;
    imagePath: ImageSourcePropType;
    hindiName: string;
  }[];
};

export default function GodsCircularList({data}: GodsCircularListProps) {
  return (
    <View style={styles.container}>
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item?.hindiName + index}
        renderItem={({item, index}) => {
          return (
            <ScalePress
              onPress={() => Alert.alert(item?.hindiName)}
              key={index}>
              <Animated.View entering={FadeIn.duration(400).delay(index * 100)}>
                <CircularView
                  key={item?._id}
                  title={item?.hindiName}
                  bgColor={item?.backgroundColor}
                  imgPath={{
                    uri: cdnUrl + item?.imagePath,
                  }}
                />
              </Animated.View>
            </ScalePress>
          );
        }}
        data={data}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: Design.space.regular,
  },
});
