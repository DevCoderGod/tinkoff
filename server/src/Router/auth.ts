import { IUser } from '@models'
import { Router } from 'express'
import { TokenService } from '../Services/TokenServices.js'
import { UserService } from '../Services/UserServices.js'

export const auth = Router()

auth.post('/registration', async (request, response) => {
	try {
		const {name, email, pass} = request.body
		const user:IUser | null = await UserService.new({name, email, pass})
		if(user){
			const {id,name, email, role, isActiv} = user
			response.send({id,name, email, role, isActiv})
			console.log("registration success")
		}
		else response.send("registration failed")
	} catch (err) {
		console.log("registration failed: Server error: ",err)
		response.status(500).json({message: ` Ошибка: ${err} `})
	}
})

auth.post('/login', async (request, response) => {

	const {name, email, pass} = request.body
	try {
		const user:IUser | null = await UserService.login({name, pass})
		if(user){
			const {name, email, role, isActiv} = user
			response.send({name, email, role, isActiv})
			console.log("login success")
		}
		else response.send("login failed")
	} catch (err) {
		response.status(500).json({message: ` Ошибка: ${err} `})
	}
})
auth.post('/logout', async (request, response) => {
	try {
		response.send('logout')
		console.log(' logout ')
	} catch (err) {
		response.status(500).json({message: ` Ошибка: ${err} `})
	}
})
auth.get('/activate/:link', async (request, response) => {
	try {
		response.send('activate/:link')
		console.log(' activate/:link ')
	} catch (err) {
		response.status(500).json({message: ` Ошибка: ${err} `})
	}
})