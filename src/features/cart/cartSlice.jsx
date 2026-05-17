import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartStore:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cartStore.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            state.cartStore=state.cartStore.filter((item)=>item.id!==action.payload)
        }
    }
}) 

export const {addToCart,removeFromCart}=cartSlice.actions
export default cartSlice.reducer