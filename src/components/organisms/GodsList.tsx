import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import React from 'react';
import {PMTextLabel} from '../atoms';
import {Design} from '../../namespaces/Design';
import ScalePress from '../atoms/ScalePress';
import {GodsListProps} from './types';
import {cdnUrl} from '../../utils/constant';

export default function GodsList({data, title}: GodsListProps) {
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
                style={styles.wrapper}
                onPress={() => Alert.alert(JSON.stringify(item))}>
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
