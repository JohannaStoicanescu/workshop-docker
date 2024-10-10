import { UserService } from "../user.service";
import { UserController } from "../user.controller";
import User from "../user.model";
import mongoose from "mongoose";
import connectDB from "../../../config/db";
import Timer from "../../timer/timer.model";

beforeEach(async () => {
  connectDB();
  await User.deleteMany();
  await User.create({ email: "test", password: "test", role: false });
});

afterEach(async () => {
  await User.deleteMany();
  mongoose.disconnect();
});
describe("UserController", () => {
  const userService = new UserService();
  const userController = new UserController(userService);

  describe("create", () => {
    it("should create a new user", async () => {
      const req = { body: { email: "test2", password: "test", role: false } };
      const res = { json: jest.fn() };
      const next = jest.fn();

      await userController.create(req as any, res as any, next as any);

      expect(res.json).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith({ email: "test2" });
    });
  });

  describe("connexion", () => {
    it("should connect a user", async () => {
      const req = { body: { email: "test", password: "test" } };
      const res = { json: jest.fn() };
      const next = jest.fn();

      await userController.connection(req as any, res as any, next as any);

      expect(res.json).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith({ email: "test" });
    });
  });
});
