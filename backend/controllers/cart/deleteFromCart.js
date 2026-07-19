//import models
const Cart = require('../../models/Cart')
const Product = require('../../models/Product');
const User = require('../../models/User')

//delete from the cart

exports.deleteFromCart = async (req, res) => {
    try {
        //fetch the product id and user id to delete
        const { user, item } = req.body;
        //find the user cart
        const userCart = await Cart.findOne({ user, item });
        if (!userCart) {
            return res.status(404).json({
                success: false,
                message: "Item not found"
            })
        }

        if (userCart.quantity > 1) {
            userCart.quantity -= 1
            await userCart.save();
        }
        else{
            await userCart.deleteOne({_id:item})
            return res.status(202).json({
                success: true,
                message: "Item deleted from cart"
            })
        }
        return res.status(202).json({
                success: true,
                message: "Item quantity reduced",
                cart:userCart
            })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
                success: false,
                message: error.message
            })
    }
}