import { IToken, IUser, TUserClientStore } from "@models"
import { TAuth } from '@api'
import { db } from "../db/db.js"
import bcrypt from "bcrypt"
import { IPayload, TokenService } from "./TokenServices.js"
import { ObjectParser } from "../helpers/ObjectParser.js"

export const UserService = {
	
	create: async (candidate:TAuth.RegRequest):Promise<TAuth.RegResponse | TAuth.InfoResponse> => {
		const user = await db.User.find({email:candidate.email})
		if(user) return {message: "user already exists"}

		return await db.User.create({
			name: candidate.name,
			pass: await bcrypt.hash(candidate.pass,3),
			email: candidate.email,
			info: candidate.info
		}).then(user => ObjectParser<IUser,TAuth.RegResponse>(user,["name", "email", "role"]))
	},

	login: async (candidate:TAuth.LoginRequest):Promise<{user:TUserClientStore, aTokenString:string, rTokenString:string, rTokenExp:string} | TAuth.InfoResponse> => {
		const user = await db.User.find({name:candidate.name})
		if(!user) return {message: 'user not found'}
		if(!await bcrypt.compare(candidate.pass,user.pass)) return {message: 'bad login or pass'}

		return {
			user: ObjectParser<IUser,TUserClientStore>(user,["name", "email", "role", "isActiv"]),
			...await UserService.generateTokens(user, candidate.info.deviceIDs[0])
		}
	},

	logout: async (rTokenString:string):Promise<boolean> => {
		const rToken = await TokenService.find(rTokenString)
		if(!rToken) return false
		const user = await db.User.find({id:rToken.userID})
		if(user && await UserService.deleteToken(user, rToken)) return true
		return false
	},

	generateTokens: async (user:IUser, deviceID:string):Promise<{aTokenString:string, rTokenString:string, rTokenExp:string}> => {
		const rToken = user.jwtTokens.find(token => token.deviceID === deviceID)
		if(rToken) await UserService.deleteToken(user, rToken)
		const {rTokenString, rTokenExp} = await UserService.generateRToken(user, deviceID)
		const aTokenString = UserService.generateAToken(user,deviceID)
		return {aTokenString, rTokenString, rTokenExp}
	},

	generateRToken: async (user:IUser, deviceID:string):Promise<{rTokenString:string, rTokenExp:string}> => {
		const {name, role, isActiv, info} = user
		const payload:IPayload = {name, role, isActiv, deviceID}
		const rToken:IToken = await TokenService.generateRToken(user.id, payload)

		return await db.User.addTokens(user.id,[rToken.id])
			.then(async addTokens => {
				if(!addTokens) throw new Error('addTokens is unsuccessful')
				if(!user.info.deviceIDs.find(id => id === deviceID)){
					const newInfo = {...info}
					newInfo.deviceIDs.push(deviceID)
					await db.User.updateInfo(user.id, newInfo)
						.catch(err => {throw new Error('generateRToken is failed')})
				}
				return {rTokenString: rToken.value, rTokenExp: rToken.expiration}
			})
			.catch(err => {throw new Error("generateRToken is failed")})
	},

	generateAToken: (user:IUser, deviceID:string):string => {
		const {name, role, isActiv} = user
		const payload:IPayload = {name, role, isActiv, deviceID}
		return TokenService.generateAToken(payload)
	},

	deleteToken: async (user:IUser, rToken:IToken):Promise<boolean> => {
		let tokens:string[] = []
		user.jwtTokens.forEach(token => {
			if(token.value !== rToken.value) tokens.push(token.id)
		})
		return await db.User.updateTokens(user.id, tokens) && await TokenService.delete(rToken.value)
	},

	refreshTokens: async (rToken:string):Promise<{aTokenString:string, rTokenString:string, rTokenExp:string}> => {
		const userData:IPayload | false = TokenService.verifyRToken(rToken)
		if(!userData) throw new Error('bad rToken')
		let user = await db.User.find({name:userData.name})
		if(!user) throw new Error(' user not found ')
		const i = user.jwtTokens.findIndex(token => token.value === rToken)
		if(i == -1) throw new Error('rToken not found')
		await UserService.deleteToken(user, user.jwtTokens[i])
			.then(deleteToken => {if(!deleteToken) throw new Error('deleteToken is unsuccessful')})

		return await UserService.generateTokens(user,userData.deviceID)
	},
}