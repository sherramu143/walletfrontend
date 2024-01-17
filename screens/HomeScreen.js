import { Text, View, TextInput, Button, text } from "react-native";
import { useState, useEffect } from "react";
/*import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material';

import { AppBar ,IconButton} from '@mui/material';
import Toolbar from '@mui/material';/*/
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

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [Data, setData] = useState("");
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => console.log(res.data));
  }, []);

  const handlesignin = async () => {
    const apiEndpoint = "http://localhost:8000/users";

    try {
      const response = await axios.get(apiEndpoint, { email, password });

      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error during login:");
    }
  };

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        <Text>Copyright © </Text>
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

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
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Text style={{ marginTop: 20, fontSize: 25, fontWeight: 650 }}>
            Sign In
          </Text>

          <Text
            style={{
              //fontweight:20,
              marginTop: 25,
              fontSize: 20,
              marginRight: 127,
              fontWeight: 350,
            }}
          >
            enter email id
          </Text>
          <TextInput
            style={{
              backgroundColor: "white",
              fontSize: 16,
              marginTop: 5,
              borderRadius: 8,

              borderWidth: 0.5,
              height: 40,
              width: 260,
            }}
            value={email}
            //onChangeText={(text)=setemail(text)}

            placeholder="email id"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            label="password"
            autoFocus
            required
          ></TextInput>

          <Text
            style={{
              //fontweight:20,
              marginTop: 25,
              fontSize: 20,
              marginRight: 100,
              fontWeight: 350,
            }}
          >
            enter password
          </Text>
          <TextInput
            secureTextEntry
            label="password"
            autoFocus
            style={{
              backgroundColor: "white",
              fontSize: 16,
              marginTop: 5,
              fontWeight: 250,
              borderRadius: 8,
              borderWidth: 0.5,
              height: 40,
              width: 260,
            }}
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          ></TextInput>

          <Link to="/" style={{ color: "red", marginTop: 5 }}>
            forgot password?
          </Link>

          <View
            style={{
              marginTop: 20,
              width: 100,
              height: 70,
            }}
          >
            <Button title="Sign In" onPress={handlesignin}></Button>
            <View style={{ marginTop: 10 }}></View>
          </View>
        </View>
        <View>
          <Copyright sx={{ mt: 5 }} />
        </View>
      </View>
    </Box>
  );
};
export default Signin;
