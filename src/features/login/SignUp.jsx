import { createSlice } from "@reduxjs/toolkit";

export const SignUpSlice=createSlice({
    name:'signup',
    initialState:{
        loginData:{
            firstName:"",
            lastName:"",
            PhNo:0,
            password:"",
            confirmPassword:"",
            address:"",
            state:"",
            city:"",
            pinCode:0,
        }
    },
    currentUser:null,
    loading:false,
    error:null,
    reducers:{
        addUser:(state,action)=>{
            state.loginData=action.payload
        }
    }
})

export const {addUser}=SignUpSlice.actions;
export default SignUpSlice.reducer;