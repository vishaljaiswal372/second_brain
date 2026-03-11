import { Request, Response } from "express";
import UserModel from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const Options={
    httpOnly:true,
    secure:true,
    expiresIn:new Date(Date.now()+7*24*60*60*1000) // 7 days
}

export const UserSignUp=async(req:Request,res:Response)=>{
    const {username,password}=req.body;
    if(!username || !password){
        throw new ApiError("Username and password are required",400,"UserSignUp end point line no. 9");
    }
    const user=await UserModel.findOne({username});
    if(user){
        throw new ApiError("Username already exists",400,"UserSignUp end point line no. 14");
    }
    const hashedPassword=await bcrypt.hash(password,10); // TODO: Hash the password before saving to database
    const newUser=await UserModel.create({
        username,
        password: hashedPassword
    });
    return res.status(201).json(new ApiResponse("User created successfully",201,newUser));
};

export const UserSignIn=async(req:Request,res:Response)=>{
    const {username,password}=req.body;
    if(!username || !password){
        throw new ApiError("Username and password are required",400,"UserSignIn end point line no. 28");
    }
    const user=await UserModel.findOne({username});
    if(!user){
        throw new ApiError("Invalid username or password",400,"UserSignIn end point line no. 33");
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        throw new ApiError("Invalid username or password",403,"UserSignIn end point line no. 38");
    }
    const token=await jwt.sign({userId:user._id},process.env.JWT_SECRET as string,{expiresIn:"7d"});
    return res.status(200).cookie("token",token,Options).json(new ApiResponse("User signed in successfully",200,{token}));
};