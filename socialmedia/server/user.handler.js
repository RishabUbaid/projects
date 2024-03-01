import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken"
import userModel from "./schema/user.schema.js";

const {sign}=jwt;

export async function register(req, res) {
    try {
        let { username, email,password} = req.body;
        let userExist = await userModel.findOne({username});
        if(userExist){
            return res.status(400).json({
                msg:"user already exists"
            })
        }
        let hashedPassword = await bcrypt.hash(password, 10);
        await userModel.create({
            username,
            email,
            password: hashedPassword
        })
        return res.status(201).json({
            msg: "Registration successful!..."
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error occured"
        })
    }
}





export async function login(req, res) {
    try {
        let { username, password } = req.body;
        let user = await userModel.findOne({username});
        if(!user){
            return res.status(400).json({
                msg:"invalid username or password "
            })
        }
        let verify=await bcrypt.compare(password, user.password);
        console.log(verify);
        if(verify){
            let token=await sign({
                username:user.username,
                userId: user._id
            },process.env.SECRET_KEY,{
                expiresIn:"24h"
            });
            return res.status(200).json({
                msg :"login successful",
                token
            })
        
        }
        return res.status(400).json({
            msg:"invalid username or password "
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: "Error occured"
        })
    }
}