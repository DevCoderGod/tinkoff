import { Router } from 'express'
import * as VARS from '../globalVars.js'

export const home = Router()

home.get('/', (request, response) => {
	if(VARS.isPROD) response.render('index.js')
	response.send('Hello world!')
})