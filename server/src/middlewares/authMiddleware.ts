import { Request, Response, NextFunction } from 'express'
import { TokenService } from '../Services/TokenServices.js'

export function authMiddleware (request: Request, response: Response, next:NextFunction){
	try {
		const ah = request.headers.authorization
		if(ah){
			const aTokenString = ah.split(" ")[1]
			const userData = TokenService.verifyAToken(aTokenString)
			if(userData){
				response.locals = {...userData}
				next()
			} else response.status(401).send()
		} else response.status(401).send()
	} catch (err) {
		console.log(' authMiddleware catch err: ',err)
	}
}