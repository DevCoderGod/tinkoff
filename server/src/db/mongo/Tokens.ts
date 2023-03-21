import { IToken } from "@models"
import { Schema, model} from "mongoose"
import { transformToModel } from "./helpers/transformToModel.js"

const TokenModel = model<IToken>("Token", new Schema<IToken>({
	userID: { type: String, required: true },
	deviceID: { type: String, required: true },
	value: { type: String, required: true },
	type: { type: String, required: true },
	expiration: { type: String, required: true }
}))

export const Token = {

	create: async function (data:Omit<IToken, "id">){
		return await TokenModel.create(data)
			.then(token => token.toObject())
			.then(token => transformToModel<IToken>(token))
			.catch(err => {
				console.log(" Token.create is fail: ",err)
				throw new Error("Token.create is fail")
			})
	},

	find: async function (key:{[key in Pick<IToken, "id" | "deviceID" | "userID" | "value"> as string]:string}){
		const dbKey = Object.keys(key)[0] === "id" ? {_id: key.id} : {...key} // замена "id" на "_id" в "key"

		return await TokenModel.findOne(dbKey)
			.lean()
			.then(token => token ? transformToModel<IToken>(token) : null)
			.catch((err) =>{
				console.log(" Token.findOne is fail: ",err)
				throw new Error("Token.findOne is fail")
			})		
	},

	delete:async (token:string) => {
		return await TokenModel.deleteOne({value: token})
			.then(query => !!query.deletedCount)
			.catch(err=> {
				console.log(`Token.deleteOne is fail: "${err}, token = ${token}`)
				throw new Error(`Token.deleteOne is fail: ${err}`)
			})
	}
}