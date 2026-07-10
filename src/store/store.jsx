import { configureStore } from "@reduxjs/toolkit";
import ProductThunk from '../features/products/ProjectThunk'
import CartStore from '../features/cart/cartSlice'
import SignUpUser from '../features/login/SignUp'
export const store=configureStore({
    reducer:{
        fetchProducts:ProductThunk,
        cartProducts:CartStore,
        signIn:SignUpUser,
        devTools:{trace:true}
    }
})