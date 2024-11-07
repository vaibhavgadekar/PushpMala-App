import React, {Component} from 'react';
import {FlatList, Image, Pressable, ScrollView, Text, View} from 'react-native';
import {useFetchDashbordQuery} from '../redux/Dashbord/api';
import PMHeader from '../components/molecules/PMHeader';

export const HomeScreen = () => {
  const {data} = useFetchDashbordQuery({});
  const {gods} = data ?? {};

  return (
    <>
    <ScrollView >
      {gods &&
        gods.map((item: any) => (
          <View style={{}}>
            <Image key={item.id} source={{uri: 'https://d1nd5gftn0d0pp.cloudfront.net/'+item.imagePath}} style={{height:100, width:100, borderRadius:100}}/>
            <Text  style={{color: 'black', fontSize: 24}}>
              {item?.name}
            </Text>
            <Text style={{color: 'black', fontSize: 24}}>{item?.name}</Text>
          </View>
        ))}
    </ScrollView>
    </>
  );
};
