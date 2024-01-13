import React, {useState} from 'react';
import {TextInput,Text, SafeAreaView,View,Button} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Typography } from '@mui/material';
import { green,Checkbox, } from '@mui/material/colors';
//import { TouchableOpacity,Image } from 'react-native';


//class create extends React.Component{
 
const signup = (navigation) => {
    
    return (
    //    render(){ return(

<View
style={{alignItems:'center',
margin:30,
 backgroundColor:'#E0FFFF',
 marginTop:130}}>
<Text

style={{marginTop:30,
fontSize:19,
alignItems:'center',


}}>Sign up</Text><View>
<Text
style={{//fontweight:20,
    marginTop:40,
    fontSize:15,
marginRight:200
}}>Email id:</Text>
<TextInput
style={{backgroundColor:'white',
fontSize:15,
marginTop:5,
borderBlockColor:'black',
borderRadius:5,
borderWidth:0.5,
height:40,
borderRadius:10,




}}
placeholder='Enter Email address'></TextInput></View>

 
 <Text style={{fontSize:15,marginTop:25,marginRight:110}}>Enter the Password</Text>

<TextInput 
placeholder='Enter your password'
secureTextEntry
style={{backgroundColor:'white',
fontSize:15,
marginTop:10,

borderWidth:0.5,
height:40,
borderRadius:10,
width:260,


}}

TextInput/>
    
    <Text style={{fontSize:15,marginTop:25,marginRight:100}}> Re Enter the Password</Text>

<TextInput 
placeholder='Retype your password'
secureTextEntry
style={{backgroundColor:'white',
fontSize:15,
marginTop:10,

borderWidth:0.5,
height:40,
borderRadius:10,
width:260,


}}

TextInput/><View>
<Text
style={{color:'red',
marginLeft:80}}>Already have an account?</Text></View>

<View style={{marginTop:30,width:200}}>
<Button title='sign up'>


</Button>

</View><View
style={{

paddingTop:15
    
}}>

</View>
<View
style={{flexDirection:'row',
justifyContent:'center'}}>
    <TouchableOpacity
    onPress={console.log("pressed")}
    style={{flexDirection:'row',
    justifyContent:'center',
    flex:1}}>
        

    </TouchableOpacity>
    </View></View>





);}
export default signup;