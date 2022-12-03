import { Router } from 'express'
import * as VARS from '../globalVars.js'

const router = Router()
router.get('/', (request, response) => {
	if(VARS.isPROD) response.render('index.js')
	response.send('Hello world!')
});

export default router