import {View, Text, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import NativeAdView, {
  AdBadge,
  CallToActionView,
  HeadlineView,
  IconView,
  ImageView,
  TaglineView,
} from 'react-native-admob-native-ads';
import {Design} from '../../namespaces/Design';

export default function AdView() {
  const nativeAdViewRef = useRef();

  React.useEffect(() => {
    nativeAdViewRef.current?.loadAd();
  }, []);
  return (
    <View style={{flex: 1}}>
      <NativeAdView
        ref={nativeAdViewRef}
        repository="imageAd"
        style={styles.nativeAdView}>
        <View style={styles.adContainer}>
          <AdBadge style={styles.adBadge} textStyle={styles.adBadgeText} />
          <IconView style={styles.iconView} />
          {/* <ImageView
            style={{
              width: 120,
              height: 120,
              resizeMode: 'contain',
            }}
          /> */}
          <HeadlineView style={styles.headline} />

          {/* <TaglineView style={styles.tagline} numberOfLines={1} /> */}
          <View style={{marginTop: 10}}>
            <CallToActionView
              style={styles.callToAction}
              textStyle={styles.callToActionText}
              allCaps={false}
            />
          </View>
        </View>
      </NativeAdView>
    </View>
  );
}

const styles = StyleSheet.create({
  nativeAdView: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
  },
  adContainer: {
    height: 150,
    width: 150,
    // justifyContent: 'space-between',
    // // alignItems: 'center',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EDEDED',
    borderWidth: 1,
    borderRadius: 10,
  },
  iconView: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  adBadge: {
    marginTop: 3,
    marginLeft: 3,
    width: 20,
    height: 15,
    backgroundColor: 'white',
  },
  adBadgeText: {
    fontSize: 8,
    color: 'gray',
    fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
  },
  headline: {
    fontSize: 10,
    marginTop: 4,
    color: 'black',
    fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
  },
  tagline: {
    color: 'black',
    fontSize: 8,
    fontFamily: 'CircularStdR',
  },
  callToAction: {
    height: 25,
    width: 100,
    paddingHorizontal: 12,
    backgroundColor: '#E4E4E4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  callToActionText: {
    color: 'black',
    fontFamily: Design.fontFamily['KohinoorDevanagari-Medium'],
    fontSize: 12,
  },
});
