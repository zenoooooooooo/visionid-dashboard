import { Document } from "mongoose";

interface UserType extends Document {
  name: string;
  email: string;
  password: string;
}

export default UserType;
