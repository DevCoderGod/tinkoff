import { makeObservable, observable, action } from 'mobx'
import { server, wsTimeot } from "../globalVars"
import { fetchJSON } from "../Api/requests"
import { IWSMessageData, IWSMessage } from '@api'
import { tApi } from '../tApi'
import { Account } from '@tinkoff/users'
import { Future, Share } from '@tinkoff/instruments'
import { InstrumentStatus } from '../tsproto/instruments'
import { AccountStatus } from '../tsproto/users'

interface IResponces{
	[key:number]:(data:any)=>void
}

type TStatus = "online" | "connection" | "offline" | "query"

interface IInfo{
	instruments:{
		shares: Share[]
		futures: Future[]
	}
}

export class CTAccount{
	status: TStatus
	ws: WebSocket | null
	wsMessageId: number
	responses:IResponces
	account: Account
	info: IInfo

	constructor(){
		makeObservable(this, {
			status: observable,
			ws: observable,
			account: observable,
			setWs: action,
			setAccount: action,
			setStatus: action,
		})
		this.status = "offline"
		this.ws = null
		this.account = {} as Account
		this.info = {instruments:{}} as IInfo
		this.wsMessageId = 0
		this.responses = {}
	}

	setWs(ws:WebSocket | null){
		if(ws){
			ws.onmessage = (e) => this.main(e)
			ws.onopen = async (e) => {
				this.setStatus("query")
				await this.getAccountData()
				await this.getInstrumentsData()
				this.account?.id && this.account.status === AccountStatus.OPEN && this.setStatus("online")
			}
			ws.onclose = e => {
				this.setWs(null)
				this.setAccount({} as Account)
				this.setStatus("offline")
			}
		}
		this.ws = ws
	}

	setStatus(s:TStatus){
		this.status = s
	}

	setAccount(a:Account){
		this.account = a
	}

	async getAccountData(){
		this.setAccount(await tApi.Users.getAccounts({}).then(r => r.accounts[0]))
	}

	async getInstrumentsData(){
		this.info.instruments.shares = await tApi.Instruments.shares({
			instrumentStatus: InstrumentStatus.BASE
		}).then(r => r.instruments)
		this.info.instruments.futures = await tApi.Instruments.futures({
			instrumentStatus: InstrumentStatus.BASE
		}).then(r => r.instruments)
	}
	
	main(e: MessageEvent<string>){
		const message:IWSMessage = JSON.parse(e.data)
		if(this.responses[message.id]){
			this.responses[message.id](message.data.payload)
			delete this.responses[message.id]
		} else console.log('unknown message from ws: ',message)
	}

	async likeFetch<REQ,RES>(data:IWSMessageData<REQ>): Promise<RES>{
		if(!this.ws) throw new Error(" WS is closed ")
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
		this.setStatus("connection")
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