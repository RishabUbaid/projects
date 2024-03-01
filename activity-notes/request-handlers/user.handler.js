import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userModel from "../schema/user.schema.js";

const { sign, verify } = jwt;

export async function register(req, res) {
    try {
        let { username, email, tel, password } = req.body;
        let userExist = await userModel.findOne({ username });
        if(userExist) {
            return res.status(400).json({
                msg: "user already exists!"
            })
        }
        let hashedPassword = await bcrypt.hash(password, 10);
        await userModel.create({
            username,
            email,
            tel,
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

export async function login(req, res){
    try{
        let { username, password} = req.body;
        let user = await userModel.findOne({ username} );
        if(!user) {
            return res.status(400).json({
                msg: "invalid username or password!"
            })
        }
        let verify = await bcrypt.compare(password, user.password);
        console.log(verify);
        if(verify) {
            let token = await sign({
                username: user.username,
                userId: user._id 
            },process.env.SECRET_KEY,{
                    expiresIn:"24h"

                });
                return res.status(200).json({
                    msg:"Login Successful!",
                    token
                })
            }
            return res.status(400).json({
                msg:"Invalid username or password!"
            })
        } catch (error) {
                console.log(error);
                return res.status(500).json({
                    msg: "Error occured"
                })
            }
        }
        export async function getData(req, res) {
            try {
                return res.status(200).json({
                    msg:"unauthorized access!"
                })
                
            } catch (error) {
                console.log(error);
                return res.status(200).json({
                    msg:"unauthorized access!"
                })
                
            }
        }

        export async function getProfile(req, res) {
            try {
                let user = req.user;
                let profile =await userModel.findOne({_id: user.userId },{ password:0});
                return res.status(200).json({
                    msg:"profiledata!",
                    profile
                })
            } catch (error) {
                console.log(error);
                return res.status(500).json({
                    msg:"Error occured!"
                })
            }
        }
       