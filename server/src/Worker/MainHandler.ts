import { WebSocket } from 'ws'
import { CTApi } from '../tApi/tApi.js'
import { IMessage } from '@api'



export const MainHandler = async(ws:WebSocket, tApi:CTApi, message:any) => {
	const req:IMessage = JSON.parse(message) //TODO try catch

	// @ts-ignore
	let response = await tApi[req.service][req.proc](req.data).response // TODO typing

	// if(req.service === "users"){
	// 	const service = tApi["users"]
	// 	const method = service[req.proc as keyof CTApi["users"]]//Metod<CTApi["users"]>]
	// 	if(typeof method === "function")response = await method.bind(service)(req.data).response
	// }

	console.log('response === ',response)
	ws.send(JSON.stringify(response))
}