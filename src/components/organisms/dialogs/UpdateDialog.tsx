import React, {useEffect, useState} from 'react';
import {
  Linking,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import {Design} from '../../../namespaces/Design';

import {Trans, useTranslation} from 'react-i18next';
import {PMButton, PMTextLabel} from '../../atoms';
import DeviceInfo from 'react-native-device-info';
import ScalePress from '../../atoms/ScalePress';
import {StoreURL} from '../../../utils/constant';

export type Props = {
  updateConfig: {
    liveVersion: number;
    isRequired: boolean;
    showUpdate: boolean;
  };
};
const UpdateDialog = ({updateConfig}: Props) => {
  const {isRequired, showUpdate, liveVersion} = updateConfig;
  const [modalVisible, setModalVisible] = useState(false);
  const {t} = useTranslation();

  useEffect(() => {
    try {
      let buildNumber = DeviceInfo.getBuildNumber();
      if (liveVersion > Number(buildNumber) && showUpdate) {
        setModalVisible(true);
      }
    } catch (error) {
      console.log({error});
    }
  }, []);

  const handleClose = () => {
    if (!isRequired) {
      setModalVisible(false);
    }
  };

  const handleOnContinue = () => {
    Linking.openURL(
      Platform.OS === 'android' ? StoreURL.playStoreUrl : StoreURL.appStoreUrl,
    );
  };

  return (
    <>
      <StatusBar backgroundColor={'transparent'} />
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          statusBarTranslucent
          visible={modalVisible}
          onRequestClose={handleClose}>
          <View style={styles.centeredView}>
            <View style={{flex: 1}}>
              <View style={styles.modalView}>
                <ScalePress onPress={handleClose} style={styles.crossbutton}>
                  <PMTextLabel
                    title="X"
                    style={styles.pmxcrossbutton}></PMTextLabel>
                </ScalePress>
                <View style={styles.modelViewHrLine} />

                <View style={styles.containerTextView}>
                  <Text style={styles.title}>
                    {t('home:updateDialog:title')}
                  </Text>
                  <View style={styles.viewHeight}>
                    <Trans
                      components={{
                        text: <Text style={styles.infoText} />,
                        bold: (
                          <Text
                            style={[
                              styles.infoText,
                              {
                                fontFamily:
                                  Design.fontFamily[
                                    'KohinoorDevanagari-Medium'
                                  ],
                                color: Design.color.primary,
                              },
                            ]}
                          />
                        ),
                      }}>
                      {t('home:updateDialog:discription')}
                    </Trans>
                  </View>
                </View>
                <View style={styles.infoTextView}>
                  <Text style={styles.infoText}>
                    {t('home:updateDialog:info')}
                  </Text>
                  <PMButton
                    title={t('home:updateDialog:update')}
                    onPress={handleOnContinue}
                    buttonType="primary"
                    fontFamily="KohinoorDevanagari-Regular"
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  PressableView: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: StatusBar.currentHeight,
  },
  langSelected: {
    height: 30,
    width: 80,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: Design.space.regular,
    borderColor: Design.color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  langSelectedText: {
    color: Design.color.white,
    padding: 2,
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: Design.space.regular,
  },

  modalView: {
    backgroundColor: Design.color.white,
    borderRadius: Design.space.regular,
    height: '50%',
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
  },
  crossbutton: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: Design.color.primary,
    position: 'absolute',
    marginTop: -40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pmxcrossbutton: {
    color: Design.color.white,
    fontSize: 14,
    textAlign: 'center',
  },
  modelViewHrLine: {
    height: 3,
    width: '15%',
    backgroundColor: Design.color.gray,
    marginTop: Design.space.regular,
  },

  containerTextView: {
    alignItems: 'center',
    height: '60%',
    // backgroundColor:'red',
  },
  title: {
    color: Design.color.lightGray,
    marginTop: 20,
    textAlign: 'center',
    width: '70%',
    fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
    fontSize: 20,
  },
  viewHeight: {
    height: '60%',
    justifyContent: 'center',
  },
  infoText: {
    color: Design.color.lightGray,
    marginTop: Design.space.regular,
    textAlign: 'center',
    paddingHorizontal: Design.space.large,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Regular'],
    fontSize: 14,
  },
  infoTextView: {
    height: '40%',
    backgroundColor: Design.color.update,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    gap: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: Design.color.white,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: Design.space.regular,
    textAlign: 'center',
  },
});

export default UpdateDialog;
