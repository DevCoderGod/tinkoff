import { TServiceName, TService, TServiceMethod, TServiceData }  from "../tApi/tApi"

export interface IMessage {
	service: TServiceName
	proc: TServiceMethod<TService>
	data: TServiceData<TServiceName>
}