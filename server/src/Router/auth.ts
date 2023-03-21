import { Request, Response, Router } from 'express'
import { TAuth } from '@api'
import { RequestCookiesParser } from '../helpers/RequestCookiesParser.js'
import { IntervalToMillis } from '../helpers/IntervalToMillis.js'
import { UserService } from '../Services/UserServices.js'

export const auth = Router()

auth.post('/registration', async (request:Request<{},any,TAuth.RegRequest>, response:Response<TAuth.RegResponse | TAuth.InfoResponse>) => {
	await UserService.create(request.body) // TODO validator request.body
		.then(data => response.send(data))
		.catch (err => {response.status(500).send(err.message)})
})

auth.post('/login', async (request:Request<{},any,TAuth.LoginRequest>, response:Response<TAuth.LoginResponse | TAuth.InfoResponse>) => {
	await UserService.login(request.body) // TODO validator request.body
		.then(data => {
			if("message" in data) response.send(data)
			else response
				.cookie("rToken", data.rTokenString, {maxAge: IntervalToMillis(data.rTokenExp)*100, httpOnly: true})
				.send({token: data.aTokenString, user: data.user})
		})
		.catch (err => {response.status(500).send(err.message)})
})

auth.post('/logout', async (request, response) => {
	await RequestCookiesParser(request.cookies,["rToken"])
		.then(async cookies => await UserService.logout(cookies.rToken)
			.then(() => response
				.clearCookie('rToken')
				.status(200)
				.send("OK")
			)
			.catch (err => {response.status(500).send(err.message)})
		)
		.catch(err => response.send(err.message))
})

auth.post('/refresh', async (request, response:Response<TAuth.RefreshResponse>) => {
	await RequestCookiesParser(request.cookies,["rToken"])
		.then(async cookies => await UserService.refreshTokens(cookies.rToken)
			.then(data => response
				.cookie("rToken", data.rTokenString, {maxAge: IntervalToMillis(data.rTokenExp), httpOnly: true})
				.send({token: data.aTokenString})
			)
			.catch (err => {response.status(500).send(err.message)})
		)
		.catch(err => response.send(err.message))
})