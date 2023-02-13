import { IToken } from "@models"
import { Schema, model} from "mongoose"

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
			.then(data => {
				const id = data._id.toString()
				const {userID, deviceID, value, type, expiration} = data
				return {id, userID, deviceID, value, type, expiration}
			})
			.catch(err => {
				console.log(" Token.create is fail: ",err)
				throw new Error("Token.create is fail: ")
			})
	},

	find: async function (key:{[key in Pick<IToken, "id" | "deviceID" | "userID" | "value"> as string]:string}){
		const dbKey = Object.keys(key)[0] === "id" ? {_id: key.id} : {...key} // замена "id" на "_id" в "key"
		return await TokenModel.findOne(dbKey)
			.then(token => {
				if(!token)return null
				const id = token._id.toString()
				const {userID, deviceID, value, type, expiration} = token // TODO не универсально..
				return {id, userID, deviceID, value, type, expiration}
			})
			.catch((err) =>{
				console.log(" Token.findOne is fail: ",err)
				throw new Error("Token.findOne is fail:")
			})		
	},

	delete:async (token:string) => {
		return await TokenModel.deleteOne({value: token})
			.then(()=>true)
			.catch(err=> {
				console.log(" Token.deleteOne is fail: ",err)
				// throw new Error("Token.deleteOne is fail: ")
				return false
			})
	}
}