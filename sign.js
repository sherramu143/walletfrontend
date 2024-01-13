import react, { useState } from 'react';
import React from 'react';
import { View,TextInput,Button} from 'react-native';
import { StyleSheet } from 'react-native';


const Sign = () => {
    
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
         <TextInput
          style={{height:40}}
          placeholder="Type here to translate!"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
      </View>
    );
  };
  
  export default Sign;
   