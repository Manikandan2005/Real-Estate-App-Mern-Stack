import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
const isLoggedin = async(req,res)=>{
    console.log(req.id);
    res.status(200).json({message:"You are authenticated"})   
}

const isAdmin = async(req,res)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"user not authenticated"})
    }

    jwt.verify(token,process.env.JWT_SECRETKEY,async(err,payload)=>{
        if(err){
            return res.status(403).json({message:"Not a valid token"})
        }
        if(!payload.isAdmin){
            return res.status(403).json({message:"Unauthorized access"})
        }
        else{
            return res.status(200).json({message:"Access success"})
        }
    })
}

export default {
    isLoggedin,
    isAdmin
}