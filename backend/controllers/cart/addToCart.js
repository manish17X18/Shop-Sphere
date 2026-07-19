//import models
const Cart = require('../../models/Cart')
const Product = require('../../models/Product');
const User = require('../../models/User')
exports.addToCart = async (req, res) => {
    try {
        //take userId and ProductID
        const { user, item } = req.body
        const product = await Product.findById(item)
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Item Not in List"
            })
        }

        //find users cart
        let userCart = await Cart.findOne({ user, item })
        let cartObject;
        if (!userCart) {
            //create a new cart object
            cartObject = await Cart.create({
                user,
                item,
                quantity: 1
            })

        }
        else {
            userCart.quantity += 1;
            cartObject = await userCart.save()
        }


        return res.status(201).json({
            success: true,
            message: "Item added to cart Successfully",
            cart: cartObject
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
