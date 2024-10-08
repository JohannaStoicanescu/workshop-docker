import { Collection } from "mongoose";

export class UserService {
  constructor() {}

  async getAll() {
    return [];
    // return Collection.find();
  }
  async create(user: any) {
    return user;
  }

  async connexion(user: any) {
    return user;
  }
}
