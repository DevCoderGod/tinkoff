import http from 'http'
import { CTApi } from '../tApi/tApi.js'
import { workerData, parentPort } from 'worker_threads'
import { WebSocketServer } from 'ws'
import { MainHandler } from './MainHandler.js'
import { GetInfoResponse } from '@proto/users.js'

if(!parentPort) throw new Error(`!parentPort`)
if(!workerData) throw new Error(`!workerData`)

const tApi = new CTApi(workerData.token)
const server = http.createServer()
const wsServer = new WebSocketServer({ server })

wsServer.on('connection', async ws => {
	ws.on('message', async message => {
		if(message.toString() === "exit") process.exit(2)
		MainHandler(ws,tApi,message.toString())
	})
	ws.on("error", err => {console.log('err === ',err); process.exit(4)})
	ws.on("close", e =>  process.exit(5))

	const userInfo:GetInfoResponse = await tApi.users.getInfo({}).response
	if(!userInfo) throw new Error(' bad tApi')
	ws.send(JSON.stringify(userInfo))
})

parentPort.addListener("message", m => {
	if(m === "terminate") process.exit(3)
})

server.listen(workerData.port , () => {
	console.log(`WS Running on port ${workerData.port}`)
	parentPort?.postMessage({port:workerData.port})
})