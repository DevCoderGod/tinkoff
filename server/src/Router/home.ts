import { Router } from 'express'
import { Api } from "../tApi/Api.js"
import * as VARS from '../globalVars.js'

export const home = Router()

home.get('/', (request, response) => {
	if(VARS.isPROD) response.render('index.js')
	response.send('Hello world!')
})

home.get('/u', (req, response) =>  //временный урл для проверки grpc
	Api.user.GetAccounts(null,(err:any,res:any)=>{
		if(err) throw new Error("err")
		console.log('res === ',res)
		response.send(res)
	}
))