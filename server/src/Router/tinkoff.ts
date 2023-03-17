import { Request, Response, Router } from 'express'
import { IPayload } from 'src/Services/TokenServices'
import { tApi } from '../tApi/tApi.js'

export const tinkoff = Router()

// tinkoff.post('/connect', async (request, response) => {
// 	try {
// 		const {rToken} = AuthRequestCookiesParserAndCheck(request.cookies,["rToken"])
// 		if(!rToken) throw new Error(' test: token is undefined. ')
// 		const userData = TokenService.verifyRToken(rToken)
// 		if(!userData) throw new Error(' test: token is invalid. ')
// 		userData.name
// 		response.send('test auth')
// 		console.log(' test auth ')
// 	} catch (err) {
// 		response.status(500).json({message: ` ${err} `})
// 	}
// })
type userData = {user:IPayload}

tinkoff.get('/getInfo', async(req:Request, res:Response<any,IPayload>) => {
	res.send(await tApi.user.getInfo(req.body).response)
})