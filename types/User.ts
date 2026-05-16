import { Document } from "mongoose";

interface User extends Document {
  name: string;
  type: string;
  email: string;
  password: string;
}

export default User;
