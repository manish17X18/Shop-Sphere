import { createSlice } from "@reduxjs/toolkit";

export const SignUpSlice=createSlice({
    name:'signup',
    initialState:{
        loginData:{
            firstName:"",
            lastName:"",
            PhNo:0,
            email:"",
            password:"",
            confirmPassword:"",
            address:"",
            state:"",
            city:"",
            pinCode:0,
            isLoggedin:false,
        }
    },
    currentUser:null,
    loading:false,
    error:null,
    reducers:{
        addUser:(state,action)=>{
            state.loginData={
                ...action.payload,
                //updated the flag here only as taking to other files makes it mess
                isLoggedin:true
            }
        },
        signOut:(state,action)=>{
            state.loginData.isLoggedin=false
        }
    }
})

export const {addUser,signOut}=SignUpSlice.actions;
export default SignUpSlice.reducer;