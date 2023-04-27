import { TService }  from "../tApi/TApi"

// export interface IWSRequest<T> {
// 	service: TService
// 	proc: string
// 	data: T
// 	fromData?:T[keyof T]
// }
// export interface IWSMessage {
// 	requestId: number
// 	request: IWSRequest
// }

export interface IWSMessageData<Payload> {
	service: TService
	method: string
	payload: Payload
}
export interface IWSMessage {
	id: number
	data: IWSMessageData
}