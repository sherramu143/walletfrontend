import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Typography from '@mui/material/Typography';
//import { Button } from 'react-native';
import Signin from './screens/HomeScreen';
import SignUp from './screens/signup';
import Setting from './screens/setting';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import PersistentDrawerLeft from './drwaer';
import { SafeAreaView } from 'react-native-safe-area-context';
import users from './screens/users';
import datatable1 from './screens/popbox';



 /*function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}




/*function HomeScreen() {
  return (
    <View style={styles.container}>
    
  
      <StatusBar style="auto" />
    </View>
  );
}*/
const Stack = createNativeStackNavigator();
export default function App() {

  return (  <NavigationContainer>
  
      <Stack.Navigator initialRouteName='Home'>

      <Stack.Screen name="Home" component={Signin} 
       options={{ headerShown:false }}
         />

         <Stack.Screen name="signin" component={Signin} 
         />
          <Stack.Screen name="Settings" component={Setting} 
         />
           <Stack.Screen name="signup" component={SignUp} 
         />
           <Stack.Screen name="users" component={users} 
         />
           <Stack.Screen name="datatable" component={datatable1} 
         />
         
        
</Stack.Navigator>
 
    
    </NavigationContainer>
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    

  },

*/

  
);}