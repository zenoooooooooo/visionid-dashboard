import { Schema, models, model } from "mongoose";
import UserType from "@/types/User";
const UserSchema = new Schema<UserType>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = models.User || model<UserType>("User", UserSchema);
export default User;
