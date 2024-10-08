import express, { Express } from "express";
import connectDB from "./config/db";
import { userRouter } from "./features/user/user.routes";

const app: Express = express();

connectDB();

app.use("/api", userRouter);

export default app;
