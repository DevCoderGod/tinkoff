import { TService }  from "../tApi/TApi"

export interface IMessage {
	requestId: number
	service: TService
	proc: string
	data: object
}