import { IToken } from "@models"
import { Token as TokenModel } from "../models/Tokens.js"

export const Token = {
	save: async function (tokens:IToken[]){
		try {
			await TokenModel.insertMany(tokens)
		} catch (err) {
			console.log(' Token.saveToken is fail: ',err)
			throw new Error("Token.saveToken is fail: ")
		}
	},

	new: async function (data:Omit<IToken, "id">){
		try {
			return await TokenModel.create(data)
		} catch (err) {
			console.log(' Token.create is fail: ',err)
			throw new Error("Token.create is fail: ")
		}
	},
}