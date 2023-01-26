import { IToken, IUser } from "@models"
import { User as UserModel} from "../models/User.js"

export const User = {
	find: async function (key:{[key in Pick<IUser, "id" | "name" | "email"> as string]:string}){
		try {
			return await UserModel.findOne(key)
		} catch (err) {
			console.log(' User.findOne is fail: ',err)
			throw new Error('User.findOne is fail: ')
		}
	},

	new: async function (candidate:Pick<IUser, "name" | "pass" | "email">){
		try {
			return await UserModel.create(candidate)
		} catch (err) {
			console.log(' User.create is fail: ',err)
			throw new Error("User.create is fail: ")
		}
	},

	saveTokens: async function (id:string, tokens:string[]){
		try {
			return await UserModel.updateOne(
				{_id:id},
				{$push: {jwtTokens:tokens}}
			).then(query => {
				if(query.acknowledged && query.modifiedCount) return true
				return false
			})
		} catch (err) {
			console.log(' User.saveUserTokens is fail: ',err)
			throw new Error("User.saveUserTokens is fail: ")
		}
	},
}