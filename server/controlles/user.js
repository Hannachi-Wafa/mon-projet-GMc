const User=require('../models/userSchema')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const { body, validationResult } = require('express-validator');

require('dotenv').config()

exports.register=async(req,res)=>{
try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
 const {fullname,password,email}=req.body;
 const existUser= await User.findOne({email:email}) ; 
 if(existUser) return res.status(400).json({error:'you already have an account'})
 const cryptPassword= await bcrypt.hash(password,12)
 const newUser= new User({fullname,password:cryptPassword,email})
 const user= await newUser.save();
 const token = await jwt.sign({email,id:user._id},process.env.sercetkey)
 return res.status(200).json({user:user,token})
} catch (error) {
    res.status(500).json({error:`something went wrong:${error}`}) 
}
}
exports.login=async(req,res)=>{
    try {
    const {email,password}=req.body;
    const existUser= await User.findOne({email:email}) ;
    if(!existUser) return res.status(400).json({error:'this email does not exist'})
    const validatePassword= await bcrypt.compare(password,existUser.password) 
    if(!validatePassword) return res.status(400).json({error:'wrong password !'})
    const token = await jwt.sign({email,id:existUser._id},process.env.sercetkey)
    return res.status(200).json({user:existUser,token})

    
    } catch (error) {
        res.status(500).json({error:`something went wrong:${error}`}) 

    }
}
exports.getUser=async (req, res) =>{
    try {
        const users= await User.find()
        res.status(200).json(users)
        } catch (error) {
        res.status(500).json({error:`something went wrong:${error}`}) 
    }
}
exports.updateuser = async (req, res) => {
    try {

        const {fullname,password,email}=req.body;

        await User.findByIdAndUpdate({_id: req.params.id}, {...req.body})

        res.json({ error: "Updated a user" })
        
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}