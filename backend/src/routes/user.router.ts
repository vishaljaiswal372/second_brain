import { Router } from "express";
import { UserSignUp } from "../controllers/user.controller.js"; 
const UserRouter=Router();

UserRouter.post('/signup',UserSignUp);


export default UserRouter;