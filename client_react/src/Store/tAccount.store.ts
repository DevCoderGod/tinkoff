import { makeObservable, observable, action, computed } from 'mobx'
import { fetchJSON } from "../Api/requests"
import { server } from "../globalVars"
import { IMessage } from '@api'
import { Account, GetAccountsResponse } from '@tinkoff/users'

interface IResponces{
	[key:number]:(data:any)=>void
}

export class CTAccount{
	ws: WebSocket | null
	account: Account = {} as Account
	requestId: number
	responses:IResponces
	// instruments:

	constructor() {
        makeObservable(this, {
            ws: observable,
			setWs: action,
			setAccount: action,
			getRequestId: computed
        })
		this.ws = null
		this.requestId = 1
		this.responses = {}
	}

	setWs(ws:WebSocket | null){
		if(ws){
			ws.onmessage = (e) => this.main(e)
			ws.onopen = (e) => this.getAccountData(ws)
		}
		this.ws = ws
	}

	getAccountData(ws: WebSocket){
		const requestId = this.getRequestId
		const message:IMessage = {
			requestId,
		    service:"users",
		    proc: "getAccounts",
		    data: {}
		}
		this.responses[message.requestId] = (data:GetAccountsResponse) => {
			this.setAccount(data.accounts[0])
		}
		ws.send(JSON.stringify(message))
	}

	main(e: MessageEvent<string>){
		const data:IMessage = JSON.parse(e.data)
		if(this.responses[data.requestId]){
			this.responses[data.requestId](data.data)
			delete this.responses[data.requestId]
		}
	}

	setRequestId(id:number){
		this.requestId = id
	}

	setAccount(a:Account){
		this.account = a
	}

	get getRequestId() {
		let id = this.requestId
		if(!Number.isSafeInteger(id++))id = 1
		this.setRequestId(id)
		return id
	}

	async connect(token:string):Promise<any>{
		if(!token) return false
		try {
			const port = await fetchJSON<{token:string}, {port:string}>(`${server}tinkoff/connect`, "POST",{token})
			if(!port) throw new Error(`the server did not provide a port`)
			const ws = new WebSocket(`ws://localhost:${port.port}`)
			this.setWs(ws)
		} catch (err) {
			console.log('connect error: ',err)
		}

	}

	async sendMessage(message:IMessage, cb:((data:any)=>void) | null = null){
		if(this.ws) {
			if (message.requestId && cb) this.responses[message.requestId]=cb //Object.defineProperty this.responses
			this.ws.send(JSON.stringify(message))
		}
		else alert("Soket is not open")
	}

	async disconnect(){
		await this.ws?.close(3001,"work end")
		this.setWs(null)
	}
}

export const tAccount = new CTAccount()