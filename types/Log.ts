import { Document } from "mongoose"

interface Log extends Document {
    name: string;
    description: string;
    status: string;
    date: Date;
    time: string;
}