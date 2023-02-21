import { IToken, IUser, IUserInfo } from "@models"
import { mongo as orm } from "./mongo/mongo.js"

export const db = {
	User:{
		find: async (key:{[key in Pick<IUser, "id" | "name" | "email"> as string]:string}):Promise<IUser | null> =>
			await orm.User.find(key),

		create: async (candidate:Pick<IUser, "name" | "pass" | "email" | "info">):Promise<IUser> =>
			await orm.User.create(candidate),

		addTokens: async (id:string, tokens:string[]):Promise<boolean> =>
			await orm.User.addTokens(id, tokens),

		updateTokens: async (id:string, tokens:string[]):Promise<boolean> =>
			await orm.User.updateTokens(id, tokens),

		getTokens:async (id:string):Promise<IToken[] | null> =>
			await orm.User.getTokens(id),

		updateInfo: async (id:string, info:IUserInfo):Promise<boolean> =>
			await orm.User.updateInfo(id, info),
	},

	Token:{
		find: async (key:{[key in Pick<IToken, "value"> as string]:string}):Promise<IToken | null> =>
			await orm.Token.find(key),

		create:  async (data:Omit<IToken, "id">):Promise<IToken> =>
			await orm.Token.create(data),

		delete :async (tokenString:string):Promise<boolean> =>
			await orm.Token.delete(tokenString),

		// save: async (tokens:IToken[]):Promise<boolean> =>
			// await orm.Token.save(tokens),
	},
}