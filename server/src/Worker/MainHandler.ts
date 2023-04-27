import { WebSocket } from 'ws'
import { CTApi } from '../tApi/tApi.js'
import { IWSMessage, IWSMessageData } from '@api'

export const MainHandler = async(ws:WebSocket, tApi:CTApi, message:string) => {
	const request:IWSMessage = JSON.parse(message) //TODO try catch
	request.data

	// @ts-ignore
	const payload:IWSMessageData<any> = await tApi[request.data.service][request.data.method](request.data.payload).response // TODO typing
	const response:IWSMessage = {
		id: request.id,
		data: {
			service:request.data.service,
			method:request.data.method,
			payload
		}
	}

	// if(req.service === "users"){
	// 	const service = tApi["users"]
	// 	const method = service[req.proc as keyof CTApi["users"]]//Metod<CTApi["users"]>]
	// 	if(typeof method === "function")response = await method.bind(service)(req.data).response
	// }

	// console.log('response === ',response)
	ws.send(JSON.stringify(response))
}