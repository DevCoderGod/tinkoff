import jwt from "jsonwebtoken"
import * as VARS from '../globalVars.js'
import { IToken } from '@models'
import { IDB } from "../db/db.js"

export const TokenService = {
	generateAToken:async (userID:string, payload: string | object | Buffer):Promise<IToken> => {
		const Token = jwt.sign(payload, VARS.aTokenSecret, {expiresIn: VARS.aTokenExpired})
		return await IDB.Token.new({userID, value:Token, type: "access", expired:VARS.aTokenExpired})
	},

	generateRToken:async (userID:string, payload: string | object | Buffer):Promise<IToken> => {
		const Token = jwt.sign(payload, VARS.rTokenSecret, {expiresIn: VARS.rTokenExpired})
		return await IDB.Token.new({userID, value:Token, type: "refresh", expired:VARS.rTokenExpired})
	},

	// save:async (tokens:IToken[]) => {
	// 	await IDB.Token.save(tokens)
	// }
}