import { IUser } from '@models'
import { Router } from 'express'
import { IPayload } from 'src/Services/TokenServices.js'
import { UserService } from '../Services/UserServices.js'

export const auth = Router()

auth.post('/registration', async (request, response) => {
	try {
		const {name, email, pass} = request.body
		if(!name || !email || !pass) throw new Error(" data is undefined ") //TODO сделать парсер

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
		const {rToken} = request.cookies
		if(rToken){
			// const userData:IPayload = await UserService.checkRToken(rToken)
			throw new Error(' Login already done ')
		}
		const {name, pass, deviceID} = request.body
		if(!name || !pass || !deviceID) throw new Error(' data is undefined ')

		const user:IUser | null = await UserService.login({name, pass}, {deviceID})
		if(user){
			const {name, email, role, isActiv, jwtTokens} = user
			response.cookie("rToken", jwtTokens[0].value, {maxAge: 30*24*60*60*1000, httpOnly: true}) // TODO jwtTokens[0]
			response.send({name, email, role, isActiv})
		}
		else response.send("User is not found")
	} catch (err) {
		response.status(500).json({message: ` ${err} `})
	}
})

auth.post('/logout', async (request, response) => {
	try {
		const {rToken} = request.cookies
		if(!rToken) throw new Error(' data is undefined ')

		if(!await UserService.logout(rToken)) throw new Error(' Logout failed ')
		response.clearCookie('rToken')
		response.status(200).send()
	} catch (err) {
		response.status(500).json({message: ` ${err} `})
	}
})

auth.post('/refresh', async (request, response) => {
	try {
		const {rToken} = request.cookies
		if(!rToken) throw new Error(' rToken is undefined ')

		if(!rToken){
			response.redirect("/login")// TODO redirect to login
			return
		}

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