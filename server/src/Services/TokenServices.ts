import { IToken, IUser } from '@models'
import { db } from "../db/db.js"
import * as VARS from '../globalVars.js'
import jwt, { JwtPayload } from "jsonwebtoken"
import { DateTime, Duration } from 'luxon'

export interface IPayload extends Pick<JwtPayload, "exp">, Pick<IUser, "name" | "role" | "isActiv">{
	deviceID: string
}

export const TokenService = {
	
	generateAToken: (payload: IPayload):string => {
		payload.exp = DateTime.now().plus(Duration.fromISO(VARS.aTokenExpired)).toSeconds()
		return jwt.sign(payload, VARS.aTokenSecret)
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

	verifyAToken: (tokenString:string):IPayload | false => {
		try {
			return jwt.verify(tokenString, VARS.aTokenSecret,{ complete: true }).payload as IPayload
		} catch (err:any) {
			console.log(' verifyAToken is err: ',err.message)
			return false
		}
	},

	verifyRToken: (tokenString:string): IPayload | false => {
		try {
			return jwt.verify(tokenString, VARS.rTokenSecret,{ complete: true }).payload as IPayload
		} catch (err:any) {
			console.log(' verifyRToken is err: ',err.message)
			return false
		}
	},

	delete: async (tokenString:string):Promise<boolean> => {
		return await db.Token.delete(tokenString)
	},

	find: async (tokenString:string):Promise<IToken | null> => {
		return await db.Token.find({value: tokenString})
	},
}