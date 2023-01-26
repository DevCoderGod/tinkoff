import { IUser } from "@models"
import { Schema, model} from "mongoose"
import { Token } from "./Tokens.js"

export const User = model<IUser>('User', new Schema<IUser>({
	name: { type: String, required: true },
	pass: { type: String, required: true },
	email: { type: String, required: true },
	role: { type: String, required: true, default: "guest" },
	isActiv: { type: Boolean, default: false },
	activExp: { type: Date, default: null },
	jwtTokens: [{ type: Schema.Types.ObjectId, ref: Token }]
}))