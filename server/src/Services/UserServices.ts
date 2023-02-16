import { IToken, IUser, IUserInfo } from "@models"
import { db } from "../db/db.js"
import bcrypt from "bcrypt"
import { IPayload, TokenService } from "./TokenServices.js"

export const UserService = {
	
	create: async (candidate:Pick<IUser, "name" | "pass" | "email" | "info">):Promise<IUser | null> => {
		let user:IUser | null = await db.User.find({email:candidate.email})
		if(user) return null
		return await db.User.create({
			name: candidate.name,
			pass: await bcrypt.hash(candidate.pass,3),
			email: candidate.email,
			info: candidate.info
		})
	},

	login: async (candidate:Pick<IUser, "name" | "pass">, tokenData:Pick<IToken, "deviceID">):Promise<IUser | null> => {
		let user:IUser | null = await db.User.find({name:candidate.name})
		if(!user) return null
		if(await bcrypt.compare(candidate.pass,user.pass)){
			const rToken = user.jwtTokens.find(token => token.deviceID === tokenData.deviceID)
			if(rToken)UserService.deleteToken(user, rToken)
			await UserService.generateRToken(user, tokenData.deviceID)
			return await db.User.find({id: user.id})
		}
		return null
	},

	logout: async (rTokenString:string):Promise<boolean> => {
		const rToken:IToken | null = await TokenService.find(rTokenString)
		if(!rToken) return false
		const user:IUser | null = await db.User.find({id:rToken.userID})
		if(user && await UserService.deleteToken(user, rToken) && await TokenService.delete(rTokenString)) return true
		return false
	},

	generateRToken: async (user:IUser, deviceID:string):Promise<string> => {
		const {name, role, isActiv} = user
		const payload:IPayload = {name, deviceID, role, isActiv}
		const rToken = await TokenService.generateRToken(user.id, payload)

		if(await db.User.addTokens(user.id,[rToken.id])){
			// TODO сохранить deviceID в user.info
			return rToken.value
		}
		else throw new Error(' generateRToken is failed ')
	},

	generateAToken: async (user:IUser, deviceID:string):Promise<string> => {
		const {name, role, isActiv} = user
		const payload:IPayload = {name, deviceID, role, isActiv}
		return await TokenService.generateAToken(payload)
	},

	deleteToken: async (user:IUser, rToken:IToken):Promise<boolean> => {
		let tokens:string[] = []
		user.jwtTokens.forEach(token => {
			if(token.value !== rToken.value) tokens.push(token.id)
		})
		return await db.User.updateTokens(user.id, tokens) && await TokenService.delete(rToken.value)
	},

	refreshAToken: async (rTokenString:string):Promise<string> => {
		const userData:IPayload | false = TokenService.verifyRToken(rTokenString)
		if(!userData) return ""
		let user:IUser | null = await db.User.find({name:userData.name})
		if(!user) throw new Error(' refreshTocken is failed ')
		return await UserService.generateAToken(user, userData.deviceID)
	},
}