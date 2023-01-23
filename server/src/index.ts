import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import * as VARS from './globalVars.js'
import { Router } from './Router/index.js'

const app = express();
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

VARS.isDEV && console.log(' isDev ');

app.use(express.json())
if(VARS.isPROD) app.use(express.static(join(__dirname, '../../client_react/build')))

app.use('/', Router.home)
app.use('/auth', Router.auth)
app.use('*', (req, res) => {
	res.status(404).json({ message: 'Page not found' })
})

app.listen(VARS.PORT, () => console.log(`Running on port ${VARS.PORT}`));