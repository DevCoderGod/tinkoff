import { TServiceName, TService, TServiceMethod, TServiceData }  from "../tApi/tApi"

export interface IMessage {
	service: TService
	proc: TServiceMethod<TService>
	data: TServiceData<TServiceName>
}