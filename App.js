import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import signin from './screens/HomeScreen';
import signup from './screens/signup';

function HomeScreen() {
  return (
    <View style={styles.container}>
    
  
      <StatusBar style="auto" />
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={signin} 
         />
         <Stack.Screen name="signin" component={signin} 
         />

        
         <Stack.Screen name="signup" component={signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    

  },


  
})