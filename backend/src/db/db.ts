import mongoose from "mongoose";
import ApiError from "../utils/ApiError.js";

const connectDB = async () => {
    try {
        if(!process.env.MONGO_URL){
            throw new ApiError("MONGO_URL is not defined in environment variables", 500, "connectDB");
        }
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");    
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
        throw new ApiError("Failed to connect to MongoDB", 500, "connectDB", err);
    }
};

export default connectDB;   