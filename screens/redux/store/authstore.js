import { configureStore, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "../reducerss/authreducers";

const authslice=createSlice({
    name:'auth',
    initialState:{
        user:null,
        isAuthenicated:false,
    },
    reducers:{
        loginUser:(state,action)=>{
            state.user=action.payload;
            state.isAuthenicated=true;
        },
        logoutUser:(state)=>{
            state.user=null,
            state.isAuthenicated=false;
        },

    },
});
const rootReducers={
    auth:authslice.reducer,
};
const store=configureStore({
    reducer:rootReducers,

})

export default store;
