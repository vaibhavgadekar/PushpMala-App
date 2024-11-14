import type {FC} from 'react';
import React, {useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import NativeAdView, {
  AdBadge,
  CallToActionView,
  HeadlineView,
  IconView,
  TaglineView,
} from 'react-native-admob-native-ads';

export type ExploreNativeAdType = {
  large?: boolean;
};

export const ExploreNativeAd: FC<ExploreNativeAdType> = ({large = false}) => {
  const nativeAdViewRef = useRef();

  React.useEffect(() => {
    nativeAdViewRef.current?.loadAd();
  }, []);

  const containerStyle = StyleSheet.flatten([
    styles.nativeAdView,
    large && styles.nativeAdViewForLarge,
  ]);
  const iconViewStyle = StyleSheet.flatten([
    styles.iconView,
    large && styles.IconViewLarge,
  ]);
  const callToActionStyle = StyleSheet.flatten([
    styles.callToAction,
    large && styles.callToActionLarge,
  ]);
  const headlineStyle = StyleSheet.flatten([
    styles.headline,
    large && styles.headlineLarge,
  ]);

  return (
    <View style={styles.container}>
      <NativeAdView
        ref={nativeAdViewRef}
        repository="imageAd"
        style={containerStyle}>
        <View style={styles.adContentContainer}>
          <AdBadge style={styles.adBadge} textStyle={styles.adBadgeText} />
          <IconView style={iconViewStyle} />
          <View style={styles.textContainer}>
            <HeadlineView style={headlineStyle} />
            <TaglineView style={styles.tagline} numberOfLines={1} />
            <View style={{marginTop: 10}}>
              <CallToActionView
                style={callToActionStyle}
                textStyle={styles.callToActionText}
              />
            </View>
          </View>
        </View>
      </NativeAdView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nativeAdView: {
    height: 150,
    width: 300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nativeAdViewForLarge: {
    backgroundColor: '#202123',
    height: 260,
    width: Dimensions.get('window').width * 0.78,
  },
  adContentContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#EDEDED',
    borderWidth: 1,
    borderRadius: 10,
  },
  adBadge: {
    width: 15,
    marginLeft: 10,
    marginTop: 10,
    height: 15,
    backgroundColor: 'gray',
  },
  adBadgeText: {
    fontSize: 8,
    color: 'black',
    fontFamily: 'CircularStdB',
  },
  iconView: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  IconViewLarge: {
    width: '60%',
    height: '60%',
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 6,
  },
  headline: {
    fontSize: 10,
    marginTop: 4,
    color: 'black',
    fontFamily: 'CircularStdB',
  },
  headlineLarge: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'CircularStdB',
  },
  tagline: {
    color: 'black',
    fontSize: 11,
    fontFamily: 'CircularStdR',
  },
  advertiser: {
    fontSize: 10,
    color: 'gray',
  },
  callToAction: {
    height: 25,
    width: 100,
    paddingHorizontal: 12,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 10,
  },
  callToActionLarge: {
    height: 35,
    width: Dimensions.get('window').width * 0.65,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 10,
  },
  callToActionText: {
    color: 'black',
    fontFamily: 'CircularStdB',
    fontSize: 14,
  },
});
