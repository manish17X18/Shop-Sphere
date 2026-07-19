//import models
const Cart = require('../../models/Cart')
const Product = require('../../models/Product');
const User = require('../../models/User')

exports.fetchCart=async (req,res)=>{
    try {
        //take the user id and search in cart
        const {user}=req.body;
        const userCart=await Cart.find({user:user}).populate('item');
        if(!userCart){
            return res.status(404).json({
                success:false,
                message:"User Cart not found"
            })
        }
        //display all items
        return res.status(200).json({
            success:true,
            message:"User cart found",
            cart:userCart
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}