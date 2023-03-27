import { WebSocket } from 'ws'
import { CTApi } from '../tApi/tApi.js'
import { GetInfoResponse } from "@tinkoff/users"

export const MainHandler = async(ws:WebSocket, tApi:CTApi, message:any) => {
	console.log('message === ',message)
	const userInfo:GetInfoResponse = await tApi.users.getInfo({}).response
	if(!userInfo) throw new Error(' bad userInfo')
		ws.send(JSON.stringify(userInfo))
}