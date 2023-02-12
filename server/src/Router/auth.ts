import { IUser } from '@models'
import { Router } from 'express'
import { AuthRequestBodyParserAndCheck } from '../helpers/AuthRequestBodyParserAndCheck.js'
import { AuthRequestCookiesParserAndCheck } from '../helpers/AuthRequestCookiesParserAndCheck.js'
import { UserService } from '../Services/UserServices.js'

export const auth = Router()

auth.post('/registration', async (request, response) => {
	try {
		const {name, email, pass} = AuthRequestBodyParserAndCheck(request.body,["name", "email", "pass"])

		const user:IUser | null = await UserService.create({name, email, pass})
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
		if(rToken) throw new Error(' Login already done ') // TODO redirect to ?

		const {name, pass, deviceID} = AuthRequestBodyParserAndCheck(request.body,["name", "pass", "deviceID"])

		const user:IUser | null = await UserService.login({name, pass}, {deviceID})
		if(user){
			const {name, email, role, isActiv, jwtTokens} = user
			response.cookie("rToken", jwtTokens[0].value, {maxAge: 30*24*60*60*1000, httpOnly: true}) // TODO jwtTokens[0] => by deviceID
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
		if(!rToken) throw new Error(' refresh: rToken is undefined ')// TODO redirect to login

		const aToken = await UserService.refreshTocken(rToken)
		if(aToken){
			response.cookie("rToken", rToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
			response.send(aToken)
		}
	} catch (err) {
		response.status(500).json({message: ` ${err} `})
	}
})

auth.get('/activate/:link', async (request, response) => {
	try {
		response.send('activate/:link')
		console.log(' activate/:link ')
	} catch (err) {
		response.status(500).json({message: ` ${err} `})
	}
})