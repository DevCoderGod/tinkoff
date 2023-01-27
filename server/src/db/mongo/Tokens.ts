import { IToken } from "@models"
import { Schema, model} from "mongoose"

const TokenModel = model<IToken>("Token", new Schema<IToken>({
	userID: { type: String, required: true },
	deviceID: { type: String, required: true },
	value: { type: String, required: true },
	type: { type: String, required: true },
	expired: { type: String, required: true }
}))

export const Token = {

	create: async function (data:Omit<IToken, "id">){
		return await TokenModel.create(data)
			.then(data => {
				const id = data._id.toString()
				const {userID, deviceID, value, type, expired} = data
				return {id, userID, deviceID, value, type, expired}
			})
			.catch(err => {
				console.log(" Token.create is fail: ",err)
				throw new Error("Token.create is fail: ")
			})
	},

	// save: async function (tokens:IToken[]){
	// 	await TokenModel.insertMany(tokens)
	// 		.then(() => true)
	// 		.catch(err => {
	// 			console.log(" Token.save is fail: ",err)
	// 			throw new Error("Token.save is fail: ")
	// 		})
	// },

	findByUserId: async function (userID:string){
		return await TokenModel.find({userID})
			.catch(err => {
				console.log(" Token.findByUserId is fail: ",err)
				throw new Error("Token.findByUserId is fail: ")
			})
	},

	find: async function (key:{[key in Pick<IToken, "id" | "deviceID" | "userID" | "value"> as string]:string}){
		const dbKey = Object.keys(key)[0] === "id" ? {_id: key.id} : {...key} // замена "id" на "_id" в "key"
		return await TokenModel.findOne(dbKey)
			.then(token => {
				if(!token)return null
				const id = token._id.toString()
				const {userID, deviceID, value, type, expired} = token // TODO не универсально..
				return {id, userID, deviceID, value, type, expired}
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