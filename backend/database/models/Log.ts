import { Schema, models, model} from "mongoose"
import LogType from "@/types/Log"

const LogSchema = new Schema<LogType>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
})

const Log = models.Log || model<LogType>("Log", LogSchema)
export default Log
