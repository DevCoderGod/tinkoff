import http from 'http'
import { workerData, parentPort } from 'worker_threads'
import { WebSocketServer } from 'ws'

if(!parentPort) throw new Error(`!parentPort`)
if(!workerData) throw new Error(`!workerData`)

const server = http.createServer()
const wsServer = new WebSocketServer({ server })
wsServer.on('connection', ws => {
	ws.on('message', async message => {
		if(message.toString() === "exit") process.exit(2)
	})
	ws.on("error", e => ws.send(`ws error == ${e}`))
	ws.on("close", e => ws.send(`ws close == ${e}`))
})

parentPort.addListener("message", m => {
	if(m === "terminate") process.exit(3)
})

server.listen(workerData.port , () => {
	console.log(`WS Running on port ${workerData.port}`)
	parentPort?.postMessage({port:workerData.port})
})