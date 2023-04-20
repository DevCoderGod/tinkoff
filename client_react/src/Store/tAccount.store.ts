import { makeObservable, observable, action } from 'mobx'
import { fetchJSON } from "../Api/requests"
import { server } from "../globalVars"
import { IMessage } from '@api'

export class CTAccount{
	ws: WebSocket | null

	constructor() {
        makeObservable(this, {
            ws: observable,
			setWs: action
        })
		this.ws = null
	}

	setWs(ws:WebSocket | null){
		this.ws = ws
	}

	async connect(token:string):Promise<any>{
		if(!token) return false
		try {
			const port = await fetchJSON<{token:string}, {port:string}>(`${server}tinkoff/connect`, "POST",{token})
			if(!port) throw new Error(`the server did not provide a port`)
			const ws = new WebSocket(`ws://localhost:${port.port}`)
	
			ws.onopen = function() {
				ws.onmessage = function(e: MessageEvent<IMessage>){
					console.log('e === ', e.data)


				}
			}
			this.setWs(ws)
		} catch (err) {
			console.log('connect error: ',err)
		}

	}

	async sendMessage(message:IMessage){
		if(this.ws) this.ws.send(JSON.stringify(message))
		else alert("Soket is not open")
	}

	async disconnect(){
		await this.ws?.close(3001,"work end")
		this.setWs(null)
	}
}

export const tAccount = new CTAccount()