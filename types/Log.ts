import { Document } from "mongoose";

interface LogType extends Document {
  name: string;
  description: string;
  status: string;
  date: Date;
  time: string;
}

export default LogType;
