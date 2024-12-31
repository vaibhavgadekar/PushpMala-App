import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import ArrowLeft from '../assets/icons/ArrowLeft';
import PMHeader from '../components/atoms/PMHeader';
import YTPlayerView from '../components/organisms/YTPlayerView';
import {Design} from '../namespaces/Design';
import {useFetchDashbordQuery} from '../redux/Dashbord/api';
import YoutubeScreenLoader from '../components/molecules/YoutubeScreenLoader';

export default function VideoPlayScreen() {
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();
  const {postItem, relatedVodeos} = route?.params;

  const goBack = () => navigation.goBack();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} />
      <PMHeader
        title="सभी देवी-देवताओं के भजन"
        leftIcon={{
          icon: <ArrowLeft />,
          onPress: goBack,
        }}
      />
      {isLoading && <YoutubeScreenLoader />}

      {!isLoading && (
        <>
          <YTPlayerView postItem={postItem} relatedVodeos={relatedVodeos} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Design.color.white,
  },
});
