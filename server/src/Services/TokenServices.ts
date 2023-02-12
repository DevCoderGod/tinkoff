import jwt, { JwtPayload } from "jsonwebtoken"
import * as VARS from '../globalVars.js'
import { IToken, IUser } from '@models'
import { db } from "../db/db.js"

export interface IPayload extends Pick<IUser, "name" | "role" | "isActiv">{
	deviceID: string
}

export const TokenService = {
	
	generateAToken: async (payload: IPayload):Promise<string> => {
		return jwt.sign(payload, VARS.aTokenSecret, {expiresIn: VARS.aTokenExpired})
	},

	generateRToken: async (userID:string, payload: IPayload):Promise<IToken> => {
		const Token = jwt.sign(payload, VARS.rTokenSecret, {expiresIn: VARS.rTokenExpired})
		return await db.Token.create({userID, deviceID:payload.deviceID, value:Token, type: "refresh", expired:VARS.rTokenExpired})
	},

	decodeAToken: (tokenString:string):IPayload => {
		return jwt.verify(tokenString, VARS.aTokenSecret,{ complete: true }).payload as IPayload
	},

	decodeRToken: (tokenString:string): IPayload => {
		return jwt.verify(tokenString, VARS.rTokenSecret,{ complete: true }).payload as IPayload
	},

	delete: async (tokenString:string):Promise<boolean> => {
		return await db.Token.delete(tokenString)
	},

	find: async (tokenString:string):Promise<IToken | null> => {
		return await db.Token.find({value: tokenString})
	},

	check: async (idToken:string):Promise<boolean> => { // TODO 
		return false
	},
}