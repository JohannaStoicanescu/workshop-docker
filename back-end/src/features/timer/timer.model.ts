import { ObjectId } from "mongoose";

export interface Timer {
  user_id: ObjectId;
  time: number;
}
