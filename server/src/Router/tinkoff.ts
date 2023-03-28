import { Request, Response, Router } from 'express'
import { Worker } from 'worker_threads'
import { IToken } from "@models"
import { pool } from "../Worker/pool.js"
import { portMessage } from '../Worker/types'

export const tinkoff = Router()

tinkoff.post('/connect', async (request:Request<{},any,{token: IToken["value"] | null}>, response:Response) => {
	try {
		const token = request.body ? request.body.token : null
		if(!token){ throw new Error(' bad TToken ')}

		const port = pool.capture()
		if(!port) throw new Error(`Not enough resources!`)
		const workerData ={token, port}
		const worker = new Worker("../server/build/Worker/worker.js",{ workerData })

		worker.on('message', m => messageHandler(worker, m))
		worker.on('error', err => errorHandler(worker, err))
		worker.on('exit', exitCode => exitHandler(worker, exitCode, port))
		
	} catch (err) {
		response.status(500).json({message: ` ${err} `})
	}

	function messageHandler(worker: Worker, m: portMessage): void {
		if(m.port) response.status(200).json({port:m.port})
	}
	
	function errorHandler(worker: Worker, err: Error): void {
		console.log('error err === ',err)
	}

	function exitHandler(worker: Worker, exitCode: number, port:number): void {
		pool.release(port)
		console.log('exit exitCode === ',exitCode)
	}	
})

//test local token, directly to GRPC 
import { getApi } from '../tApi/tApi.js'
import { GetInfoResponse } from "@tinkoff/users"

tinkoff.get('/getInfo', async(req:Request, res:Response<any,GetInfoResponse>) => {
	const tApi = getApi()  
	res.send(await tApi.users.getInfo(req.body).response)
})