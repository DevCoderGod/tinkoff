import { Router } from 'express'
import { Api } from "../api/Api.js"
import * as VARS from '../globalVars.js'

const router = Router()

router.get('/', (request, response) => {
	if(VARS.isPROD) response.render('index.js')
	response.send('Hello world!')
})

router.get('/u', (req, response) => 
	Api.user.GetAccounts(null,(err:any,res:any)=>{
		if(err) throw new Error("err")
		response.send(res)
	}
))

export default router