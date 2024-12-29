import React from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Design} from '../../namespaces/Design';
import {cdnUrl} from '../../utils/constant';
import {PMTextLabel} from '../atoms';
import ScalePress from '../atoms/ScalePress';
import {GodsListProps} from './types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../namespaces/RootStackParamList';
import { God } from '../../namespaces/God';

export default function GodsList({data, title}: GodsListProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    

  const handelNavigation = (godItem: God) => {
    navigation.navigate('GodDetailsScreen', {godItem});
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.separatorLine} />
        <PMTextLabel title={title} style={styles.titleText} />
        <View style={styles.separatorLine} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          numColumns={Math.ceil(data?.length / 2)}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data ?? []}
          directionalLockEnabled={true}
          alwaysBounceVertical={true}
          renderItem={({item, index}) => {            
            return (
              <ScalePress
                key={index}
                style={styles.wrapper}
                onPress={()=>handelNavigation(item)}>
                <ImageBackground
                  source={{uri: cdnUrl + item?.imagePath}}
                  style={styles.image}>
                  <PMTextLabel
                    title={item?.hindiName}
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
                      color: '#756D6D',
                      marginTop: 4,
                    }}
                  />
                </ImageBackground>
              </ScalePress>
            );
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    gap: Design.space.small,
    alignItems: 'center',
    alignSelf: 'center',
  },
  separatorLine: {
    height: 2,
    width: 60,
    backgroundColor: Design.color.baseLight,
  },
  titleText: {
    color: Design.color.lightGray,
    fontSize: 20,
    marginVertical: Design.space.regular,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
  },
  flatListContainer: {
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
  wrapper: {
    borderRadius: 10,
    marginVertical: 5,
    marginRight: 7,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 150,
    width: 150,
  },
});
