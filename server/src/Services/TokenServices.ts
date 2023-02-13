import { IToken, IUser } from '@models'
import { db } from "../db/db.js"
import * as VARS from '../globalVars.js'
import jwt, { JwtPayload } from "jsonwebtoken"
import { DateTime, Duration } from 'luxon'

export interface IPayload extends Pick<JwtPayload, "exp">, Pick<IUser, "name" | "role" | "isActiv">{
	deviceID: string
}

export const TokenService = {
	
	generateAToken: async (payload: IPayload):Promise<string> => {
		// console.log('expiration === ',DateTime.now().plus(Duration.fromISO(VARS.aTokenExpired)).toISO())
		return jwt.sign(payload, VARS.aTokenSecret, {expiresIn: DateTime.now().plus(Duration.fromISO(VARS.aTokenExpired)).toSeconds()})
	},

	generateRToken: async (userID:string, payload: IPayload):Promise<IToken> => {
		const exp = DateTime.now().plus(Duration.fromISO(VARS.rTokenExpired))
		payload.exp = exp.toSeconds()

		return await db.Token.create({
			userID,
			deviceID: payload.deviceID,
			value:jwt.sign(payload, VARS.rTokenSecret),
			type: "refresh",
			expiration:exp.toISO()
		})
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