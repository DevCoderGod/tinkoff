import { Router } from 'express'

export const auth = Router()

auth.post('/registration', async (request, response) => {
	try {
		response.send("registration")
		console.log("registration")
	} catch (err) {
		response.status(500).json({message: ` Ошибка: ${err} `})
	}
})
auth.post('/login', async (request, response) => {
	try {
		response.send("login")
		console.log("login")
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