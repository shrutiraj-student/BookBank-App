const User = require("../model/userModal")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
//require('dotenv').config()

const registerUser = async(req, res)=> {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        return res.status(400).json({success: false, message:"All fields required!"})
    }else{
        try {
            const user = await User.findOne({email: email})
            if(user){
                return res.status(400).json({success: false, message:"Email already exists!"})
            }else{
                const newUser = await User.insertOne({
                    name: name,
                    email:email,
                    password:password
                })
                newUser.save()
                return res.status(200).json({success: true, message:"Registration successfull!"})
            }
        } catch (error) {
            return res.status(500).json({success: false, message:error.message})
        }
    }
}
const loginUser = async(req, res)=> {
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({success: false, message:"All fields required!"})
    }else{
        try {
            const user = await User.findOne({email: email})
            if(!user){
                return res.status(400).json({success: false, message:"User Does'nt exist"})
            }else{
                const isPasswordMatch = await bcrypt.compare(password, user.password)
                if(!isPasswordMatch){
                    return res.status(400).json({success: false, message:"Invalid Password"})
                }
                //  lets create token
                let payload ={
                    _id: user._id,
                    email: user.email
                }
                let token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn : '24h'})
                return res.status(200).json({success: true, message:"Login Succesfull", token: token})
            }
        } catch (error) {
            return res.status(500).json({success: false, message:error.message})
        }
    }
    
}


const profile = (req, res)=> {
    console.log("Prifile data");
    
}

module.exports = {
    registerUser,
    loginUser,
    profile
}