import express, { Express } from "express";
import connectDB from "./config/db";
import { userRouter } from "./features/user/user.routes";
import { timerRouter } from "./features/timer/timer.routes";

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api", userRouter, timerRouter);

export default app;
