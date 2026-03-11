import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import UserRouter from './routes/user.router.js';

const app=express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
dotenv.config();

app.use('/api/v1/user',UserRouter);

export default app;
