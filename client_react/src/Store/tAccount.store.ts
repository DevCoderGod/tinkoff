import { makeObservable, observable, action } from 'mobx'
import { server, wsTimeot } from "../globalVars"
import { fetchJSON } from "../Api/requests"
import { IWSMessageData, IWSMessage } from '@api'
import { tApi } from '../tApi'
import { Account } from '@tinkoff/users'
import { Future, Share } from '@tinkoff/instruments'
import { InstrumentStatus } from '../tsproto/instruments'
import { AccountStatus } from '../tsproto/users'
import { toast } from 'react-toastify'

interface IResponces{
	[key:number]:{
		resolve:(data:any)=>void
		reject:(data:any)=>void
	}
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

	setStatus = (s:TStatus) => this.status = s

	setAccount = (a:Account) => this.account = a

	setWs(ws:WebSocket | null){
		if(ws){
			ws.onmessage = e => this.messageHandler(e)
			ws.onopen =  e => this.openHandler(e)
			ws.onclose = e => this.closeHandler(e)
		}
		this.ws = ws
	}	

	async openHandler(e: Event){
		this.setStatus("query")

		await tApi.Users.getAccounts({})
		.then(r => this.setAccount(r.accounts[0]))
		.catch(r => {
			toast(`Ошибка: ${r}`)
			this.setStatus("offline")
		})
		
		if(this.account.id && this.account.status === AccountStatus.OPEN){
			Promise.all( 
				this.info.instruments.shares = await tApi.Instruments.shares({
					instrumentStatus: InstrumentStatus.BASE
				}).then(r => r.instruments)
				// this.info.instruments.futures = await tApi.Instruments.futures({
				// 	instrumentStatus: InstrumentStatus.BASE
				// }).then(r => r.instruments)
			)
			.then(()=> this.setStatus("online"))
			.catch(err => {toast(`Ошибка: ${err}`)})
		}
	}

	closeHandler(e: CloseEvent){
		this.setWs(null)
		this.setAccount({} as Account)
		this.setStatus("offline")
	}

	messageHandler(e: MessageEvent<string>){
		const message:IWSMessage = JSON.parse(e.data)
		if(this.responses[message.id]){
			if(message.error){
				toast(message.error)
				this.responses[message.id].reject(message.error)
			}
			else this.responses[message.id].resolve(message.data.payload)
			delete this.responses[message.id]
		} else console.log('unknown message from ws: ',message)
	}

	async likeFetch<REQ,RES>(data:IWSMessageData<REQ>): Promise<RES>{
		return new Promise<RES>((resolve,reject) => {
			if(!this.ws) {
				toast("Нет соединения с сервером.")
				// throw new Error("WS is closed")
				reject("WS is closed")
			}
			const request:IWSMessage = {
				id: this.getMessageId,
				data
			}
			const timeout = setTimeout(() => reject("Timeout exceeded"),wsTimeot)
			const response = {
				resolve:(data:RES) => {
					globalThis.clearTimeout(timeout)
					resolve(data)
				},
				reject:(data:any) => {
					globalThis.clearTimeout(timeout)
					reject(data)
				}
			}
			this.responses[request.id]=response
			this.ws!.send(JSON.stringify(request))
		})
	}

	sendMessage<REQ>(data:IWSMessageData<REQ>):void{
		this.ws!.send(JSON.stringify({data}))
	}

	async connect(token:string):Promise<any>{
		if(!token) throw new Error("Токен пуст")

		this.setStatus("connection")
		try {
			const port = await fetchJSON<{token:string}, {port:string}>(`${server}tinkoff/connect`, "POST",{token})
			if(!port) throw new Error(`the server did not provide a port`)
			const ws = new WebSocket(`ws://localhost:${port.port}`)
			if(!ws) throw new Error(`the server did not provide a socket`)
			this.setWs(ws)
		} catch (err:any) {
			this.setStatus("offline")
			throw new Error('connect error: ',err)
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