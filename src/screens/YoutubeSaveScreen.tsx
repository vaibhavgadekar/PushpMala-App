import React, {useEffect, useState} from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import {Design} from '../namespaces/Design';
import PMHeader from '../components/atoms/PMHeader';
import SettingIcon from '../assets/icons/SettingIcon';
import ArrowLeft from '../assets/icons/ArrowLeft';

import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import YTPlayerView from '../components/organisms/YTPlayerView';
import YoutubeCard from '../components/molecules/YoutubeCard';
import {Post} from '../namespaces/Post';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {PMTextLabel} from '../components/atoms';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showToast } from '../utils/ToastUtil';
import DelatedSaveList from '../components/organisms/DelatedSaveList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../namespaces/RootStackParamList';
import { useTranslation } from 'react-i18next';

export type props = {
  postItem: Post;
  relatedVodeos: Post[];
};

const YoutubeSaveScreen = ({postItem, relatedVodeos}:props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const {t}=useTranslation()
  const isFocoused = useIsFocused();
  const [data, setData] = useState<Post[]>();
    const [videoId, setVideo] = useState<Post>(postItem);
  
  const route = useRoute();

  const goBack = () => navigation.goBack();

  const handleDelete = (id: string, title:string) => {
    const res = data?.filter((item) => item?._id !== id);
    AsyncStorage.setItem('bookmark', JSON.stringify(res)).then(() => {
      showToast(t('home:youtubeScreen:showToast:remove', {title}))
      getSavedItems();
    });
  };

  useEffect(() => {
    getSavedItems();
  }, [isFocoused]);

  const getSavedItems = async () => {
     AsyncStorage.getItem('bookmark').then((res: string | null) => {
      if (res) {
        setData(JSON.parse(res));
      }
    });
  };

  const handleNavigation = (postItem: Post, relatedVodeos?: Post[]) => {
    navigation.push('VideoPlayScreen', {
      postItem,
      relatedVodeos: relatedVodeos ? relatedVodeos : [],
    });
  };

 

  return (
    <View style={{flex: 1, backgroundColor: Design.color.white}}>
      <StatusBar translucent={false} />
      <PMHeader
        title={t("home:youtubeScreen:saveHeaderTitle")}
        leftIcon={{
          icon: <ArrowLeft />,
          onPress: goBack,
        }}
      />

      <FlatList
        data={data}
        ListEmptyComponent={() => <DelatedSaveList/>}
        renderItem={({item, index}) => {
          return (
            <Animated.View
              key={`${item?.youtubeUrl}+${index}`}
              entering={FadeIn.duration(1000).delay(index * 100)}>
              <YoutubeCard
                id={item?.youtubeUrl}
                key={index}
              
                author_name=""
                onPress={() =>handleNavigation(item, data) }
                title={item?.name}
                leftIcon={{
                  icon: <SettingIcon />,
                  onPress: ()=>handleDelete(item?._id, item?.name),
                }}
              />
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default YoutubeSaveScreen;
