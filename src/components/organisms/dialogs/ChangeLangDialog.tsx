import React, {useState} from 'react';
import {
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
import NavigationCard from '../../molecules/NavigationCard';
import {useTranslation} from 'react-i18next';

const ChangeLangDialog = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {t} = useTranslation();

  const onSumbit = (lang: string) => {
    i18n.changeLanguage(lang);
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

                <View style={styles.TitleView}>
                  <Text style={styles.title}>
                    {t('common:changeLang:title')}
                  </Text>
                  <Text style={styles.infoText}>
                    {t('common:changeLang:infoText')}
                  </Text>
                </View>

                {SupportedLanguages.map((item, index) => {
                  return (
                    <NavigationCard
                      title={item.label}
                      onPress={() => onSumbit(item?.value)}
                      alpabetTitle={item?.shortCode}
                      isSelected={item?.value === i18n.language}
                    />
                  );
                })}
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
    marginRight: 16,
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
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: '45%',
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
    marginTop: 16,
  },

  TitleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  title: {
    color: Design.color.lightGray,
    marginTop: 20,
    textAlign: 'center',
    width: '70%',
    fontFamily: Design.fontFamily['KohinoorDevanagari-Bold'],
    fontSize: Design.fontSize.large,
  },
  infoText: {
    color: Design.color.lightGray,
    marginTop: 16,
    textAlign: 'center',
    paddingHorizontal: 24,
    fontFamily: Design.fontFamily['KohinoorDevanagari-Regular'],
    fontSize: Design.fontSize.small,
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
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ChangeLangDialog;
