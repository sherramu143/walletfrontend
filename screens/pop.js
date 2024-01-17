import React, { useState } from 'react';
import{View,TextInput} from 'react-native';
import { Text, Button, Modal, Portal, Provider } from 'react-native-paper'


const PopupButtonExample = (navigation) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Provider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={showModal}>Open Popup</Button>

        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ padding: 20 }}>
            <Text>This is a Simple Popup!</Text>
            <View >
                  <View >
                    <Text>update the user information:</Text>
                    <TextInput placeholder='enter your name'
                     onChangeText={(text) => setUpdatedName(text)}/>
                    <TextInput placeholder='enter your email id' 
                    onChangeText={(text) => setUpdatedEmail(text)}/>
                    <TextInput placeholder='password'
                                onChangeText={(text) => setUpdatedPassword(text)}
                                secureTextEntry
                    /><View>
                    <Button title="Close"  /></View>
                    <View><Button title="Confirm" /></View>
                  </View>
                </View>
            <Button onPress={hideModal}>Close</Button>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
};

export default PopupButtonExample;