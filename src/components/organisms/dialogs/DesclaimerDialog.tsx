import React, {useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SupportedLanguages} from '../../../constants/Language';
import i18n from '../../../core/localization/i18n';
import {Design} from '../../../namespaces/Design';

import {PMButton, PMTextLabel} from '../../atoms';
import {useTranslation} from 'react-i18next';

const DesclaimerDialog = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {t} = useTranslation();

  const onSumbit = () => {
    setModalVisible(false);
  };

  return (
    <>
      <StatusBar backgroundColor={'transparent'} />

      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.PressableView}>
        <View style={styles.langSelected}>
          <Text style={styles.langSelectedText}>
            {
              SupportedLanguages?.filter(
                item => item?.value === i18n.language,
              )[0].label
            }
          </Text>
        </View>
      </Pressable>

      <View>
        <Modal
          animationType="fade"
          transparent={true}
          statusBarTranslucent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={{flex: 1}}>
              <View style={styles.modalView}>
                <View style={styles.modelViewHrLine} />

                <View style={styles.containerTextView}>
                  <View style={styles.imageView}>
                    <Image
                      source={require('../../../assets/images/om_logo.png')}
                      style={styles.image}
                    />
                  </View>
                  <PMTextLabel
                    style={styles.infoText}
                    title={t('common:agreeDialog:infotext')}></PMTextLabel>
                  <PMTextLabel
                    style={styles.noticeText}
                    title={t('common:agreeDialog:noticeText')}></PMTextLabel>
                </View>
                <View style={styles.viewPMButton}>
                  <PMButton
                    title={t('common:agreeDialog:buttonTitle')}
                    onPress={onSumbit}
                    buttonType="primary"
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
  },

  modalView: {
    backgroundColor: Design.color.white,
    borderTopLeftRadius: Design.space.regular,
    borderTopRightRadius: Design.space.regular,
    height: '60%',
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
  modelViewHrLine: {
    height: 3,
    width: '15%',
    backgroundColor: Design.color.gray,
    marginTop: Design.space.regular,
  },

  containerTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: Design.space.regular,
  },
  imageView: {
    height: 200,
    width: '90%',
    backgroundColor: Design.color.lightYellow,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {height: 150, width: 150},

  infoText: {
    color: Design.color.black,
    marginTop: Design.space.regular,
    textAlign: 'center',
    paddingHorizontal: Design.space.large,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Regular'],
    fontSize: Design.fontSize.regular,
  },
  noticeText: {
    color: 'gray',
    marginTop: Design.space.regular,
    textAlign: 'center',
    paddingHorizontal: Design.space.large,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Regular'],
    fontSize: Design.fontSize.xsmall,
  },
  viewPMButton: {
    position: 'absolute',
    bottom: 0,
  },
});

export default DesclaimerDialog;
