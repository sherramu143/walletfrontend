const initialState={
    isAuthenicated:false,
    username:null,
};
const authReducers=(state=initialState,action)=>{
    switch(action.type){
        
        case "SIGNUP":
            case "LOGIN":
            return{
                ...state,
                isAuthenicated:true,
                username: action.payload.username,
            };
        case "LOGOUT":
            return{
                ...state,
                isAuthenicated: false,
                username:null,
            };
        default:
            return state;
        }
}
export default authReducers;