const User = require('../models/User');
const bcrypt = require('bcrypt')
require('dotenv').config();
const jwt=require('jsonwebtoken')

exports.signUp = async (req, res) => {
    try {
        //take the info from the body
        const { name, email, password,role } = req.body;
        //check if all details are filled
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Fill all fields Correctly"
            })
        }
        //check if the user is present in the database already
        const user = await User.findOne({ email });
        if (user) {
            return res.status(403).json({
                success: false,
                message: "User already exists"
            })
        }
        //hash the password 
        let hashedPassword;    
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            })
        }
        //create a new user and store in DB
        const newUser = await User.create({
            name, email, password: hashedPassword,role
        })
        return res.status(201).json({
            success:true,
            message:"User created Successfully"
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Error Occured"
        })
    }
}

//login 
exports.login=async (req,res)=>{
    try {
        //take the input from the body
        const {email,password}=req.body;
        if ( !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Fill all fields Correctly"
            })
        }
        //check if the user is present in email
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User does not exist, Sign up"
            })
        }

        //check if password is correct or not
        const payload={
            email:user.email,
            id:user._id,
            role:user.role
        };
        if(await bcrypt.compare(password,user.password)){
            let token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});
            user=user.toObject();
            user.token=token
            user.password=undefined

            //sent it in cokiee
            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true
            }
            return res.cookie("user",token,options).json({
                success:true,
                token,
                user,
                message:"Logged in successfully"
            })
        }
        else{
            return res.status(403).json({
                success: false,
                message: "Password is Incorrect"
            })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}