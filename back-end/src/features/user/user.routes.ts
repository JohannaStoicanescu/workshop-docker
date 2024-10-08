import express from "express";
import { UserController } from "./user.controller";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.get("/users", userController.getAll);

userRouter.post("/register", userController.create);
userRouter.post("/login", userController.connexion);
