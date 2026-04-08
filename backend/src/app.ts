import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import UserRouter from './routes/user.router.js';

const app=express();

// Frontend uses `withCredentials: true` for signin/add-content (cookies),
// so we must allow credentials in CORS responses.
app.use(cors({ origin: true, credentials: true }));


app.use(express.json());
app.use(cookieParser());
dotenv.config();

app.use('/api/v1/user',UserRouter);

export default app;

