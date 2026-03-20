import { Request, Response } from "express";
import UserModel from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import bcrypt, { hashSync } from "bcrypt";
import jwt from "jsonwebtoken";
import ContentModel from "../models/content.model.js";
import { hashing } from "../utils/HashingLink.js";

import { Types } from "mongoose";
import LinkModel from "../models/link.model.js";

interface AuthRequest extends Request{
    userId?:Types.ObjectId;
    contentId?:Types.ObjectId;
};

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

export const AddContent=async(req:AuthRequest,res:Response)=>{
    const {type,link,title,tags}=req.body;
    const content=await ContentModel.create({
        link,
        title,
        type,
        tags,
        userId:req.userId,
    });
    return res.status(201).json(new ApiResponse("Content added successfully",201,content));
};

export const GetAllContent=async(req:AuthRequest,res:Response)=>{
    try {
        const userId=req.userId;
        const content=await ContentModel.findById(userId);
        return res.status(200).json(new ApiResponse("all Content fetched successfully",200,content));
    } catch (error) {
        throw new ApiError("Error occur during fetching content",400,"get All content end point",error);
    }
};

export const DeleteContent=async(req:AuthRequest,res:Response)=>{
    const contentId=req.params.contentId;
    if(!contentId){
        throw new ApiError("content id is not given",400,"deleteContent end point line number 81");
    }

    const Content=await ContentModel.findOneAndDelete({
        _id:contentId,
        userId:req.userId
    });

    if(!Content){
        throw new ApiError("content not found",403,"");
    }

    return res.status(200).json(new ApiResponse("content deleted successfully",200));
};

export const UserSignOut=async(req:AuthRequest,res:Response)=>{
    try {
        const userId=req.userId;
        res.clearCookie("token",Options);
        return res.status(200).json(new ApiResponse("user logout successfully",200));
    } catch (error) {
        throw new ApiError("error occurred at signout end point",400,"");
    }
};

export const IsShare=async(req:AuthRequest,res:Response)=>{
    const share=req.body.share;
    const userId=req.userId;;
    if(share){
        let hash=hashing(20);
        const existing=await LinkModel.findById(userId);
        if(existing){
            return res.status(200).json(new ApiResponse("link already present",200,existing.hash));
        }
        const newLink=await LinkModel.create({
            hash,
            userId
        });
        return res.status(200).json(new ApiResponse("shared link generated",200,newLink));
    }
    else{
        const existing=await LinkModel.findById(userId);
        if(existing){
            await LinkModel.deleteOne({userId});
            return res.status(200).json(new ApiResponse("shared attribute is false",200,existing));
        }
        return res.status(200).json(new ApiResponse("shared attribute is false",200));
    }
};

export const UserContentLink=async(req:AuthRequest,res:Response)=>{
    const hash=req.params.shareLink;
    const HashExist=await LinkModel.findOne({hash});
    if(!HashExist){
        throw new ApiError("link is invalid or sharing is disabled",404,"UserContentLink endpoint line no. 137");
    }
    const UserId=HashExist.userId;
    const content=await ContentModel.find({UserId});
    return res.status(200).json(new ApiResponse("content of the user",200,content));
};