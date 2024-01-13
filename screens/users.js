
import { Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import openPopup from './popbox';

const users = () => {
  const [data, setData] = useState([]);
  const[model,setModel]=useState(false);



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
  

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
     
      {/* Add more Text components or other UI elements for additional details */}
    </View>
  );

  return (
    <View style={styles.container}>
        <View>
        <Button title='update user'
        onPress={openPopup }></Button>
           
           
           </View>
        
        
           
          
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Adjust the key as per your API response
      />
    </View>
    
   
  );
};

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
});

export default users;
