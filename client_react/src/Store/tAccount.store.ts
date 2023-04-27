import { makeObservable, observable, action } from 'mobx'
import { server, wsTimeot } from "../globalVars"
import { fetchJSON } from "../Api/requests"
import { IWSMessageData, IWSMessage } from '@api'
import { Account, GetAccountsRequest, GetAccountsResponse } from '@tinkoff/users'

interface IResponces{
	[key:number]:(data:any)=>void
}

export class CTAccount{
	ws: WebSocket | null
	wsMessageId: number
	responses:IResponces
	account: Account

	constructor(){
        makeObservable(this, {
            ws: observable,
            account: observable,
			setWs: action,
			setAccount: action,
        })
		this.ws = null
		this.account = {} as Account
		this.wsMessageId = 0
		this.responses = {}
	}

	setWs(ws:WebSocket | null){
		if(ws){
			ws.onmessage = (e) => this.main(e)
			ws.onopen = (e) => this.getAccountData(ws)
		}
		this.ws = ws
	}

	setAccount(a:Account){
		this.account = a
	}

	async getAccountData(ws: WebSocket){
		this.setAccount(await this.likeFetch<GetAccountsRequest, GetAccountsResponse>({
			service:"users",
			method: "getAccounts",
			payload: {}
		}).then(p => p.accounts[0]))
	}
	
	main(e: MessageEvent<string>){
		const message:IWSMessage = JSON.parse(e.data)
		if(this.responses[message.id]){
			this.responses[message.id](message.data.payload)
			delete this.responses[message.id]
		} else console.log('unknown message from ws: ',message)
	}

	async likeFetch<REQ,RES>(data:IWSMessageData<REQ>): Promise<RES>{
		return new Promise<RES>((resolve,reject) => {
			const timeout = setTimeout(() => reject("Timeout exceeded"),wsTimeot)
			const response = (data:RES) => {
				globalThis.clearTimeout(timeout)
				resolve(data)
			}
			const request:IWSMessage = {
				id: this.getMessageId,
				data
			}
			this.responses[request.id]=response
			this.ws!.send(JSON.stringify(request))
		})
	}

	sendMessage<REQ>(data:IWSMessageData<REQ>):void{
		this.ws!.send(JSON.stringify({data}))
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

	async disconnect(){
		await this.ws?.close(3001,"work end")
		this.setWs(null)
	}

	get getMessageId() {
		return Number.isSafeInteger(this.wsMessageId++) ? this.wsMessageId : 1
	}
}

export const tAccount = new CTAccount()