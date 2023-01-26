import { IUser } from "@models"
import { IDB } from "../db/db.js"
import bcrypt from "bcrypt"
import { TokenService } from "./TokenServices.js"

export const UserService = {
	new: async (candidate:Pick<IUser, "name" | "pass" | "email">):Promise<IUser | null> => {
		let user:IUser | null = await IDB.User.find({email:candidate.email})
		if(user) return null
		return await IDB.User.new({
			name: candidate.name,
			pass: await bcrypt.hash(candidate.pass,3),
			email: candidate.email
		})
	},

	login: async (candidate:Pick<IUser, "name" | "pass" >):Promise<IUser | null> => {
		let user = await IDB.User.find({name:candidate.name})
		if(!user) return null
		const isPassEquals = await bcrypt.compare(candidate.pass,user.pass)
		if(isPassEquals){ 
			// TODO проверка токенов юзера
			const {name, role, isActiv} = user
			const payload = {name, role, isActiv}

			const aToken = await TokenService.generateAToken(user.id,payload)
			const rToken = await TokenService.generateRToken(user.id,payload)

			await IDB.User.saveTokens(user.id,[aToken.id, rToken.id])

			return await IDB.User.find({name:candidate.name})
		} 
		return null
	},
}