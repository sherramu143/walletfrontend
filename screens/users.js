
import { Button } from 'react-native';
import {Provider,Portal,Modal, TextInput} from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import openPopup from './popbox';
import {  TouchableOpacity } from 'react-native-web';
import datatable1 from './popbox';
import axios from 'axios';
import PopupButtonExample from './pop'
import { Password } from '@mui/icons-material';
//const editpopup=({id,onclose})=>{
  

const users = () => {
  const [data, setData] = useState([]);
  const[model,setModel]=useState(false);
  const [visible, setVisible] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
const [updatedPassword, setUpdatedPassword] = useState('');
const[f,setF]=useState('');
const [forceRerender, setForceRerender] = useState(false);






  const showModal = (item) => {
    setVisible(true);
    setUpdatedName(item);//intilay setting the name
    setUpdatedPassword(item);
    setF(item);
    


  };
  const hideModal = () => setVisible(false);
  const update = async (g=(f.id)) => {
    try {
       const response = await axios.patch(`http://localhost:3000/users/${g}`,{
      name: updatedName,
      password: updatedPassword,
      
    });

  }
  catch (error) {
    console.error('Error updating user data:', error);}
   
  
  
  }


  useEffect(() => {
    // Fetch data from your API endpoint
    fetchData();
    

  }, []);

  const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3000/users');
      const result = await response.json();
      setData(result); // Assuming your API returns an array of data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
const Delete=async (k=(item.id))=>{
    const response = await axios.delete(`http://localhost:3000/users/${k}`);
    console.log('User deleted successfully:', response.data);
    if (response.ok) {
        // If the deletion is successful, fetch the updated data
        fetchData();
      } else {
        console.error(`Failed to delete item with ID`);
      }

    


    }
    
      const kk=()=>{}


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
     
      {/* Add more Text components or other UI elements for additional details */}
    <View     style={styles.b1} >
    <Button
   
              type="edit"
              fullWidth
               title='edit'
               onPress={()=>showModal(item)}
              
              ></Button>
         </View><View style={styles.b1}>


        <Button title='delete' 
        onPress={()=>Delete(item.id)}></Button>
    </View>
    </View>
  );

  return (
    <View style={styles.container}>

           
        
        
           
          
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Adjust the key as per your API response
      />
      <Provider>
      <View style={{ flex: 1, marginTop:5}}>
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ padding: 20,
            width:400,height:220,alignItems:'center',backgroundColor:'white',marginBottom:750,marginLeft:250}}>
              <Text style={{fontSize:25}}>Edit details</Text><View>
              <TextInput placeholder='Name'
              onChangeText={(text) => setUpdatedName(text)}
              value={ updatedName.name}
             /></View>
             <View style={{marginTop:10,}}> <TextInput placeholder='Password'
              onChangeText={(text) => setUpdatedPassword(text)}
              value={updatedPassword.password}
              secureTextEntry
            /></View><View style={{flexDirection:'row'}}>
              <View style={{marginTop:10,flexDirection:'row'}}>
              <Button title='Update' onPress={()=>update(f.id)}/></View>
              <View style={{marginTop:10,marginLeft:10}}>  <Button title='Close' onPress={hideModal}>Close</Button></View>
              </View>
              {/* Add your edit form or custom content here */}
             
            </Modal>
          </Portal></View>
          </Provider>
    </View>
    
   
  );
;}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  b1:{width:70,
    
    padding:2,
    
    alignItems:'stretch'
   
  }
});

export default users;
