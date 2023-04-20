import { TService }  from "../tApi/TApi"

export interface IMessage {
	service: TService
	proc: string
	data: object
}