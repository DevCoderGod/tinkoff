import { Request, Response, Router } from 'express'
import { IToken } from "@models"
import { Worker } from 'worker_threads'

export const tinkoff = Router()

tinkoff.post('/connect', async (request:Request<{},any,{token: IToken["value"] | null}>, response) => {
	try {
		const token = request.body ? request.body.token : null
		if(!token){ throw new Error(' bad TToken ')}

		const port = 8999 // TODO dynamic port.. pool of ports
		const workerData ={token, port}
		const worker = new Worker("../server/build/Worker/worker.js",{ workerData })

		worker.on('message', v => {console.log('message v === ',v)})
		worker.on('error', err => {console.log('error err === ',err)})
		worker.on('exit', exitCode => {console.log('exit exitCode === ',exitCode)})

		setTimeout(async()=>{
			let code = await worker.terminate()
			console.log('code === ',code)
		},10000)

	} catch (err) {
		response.status(500).json({message: ` ${err} `})
	}
})