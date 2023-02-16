import { IUser } from '@models'
import { Router } from 'express'
import { AuthRequestBodyParserAndCheck } from '../helpers/AuthRequestBodyParserAndCheck.js'
import { AuthRequestCookiesParserAndCheck } from '../helpers/AuthRequestCookiesParserAndCheck.js'
import { UserService } from '../Services/UserServices.js'
import { TokenService } from '../Services/TokenServices.js'
import { DateTime, Duration, Interval } from 'luxon'

export const auth = Router()

auth.post('/registration', async (request, response) => {
	try {
		const {name, email, pass, info} = AuthRequestBodyParserAndCheck(request.body,["name", "email", "pass", "info"])

		const user:IUser | null = await UserService.create({name, email, pass, info})
		if(user){
			const {name, email, role, isActiv} = user
			response.send({name, email, role, isActiv})
		}
		else throw new Error(' Registration failed ')
	} catch (err) { response.status(500).json({message: ` ${err} `}) }
})

auth.post('/login', async (request, response) => {
	try {
		const {rToken} = AuthRequestCookiesParserAndCheck(request.cookies,["rToken"])
		if(rToken){
			if(await TokenService.find(rToken)) throw new Error(' Login already done ')
		}

		const {name, pass, info} = AuthRequestBodyParserAndCheck(request.body,["name", "pass", "info"])
		const deviceID = info.deviceIDs[0]

		const user:IUser | null = await UserService.login({name, pass}, {deviceID})
		if(user){
			const {name, email, role, isActiv, jwtTokens} = user
			const rToken = jwtTokens.find(token => token.deviceID === deviceID)
			if(!rToken) throw new Error(' UserService.login is failed ')
			const ms = Interval.fromDateTimes(DateTime.now(), DateTime.fromISO(rToken.expiration)).toDuration().toMillis()
			response.cookie("rToken", rToken.value, {maxAge: ms, httpOnly: true})
			response.send({name, email, role, isActiv})
		}
		else response.send("User is not found")
	} catch (err) {
		response.status(500).json({message: ` ${err} `})
	}
})

auth.post('/logout', async (request, response) => {
	try {
		const {rToken} = AuthRequestCookiesParserAndCheck(request.cookies,["rToken"])
		if(!rToken) throw new Error(' logout: rToken is undefined ')

		if(!await UserService.logout(rToken)) throw new Error(' Logout failed ')
		response.clearCookie('rToken')
		response.status(200).send()
	} catch (err) {
		response.status(500).json({message: ` ${err} `})
	}
})

auth.post('/refresh', async (request, response) => {
	try {
		const {rToken} = AuthRequestCookiesParserAndCheck(request.cookies,["rToken"])
		if(!rToken) throw new Error(' refresh: rToken is undefined ')
		if(TokenService.verifyRToken(rToken)){
			const aTokenString = await UserService.refreshAToken(rToken)
			if(aTokenString){
				response.send(aTokenString)
			}
		} else {
			response.status(401).send()
		}
	} catch (err) {
		response.status(500).json({message: ` ${err} `})
	}
})

auth.get('/test', async (request, response) => {
	try {
		const {rToken} = AuthRequestCookiesParserAndCheck(request.cookies,["rToken"])
		if(!rToken) throw new Error(' test: token is undefined. ')
		const userData = await TokenService.verifyRToken(rToken)
		if(!userData) throw new Error(' test: token is invalid. ')
		response.send('test auth')
		console.log(' test auth ')
	} catch (err) {
		response.status(500).json({message: ` ${err} `})
	}
})