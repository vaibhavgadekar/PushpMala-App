// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
import React, {useEffect, useState} from 'react';

import {ScrollView, View} from 'react-native';

import {PMButton, PMInput} from './src/components/atoms';

import {Design} from './src/namespaces/Design';
import PMHeader from './src/components/molecules/PMHeader';
import ArrowRight from './src/assets/icons/ArrowRight';
import ArrowLeft from './src/assets/icons/ArrowLeft';
import InfoIcon from './src/assets/icons/InfoIcon';
import Search from './src/assets/icons/Search';
import Animated, {
  BounceInLeft,
  FadeIn,
  FadeInLeft,
  SlideInDown,
} from 'react-native-reanimated';
import EyeIcon from './src/assets/icons/EyeIcon';
import HideIcon from './src/assets/icons/HideIcon';
import Dilogue from './src/components/molecules/Dilogue';
import CancelIcon from './src/assets/icons/CancelIcon';
import PMLoader from './src/components/atoms/PMLoader';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading]=useState(true)

  useEffect(()=>{
    const timer=setTimeout(()=>{
setLoading(false)
    },3000)

    
  },[])

 
  return (
    <View style={{flex: 1, backgroundColor: Design.color.baseLight}}>
      <PMHeader
        title="NORTH EAST SF BANK"
        leftIcon={<ArrowLeft />}
        onPress={() => console.log('hello')}
        rightIcon={<ArrowRight />}
      />
    {loading? <PMLoader/>:  <ScrollView>
        <View
          style={{
            height: 900,
            width: '100%',
            backgroundColor: Design.color.lightGray,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              paddingHorizontal: 16,
              gap: 16,
            }}>
            <PMButton
              buttonType="primary"
              title="Akash Gadekar"
              rightIcon={<InfoIcon color="white" />}
              leftIcon={<ArrowLeft color="white" />}
              onPress={() => console.log('hello')}
            />

            <PMButton
              buttonType="secondary"
              title="Vaibhav Gadekar"
              onPress={() => console.log('hello')}
            />

            <PMButton
              buttonType="disable"
              title="asd"
              onPress={() => console.log('hello')}
            />
            <PMButton
              buttonType="withIcon"
              title="asd"
              rightIcon={<InfoIcon color="white" />}
              onPress={() => console.log('hello')}
            />

            <PMInput
              placeholder="Enter number"
              // keyboardType={showPassword?'default':'visible-password'}
              secureTextEntry={showPassword ? true : false}
              onPress={() => console.log()}
              leftIcon={{
                icon: showPassword ? <EyeIcon color="black" /> : <HideIcon />,
                onIconPress: () => setShowPassword(prev => !prev),
              }}
            />

            <Dilogue
              title={`lets secure your\nbooking experience`}
              onPress={() => console.log()}
              rightIcon={<CancelIcon />}
            />
          </View>
        </View>
        <View
          style={{
            height: 900,
            width: '100%',
            backgroundColor: Design.color.primary,
          }}></View>
      </ScrollView>}
    </View>
  );
};

export default App;
