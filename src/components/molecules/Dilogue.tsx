import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  StatusBar,
} from 'react-native';
import {PMButton} from '../atoms';
import {Design} from '../../namespaces/Design';

export type DilogueProps = {
  title: string;
  rightIcon?: React.ReactElement;
  onPress: () => void;
};

const Dilogue = ({title, rightIcon, onPress}: DilogueProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <StatusBar backgroundColor={'transparent'} />
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={{flex: 1}}>
              <View style={styles.modalView}>
                <View
                  style={{
                    height: 3,
                    width: '15%',
                    backgroundColor: Design.color.gray,
                    marginTop: 20,
                  }}
                />

                <Pressable
                  style={{marginLeft: '80%'}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  {rightIcon && <View>{rightIcon}</View>}
                </Pressable>

                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    // width: '80%',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      // marginTop: 20,
                      textAlign: 'center',
                      width: '70%',
                      fontFamily: Design.fontFamily.OnestRegular,
                      fontSize: Design.fontSize.large,
                      // fontStyle:'italic'
                    }}>
                    {title}
                  </Text>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '90%',
                    marginBottom: 12,
                  }}>
                  <PMButton
                    title="Click Me"
                    buttonType="primary"
                    onPress={() => console.log('hello')}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: 16,
  },
  modalView: {
    backgroundColor: Design.color.baseLight,
    borderRadius: 16,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    // justifyContent: 'flex-end',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    // justifyContent: 'flex-end',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Dilogue;
