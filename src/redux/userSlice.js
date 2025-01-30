import { createSlice } from '@reduxjs/toolkit';
const token = localStorage.getItem('token')
import {jwtDecode} from 'jwt-decode'
let USER=null
try {
    if (token) {
        const decodedToken = jwtDecode(token)
        // console.log(decodedToken);
        USER=decodedToken
    }
} catch (error) {

}

const initial_State = {
    user:USER || {}
}
const  userSlice=createSlice({
    name:"user",
    initialState:initial_State,
    reducers:{
        setUserData:(state,action)=>{
            state.user=action.payload;
        },
        clearUserData:(state)=>{
            state.user={};
            localStorage.removeItem('token')
        }
    }
})
export const {setUserData,clearUserData}=userSlice.actions;
export default userSlice.reducer;
