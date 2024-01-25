import { Text, View, TextInput, Button, text } from "react-native";
import { useState, useEffect } from "react";
import { login } from "./redux/actions/authActions";
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { TextField } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@react-navigation/native";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const[user,setUser]=React.useState(null);
  const [password, setPassword] = useState("");
  const [Data, setData] = useState("");
  const [dataToSend, setDataToSend] = useState({
    email: '',
    password: '',
  });
  React.useEffect(()=>{
    checkForUser();
  },[]);
  
  const dispatch=useDispatch();
  const checkForUser=async ()=>{
    const storedUser=await
    AsyncStorage.getItem('user');
    if(storedUser) {
      navigation.navigate('');
    }}

  
  const handlesignin=async (event)=>{
    event.preventDefault();
   // const data=new FormData(event.currentTarget);
   setDataToSend({
    email,
    password,
  });

    console.log("credentials are:",dataToSend);
    try{
      const response=await axios
      .post('http://localhost:3000/api/auth/login',dataToSend);
    
    const token=response.data;
console.log('TOKEN',token);
await AsyncStorage.setItem('user',JSON.stringify({
  email:dataToSend.email,
  token:token,

}));
dispatch(login(dataToSend.email));
setUser({email:dataToSend.email,
token:token,});return(
<View>
<Text>{`Token Display Screen`}</Text>
{token && <Text>{`Token: ${token}`}</Text>}
</View>)

//navigation.navigate('tokendisplay');

  }
  catch(error){
    console.error("error signing in",error.message);
    Alert.alert('sigin in failed invalide username and password');
  };
  }

  
  //React.useEffect(() => {
    //axios
      //.get("http://localhost:3000/users")
      //.then((res) => console.log(res.data));
  //}, []);

  /*const handlesignin = async () => {
    const apiEndpoint = "http://localhost:3000/users";

    try {
      const response = await axios.get(apiEndpoint, { email, password });


     // console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error during login:");
    }
  };
*/
  
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
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <View style={{ marginRight: 30 }}>
            <Button
              title="Sign up"
              onPress={() => navigation.navigate("signup")}
            ></Button>
          </View>
          <View style={{ marginRight: 30 }}>
            <Button
              title="Settings"
              onPress={() => navigation.navigate("Settings")}
            ></Button>
          </View>
          <View style={{ marginRight: 30 }}>
            <Button
              title="usersdetail"
              onPress={() => navigation.navigate("users")}
            ></Button>
          </View>
          <View style={{ marginRight: 30 }}>
            <Button
              title="edit"
              onPress={() => navigation.navigate("")}
            ></Button>
          </View>
          <View style={{ marginRight: 30 }}>
            <Button
              title="table"
              onPress={() => navigation.navigate("tabledata")}
            ></Button>
          </View>
        </Toolbar>
      </AppBar>

      <View>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",

            height: 450,
            marginTop: 120,
          }}
        ><Text style={{ marginTop: 20, fontSize: 25, fontWeight: 650 }}>
        Sign In
      </Text>
         <View component="form"  noValidate sx={{ mt: 1 }}>
            <TextInput
            style={{width:100,backgroundColor: "white",
            fontSize: 16,marginTop: 20,
           
            

            borderWidth: 0.5,
            height: 40,
            width: 260,}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);}}
            />
            <TextInput
            style={{width:100,backgroundColor: "white",
            fontSize: 16,
           
           

            borderWidth: 0.5,
            height: 40,
            width: 260,
          marginTop:10}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);}}
            />
           <View style={{width:260,marginTop:20}}>
            <Button
            
              type="submit"
              title="submit"
              variant="contained"
             
              onPress={handlesignin}
            />
      </View>

        </View>
       
      </View></View>
      </Box>
    
  );
};


export default Signin;
