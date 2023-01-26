import { IToken } from "@models"
import { Schema, model} from "mongoose"

export const Token = model<IToken>('Token', new Schema<IToken>({
	userID: { type: String, required: true },
	value: { type: String, required: true },
	type: { type: String, required: true },
	expired: { type: String, required: true }
}))