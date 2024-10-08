import { Request, Response, NextFunction } from "express";
import { UserService } from "./user.service";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    console.log("toto");
    try {
      res.json(await this.userService.getAll());
      console.log("test");
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error while getting all users`, error.message);
        next(error);
      }
      console.error(`Error while getting all users`, error);
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await this.userService.create(req.body));
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error while creating the user`, error.message);
        next(error);
      }
      console.error(`Error while creating the user`, error);
      next(error);
    }
  }

  async connexion(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await this.userService.connexion(req.body));
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error while connecting`, error.message);
        next(error);
      }
      console.error(`Error while connecting`, error);
      next(error);
    }
  }
}
