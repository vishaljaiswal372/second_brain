import { Router } from "express";
import { AddContent, DeleteContent, GetAllContent, UserSignIn, UserSignOut, UserSignUp, IsShare, UserContentLink } from "../controllers/user.controller.js"; 
import {authMiddleware} from "../middlewares/auth.middleware.js";
const UserRouter=Router();

UserRouter.post('/signup',UserSignUp);
UserRouter.post('/sign-in',UserSignIn);
UserRouter.post('/sign-out',authMiddleware,UserSignOut);
UserRouter.post('/add-content',authMiddleware,AddContent);
UserRouter.get('/get-all-content',authMiddleware,GetAllContent);
UserRouter.delete('/delete-content/:contentId',authMiddleware,DeleteContent);
UserRouter.post('/brain/share',authMiddleware,IsShare);
UserRouter.get('/brain/:shareLink',UserContentLink);



export default UserRouter;