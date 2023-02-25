import express from 'express'
import mongoose from 'mongoose'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import * as VARS from './globalVars.js'
import { Router } from './Router/index.js'
import cookieParser from 'cookie-parser'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

VARS.isDEV && console.log(' isDev ')

app.use(express.json())
app.use(cookieParser())
if(VARS.isPROD) app.use(express.static(join(__dirname, '../../client_react/build')))

app.use('/', Router.home)
app.use('/auth', Router.auth)
app.use('*', (req, res) => {
	res.status(404).json({ message: 'Page not found' })
})

const start = async() => {
	try {
		mongoose.set('strictQuery', false) //DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7.
		await mongoose.connect(VARS.DB_URL)
			.then(() => console.log(' DB OK '))
			.catch(err => {
				console.log('DB error: ',err)
				throw new Error("err")
			})

		app.listen(VARS.PORT, () => console.log(`Running on port ${VARS.PORT}`))
	} catch (err) {
		console.log('Server error: ',err)
	}
}

start()