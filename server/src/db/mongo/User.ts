import { IUser } from "@models"
import { Schema, model } from "mongoose"
import { transformToModel } from "./helpers/transformToModel.js"

const UserModel = model<IUser>("User", new Schema<IUser>({
	name: { type: String, required: true },
	pass: { type: String, required: true },
	email: { type: String, required: true },
	role: { type: String, required: true, default: "guest" },
	isActiv: { type: Boolean, default: false },
	activExp: { type: Date, default: null },
	jwtTokens: [{ type: Schema.Types.ObjectId, ref: "Token" }],
	info: {type: Object, required: true}
}))

export const User = {

	create: async function (candidate:Pick<IUser, "name" | "pass" | "email" | "info">):Promise<IUser>{

		return await UserModel.create(candidate)
			.then(user => user.toObject())
			.then(user => transformToModel<IUser>(user))
			.catch(err => {
				console.log(" User.create is fail: ",err)
				throw new Error("User.create is fail:")
			})	
	},
	
	find: async function (key:{[key in Pick<IUser, "id" | "name" | "email"> as string]:string}):Promise<IUser | null>{
		const dbKey = Object.keys(key)[0] === "id" ? {_id: key.id} : {...key} // замена "id" на "_id" в "key"
		
		return await UserModel.findOne(dbKey)
			.populate("jwtTokens")
			.lean()
			.then(user => user ? transformToModel<IUser>(user) : null)
			.catch(err => {
				console.log(" User.findOne is fail: ",err)
				throw new Error("User.findOne is fail:")
			})
	},

	addTokens: async function (id:string, tokens:string[]){

		return await UserModel.updateOne({_id:id}, {$push: {jwtTokens:tokens}})
			.then(query => query.acknowledged && query.modifiedCount>0)
			.catch(err => {
				console.log(" User.saveTokens is fail: ",err)
				throw new Error(" User.saveTokens is fail: ")
			})
	},

	updateTokens: async function (id:string, tokens:string[]){

		return await UserModel.updateOne({_id:id}, {jwtTokens:tokens})
			.then(query => query.acknowledged && query.modifiedCount>0)
			.catch (err => {
				console.log(" User.updateTokens is fail: ",err)
				throw new Error(" User.updateTokens is fail: ")
			})
	},

	getTokens: async (id:string) => {
		return await UserModel.findOne({_id:id})
			.populate("jwtTokens")
			.select('jwtTokens')
			.then(arrTokens => arrTokens?.jwtTokens ?? null)
			.catch (err => {
				console.log(" User.getTokens is fail: ",err)
				throw new Error(" User.getTokens is fail: ")
			})
	},
}