import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import axios from 'axios';
const  datatable1= ({ visible, onClose, onConfirm }) => {
    const [updatedName, setUpdatedName] = useState('');
    const [updatedEmail, setUpdatedEmail] = useState('');
    const [updatedPassword, setUpdatedPassword] = useState('');
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [userData, setUserData] = useState({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        // Add more user data fields as needed
      });

    const update = async () => {

        try {
          // Make an API request to update user data
          const response = await axios.patch('http://localhost:3000/users/1',{
            name: updatedName,
            email: updatedEmail,
            password: updatedPassword,
            
          });
          const onConfirm=()=>({
            name: updatedName,
            email: updatedEmail,
            password: updatedPassword,
          });
          // Handle the response or update the state as needed
         // onConfirm(updatedData);
         // onClose(); // Close the modal
        } catch (error) {
          console.error('Error updating user data:', error);
          // Handle error if needed
        }
         
      };
    

    const openPopup = () => {
        setPopupVisible(true);
      };
    
      const closePopup = () => {
        setPopupVisible(false);
      };
    
      const handleConfirm = (updatedData) => {
        // Handle confirmation logic here
        setUserData({
            ...userData,
            name: updatedData.name,
            email: updatedData.email,
            password: updatedData.password,
        
        
      });}




            return (<View><View>
                <Button title="Open Popup" onPress={openPopup}></Button></View>
              <Modal  transparent animationType="slide"
              visible={isPopupVisible}
        onClose={closePopup}
        onConfirm={handleConfirm}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text>update the user information:</Text>
                    <TextInput placeholder='enter your name'
                     onChangeText={(text) => setUpdatedName(text)}/>
                    <TextInput placeholder='enter your email id' 
                    onChangeText={(text) => setUpdatedEmail(text)}/>
                    <TextInput placeholder='password'
                                onChangeText={(text) => setUpdatedPassword(text)}
                                secureTextEntry
                    /><View>
                    <Button title="Close"  style={styles.modal}/></View>
                    <View><Button title="Confirm" onPress={update} /></View>
                  </View>
                </View>
              </Modal>
              </View>
            );
          };

          const styles = StyleSheet.create({
            modalContainer: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            },
            modalContent: {
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              elevation: 5,
            },
            modal:{
                width:50,
                alignItems:'flex-start'

            },
        })

export default datatable1;