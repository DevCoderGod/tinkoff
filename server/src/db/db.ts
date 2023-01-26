import { IToken, IUser } from "@models"
import { mongo as db } from "./mongo/mongo.js"

export const IDB = {
	User:{
		find: async (key:{[key in Pick<IUser, "name" | "email"> as string]:string}):Promise<IUser | null> =>
			await db.User.find(key).then(data => {
				if(!data)return null
				const id = data._id.toString()
				const {name, pass, email, role, isActiv, activExp, jwtTokens} = data // TODO не универсально..
				return {id, name, pass, email, role, isActiv, activExp, jwtTokens}
			}),

		new: async (candidate:Pick<IUser, "name" | "pass" | "email">):Promise<IUser> =>
			await db.User.new(candidate).then(data => {
				const id = data._id.toString()
				const {name, pass, email, role, isActiv, activExp, jwtTokens} = data // TODO не универсально..
				return {id, name, pass, email, role, isActiv, activExp, jwtTokens}
			}),

		saveTokens:async (id:string, tokens:string[]):Promise<boolean> =>
			await db.User.saveTokens(id, tokens),
	},

	Token:{
		new:  async (token:Omit<IToken, "id">):Promise<IToken> =>
			await db.Token.new(token).then(data => {
				const id = data._id.toString()
				const {userID, value, type, expired} = data
				return {id, userID, value, type, expired}
			}),

		// save: async (tokens:IToken[]):Promise<boolean> => await db.Token.save(tokens).then(() => true).catch(() => false),
	},
}