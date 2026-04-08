import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import ApiError from '../utils/ApiError.js';
import UserModel from '../models/user.model.js';
import { Types } from 'mongoose';
import { JwtPayload } from 'jsonwebtoken';

interface AuthRequest extends Request{
    userId?: Types.ObjectId;
}

export const authMiddleware=async(req:AuthRequest,res:Response,next:NextFunction)=>{
    const token=req.cookies.token || req.headers.authorization?.split(" ")[1];
    if(!token){
        throw new ApiError("Unauthorized: No token provided",401,"authMiddleware line no. 9 ");
    }
    try {
        if(!process.env.JWT_SECRET){
            throw new ApiError("JWT_SECRET is not defined in environment variables",500,"authMiddleware line no. 14");  
        }
        const decode=await jwt.verify(token,process.env.JWT_SECRET);
        if(!decode || typeof decode === "string" || !decode.userId){
            throw new ApiError("Unauthorized: Invalid token",401,"authMiddleware line no. 19"); 
        }
        const user=await UserModel.findById(decode.userId);
        if(!user){
            throw new ApiError("Unauthorized: User not found",401,"authMiddleware line no. 20");    
        }
        req.userId=decode.userId;
        next();
    } catch (error) {
        throw new ApiError("Unauthorized: Invalid token",401,"authMiddleware line no. 25");
    }
};
