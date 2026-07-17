const mongoose=require('mongoose');

const CartSchema=new mongoose.Schema({
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        default:1,
        min:1
    }
})

module.exports=mongoose.model("Cart",CartSchema)