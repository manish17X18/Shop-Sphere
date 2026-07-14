import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const shopSphereProducts=createAsyncThunk('products/fetchProducts',async()=>{
    const response=await axios.get(`https://dummyjson.com/products?limit=250`)
    return response.data.products;
})

const ProductsSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        loading:false,
        errors:null
    },
    reducers:{
        add:(state,action)=>{
            state.allProducts.push(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(shopSphereProducts.pending,(state)=>{
            state.loading=true
        })
        .addCase(shopSphereProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.loading=false
        })
        .addCase(shopSphereProducts.rejected,(state,action)=>{
            state.errors=action.error.message
            state.loading=false
        })
    }
})

export const {add} =ProductsSlice.actions;
export default ProductsSlice.reducer