import * as InstrumentsService from '../types/tsproto/instruments'
import * as MarketDataService  from '../types/tsproto/marketdata'
import * as OperationsService  from '../types/tsproto/operations'
import * as OrdersService  from '../types/tsproto/orders'
import * as SandboxService from '../types/tsproto/sandbox'
import * as StopOrdersService from '../types/tsproto/stoporders'
import * as UsersService from '../types/tsproto/users'

import { IInstrumentsServiceClient } from '../types/tsproto/instruments.client'
import { IMarketDataServiceClient, IMarketDataStreamServiceClient } from '../types/tsproto/marketdata.client.js'
import { IOperationsServiceClient, IOperationsStreamServiceClient } from '../types/tsproto/operations.client.js'
import { IOrdersServiceClient, IOrdersStreamServiceClient } from '../types/tsproto/orders.client.js'
import { ISandboxServiceClient } from '../types/tsproto/sandbox.client.js'
import { IStopOrdersServiceClient } from '../types/tsproto/stoporders.client.js'
import { IUsersServiceClient } from "../types/tsproto/users.client.js"

interface TApi {
	instruments: keyof IInstrumentsServiceClient
	marketdata: keyof IMarketDataServiceClient
	marketDataStream: keyof IMarketDataStreamServiceClient
	operations: keyof IOperationsServiceClient
	operationsStream: keyof IOperationsStreamServiceClient
	orders: keyof IOrdersServiceClient
	ordersStream: keyof IOrdersStreamServiceClient
	sandbox: keyof ISandboxServiceClient
	stopOrders: keyof IStopOrdersServiceClient
	users: keyof IUsersServiceClient
}

//OK
export type TService = keyof TApi
export type ITApi = {
	[service in TService]:{
		[m in TApi[service]]:(any)=>any
	}
}



// export type TServiceName = keyof ITApi
// // export type TServiceData = ITApi[keyof TServiceName]
// // export type TServiceData<Service extends keyof ITApi> = ITApi[Service][keyof ITApi[Service]]
// export type TServiceData<Service extends keyof ITApi> = ITApi[Service][keyof ITApi[Service]]


// export type TServicesInApi = {
// 	[service in TService]: keyof ITApi[service]
// }

// export type TAllKeys = TServicesInApi[keyof TServicesInApi]

// export declare class TApi {
// 	constructor(token:string)
	
// 	instruments: InstrumentsServiceClient
// 	marketData: MarketDataServiceClient
// 	marketDataStream: MarketDataStreamServiceClient
// 	operations: OperationsServiceClient
// 	operationsStream: OperationsStreamServiceClient
// 	orders: OrdersServiceClient
// 	ordersStream: OrdersStreamServiceClient
// 	sandbox: SandboxServiceClient
// 	stopOrders: StopOrdersServiceClient
// 	users: UsersServiceClient
// }

// export type TService = keyof TApi
// export type TServiceMethod<Service extends keyof TApi> = TApi[Service][keyof TApi[Service]]