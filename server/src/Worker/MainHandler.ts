import { WebSocket } from 'ws'
import { CTApi } from '../tApi/tApi.js'
import { IWSMessage, IWSMessageData } from '@api'

export const MainHandler = async(ws:WebSocket, tApi:CTApi, message:string) => {
	const request:IWSMessage = JSON.parse(message) //TODO try catch
	
	const response:IWSMessage = {
		id: request.id,
		data: {
			service:request.data.service,
			method:request.data.method,
			payload:{}
		}
	}

	try {
		// @ts-ignore
		response.data.payload = await tApi[request.data.service][request.data.method](request.data.payload).response // TODO typing
	} catch (err:any) {
		response.error = `code:${err.code}. ${err.meta.message}`
	}

	// console.log("response.data.payload === ",response.data.payload)

	// if(req.service === "users"){
	// 	const service = tApi["users"]
	// 	const method = service[req.proc as keyof CTApi["users"]]//Metod<CTApi["users"]>]
	// 	if(typeof method === "function")response = await method.bind(service)(req.data).response
	// }

	// console.log('response === ',response)
	ws.send(JSON.stringify(response))
}