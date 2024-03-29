import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "./screens/HomeScreen";
import SignUp from "./screens/signup";
import Setting from "./screens/setting";
import users from "./screens/users";
import table from "./screens/datatable";
import PopupButtonExample from "./screens/pop";
import text from './screens/text';
import { Provider } from 'react-redux';
import store from "./screens/redux/store/authstore";
import {TokenDisplayScreen} from "./screens/HomeScreen"



const Stack = createNativeStackNavigator();
export default function App() {
  return (<Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Home">
        <Stack.Screen
          name="Home"
          component={Signin}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="users" component={users} />
        <Stack.Screen name="Settings" component={Setting} />
        <Stack.Screen name="signup" component={SignUp} />
        
        <Stack.Screen name="popup" component={PopupButtonExample} />
       
       
      
    
        
      </Stack.Navigator>
    </NavigationContainer></Provider>
  );
}
