import { Request, Response, Router } from 'express'
import { Worker } from 'worker_threads'
import { IToken } from "@models"

export const tinkoff = Router()

tinkoff.post('/connect', async (request:Request<{},any,{token: IToken["value"] | null}>, response:Response) => {
	try {
		const token = request.body ? request.body.token : null
		if(!token){ throw new Error(' bad TToken ')}

		const port = 8999 // TODO dynamic port.. pool of ports
		const workerData ={token, port}
		const worker = new Worker("../server/build/Worker/worker.js",{ workerData })

		worker.on('message', m => messageHandler(worker, m))
		worker.on('error', err => errorHandler(worker, err))
		worker.on('exit', exitCode => exitHandler(worker, exitCode))
		
	} catch (err) {
		response.status(500).json({message: ` ${err} `})
	}

	function messageHandler(worker: Worker,m: any): void {
		if(m.port) response.status(200).json({port:m.port})
		if(m === "exit") worker.postMessage("terminate")
	}
	
	function errorHandler(worker: Worker, err: Error): void {
		console.log('error err === ',err)
	}

	function exitHandler(worker: Worker, exitCode: number): void {
		console.log('exit exitCode === ',exitCode)
	}	
})