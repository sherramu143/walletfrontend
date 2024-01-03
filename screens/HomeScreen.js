import {Text,View,TextInput,Button} from 'react-native';
import { Link } from '@react-navigation/native';
//const Homescreen = ({navigation}) => {
    //return (
  //    <Text>hello sher ramu </Text>);
  //};
  //export default Homescreen;

  const signin= ({navigation})=>{

      return (
       
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
  
  placeholder='email id'></TextInput> 
  
        
        
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
  placeholder='enter password'></TextInput> 
        
        <Text>forgot password?</Text>
        
         
         
        <View
        style={{
        marginTop:20,
        width:100,
        height:70,
        
        }}>
        
        <Button title='Sign In'
       ></Button>
       <View style={{marginTop:10}}>
        <Button
  
  title="Sign up" onPress={() => navigation.navigate('signup')}/>
       
       </View>
        </View>
       </View>
  
      
     );}
    export default signin;
  