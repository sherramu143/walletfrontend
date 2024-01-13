import {Text,View,TextInput,Button,text} from 'react-native';
import { useState,useEffect} from 'react';
/*import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material';

import { AppBar ,IconButton} from '@mui/material';
import Toolbar from '@mui/material';/*/
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from '@react-navigation/native';
import axios from 'axios';
import { Mode } from '@mui/icons-material';
import datatable1 from './popbox';
import openPopup from './popbox';




//const Homescreen = ({navigation}) => {
    //return (
  //    <Text>hello sher ramu </Text>);
  //};
  //export default Homescreen;

   const Signin=({navigation})=>{    
    const [email,setEmail]=useState('');

    const [password,setPassword]=useState('');
    const [Data,setData]=useState('');
    React.useEffect(()=>{
      axios.get("http://localhost:3000/users").then(res=>console.log(res.data))},[])
    //React.useEffect(()=>{
     //axios.post("http://localhost:8000/users").then(res=>console.log(res.data))},[])


const handlesignin=async () =>{ 
//ACESS THE DATA THROUGH THE POST.....


  // Replace 'your-api-endpoint' with the actual URL of your JSON server.
  const apiEndpoint = 'http://localhost:8000/users';

  try {
   
       
     
      
   const response =await axios.get(apiEndpoint, { email, password});


    //if (response.status === 200) {
      console.log('Login successful:', response.data);}
      
      //const getDataResponse = await axios.get('http://localhost:8000/users');
      //console.log('Fetched data:', response.data);
  //setData(Data);
     
    //} 
    catch (error) {
      console.error('Error during login:');
        }
  //};
  
  
      }
      // Add your logic for successful login here (e.g., navigate to another screen).
   /* } else {
      console.error('Login failed:', response.statusText);
      // Add your logic for failed login here (e.g., display an error message).
    }
  }*/ 
  //fetching whole data
  
  
  // Attempt to sign in using a GET request
  /*const signInResponse = await axios.get(`${apiEndpoint}?email=${email}&password=${password}`);

  
    console.log('Login successful:', signInResponse.data);
    console.log('Login successful:');
    

    // Add your logic for successful login here.

    // After successful sign-in, make a GET request to fetch additional data
    const getDataResponse = await axios.get('http://localhost:8000/users');
    //console.log('Fetched data:', getDataResponse.data);
   */
  
    
    
   





   //const signIn= ()=>{
      
      //console.log(email,password);
       
      
    
      //const loginhandler = ()=>{
     /* const dataToSend = { username: 'test1@email.com', password: '123456789' };

    fetch('http://127.0.0.1:3000/api/auth/login', {
    
    method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  mode: 'cors',
    
    body: JSON.stringify(dataToSend),
    
    })
    
    .then(response => response.json())
    
    .then(data => {
    
    // Handle the response data here
    
    console.log(data);
    
    })
    
    .catch(error => {
    
     //Handle errors
    
    console.error('Error:',error);
    
    });*/
   // useEffect(() => {
    // const fetchData = async () => {
       /* try {
          const dataToSend = { username: 'test1@email.com', password: '123456789' };
          const response = await axios.post("http://localhost:3000/api/auth/login",dataToSend);
          console.log('data is', response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          { username: 'test1@email.com', password: '123456789' }),
      });
    };
    
    fetch('http://localhost:3000/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  mode: 'cors',
})
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  });};
  
    
      */

/*try{
   fetch('http://localhost:3000/api/auth/login',{
  method:'post',
mode:'no-cors',
headers: {
  'Accept':'application/jsion',
'Content-type':'application/jsion'
},
body: JSON.stringify({username:'test1@email.com',password: '123456789'})
});}
catch(e){
  console.log(e);
}}*/




//console.log(email);
const [isPopupVisible, setPopupVisible] = useState(false);

 
    

      return (

        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            
            </Typography><View style={{marginRight:30}}>
            <Button title='Sign up' onPress={() => navigation.navigate('signup')}
            
            ></Button></View>
            <View style={{marginRight:30}}>
             <Button title='Settings' onPress={()=> navigation.navigate('Settings')}
            ></Button></View>
             <View style={{marginRight:30}}>
             <Button title='usersdetail' onPress={()=>navigation.navigate('users')}
            ></Button>
             <Button title='Popup' onPress=
             {()=>navigation.navigate('datatable')}
       ></Button ></View>
            </Toolbar>
            </AppBar>
            
        
       
     <View>
      
      

        <View style={{
  backgroundColor:'#E0FFFF',
  alignContent:'center',
  alignItems:'center',
  
  height:450,
  marginTop:150
  } }>
    <Text
    style={{marginTop:20,
    fontSize:25}}>Sign In</Text>
    
           <Text
  style={{//fontweight:20,
      marginTop:25,
      fontSize:20,
  marginRight:127
  }}>Enter email id</Text>
  <TextInput
  style={{backgroundColor:'white',
  fontSize:16,
  marginTop:5,
  
  borderRadius:5,
  borderWidth:0.5,
  height:40,
  borderRadius:10,
  width:260,
  
    }}
    value={email}
    //onChangeText={(text)=setemail(text)}
  
  placeholder='email id'
  onChange={(e) => {setEmail(e.target.value)}}
  id='email'></TextInput> 
  
        
        
           <Text
  style={{//fontweight:20,
      marginTop:25,
      fontSize:20,
  marginRight:100
  
  }}>Enter password</Text>
  <TextInput
  secureTextEntry
  style={{backgroundColor:'white',
  fontSize:16,
  marginTop:5,
  
  borderRadius:5,
  borderWidth:0.5,
  height:40,
  borderRadius:10,
  width:260,
  
  
  
  }}
  id='password'
  value={password}
  onChange={(e) => {setPassword(e.target.value)}}
  placeholder='enter password'></TextInput> 
        
        <Link to='/'
        style={{color:'red'
        ,marginTop:5}}>forgot password?</Link>
         
        <View
        style={{
        marginTop:20,
        width:100,
        height:70,
        
        }}>
        
        <Button title='Sign In' onPress={handlesignin}
       ></Button >
       <View style={{marginTop:10}}>
        
       
       
       </View>
        </View>
       </View>
       </View>
  
      </Box>

     );}
    export default Signin;
  