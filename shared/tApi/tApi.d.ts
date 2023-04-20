import * as InstrumentsService from '../types/tsproto/instruments'
import * as MarketDataService  from '../types/tsproto/marketdata'
import * as OperationsService  from '../types/tsproto/operations'
import * as OrdersService  from '../types/tsproto/orders'
import * as SandboxService from '../types/tsproto/sandbox'
import * as StopOrdersService from '../types/tsproto/stoporders'
import * as UsersService from '../types/tsproto/users'

import { InstrumentsServiceClient } from '../types/tsproto/instruments.client'
import { MarketDataServiceClient, MarketDataStreamServiceClient } from '../types/tsproto/marketdata.client.js'
import { OperationsServiceClient, OperationsStreamServiceClient } from '../types/tsproto/operations.client.js'
import { OrdersServiceClient, OrdersStreamServiceClient } from '../types/tsproto/orders.client.js'
import { SandboxServiceClient } from '../types/tsproto/sandbox.client.js'
import { StopOrdersServiceClient } from '../types/tsproto/stoporders.client.js'
import { UsersServiceClient } from "../types/tsproto/users.client.js"

export interface ITApi {
	instruments: typeof InstrumentsService
	marketdata: typeof MarketDataService
	operations: typeof OperationsService
	orders: typeof OrdersService
	sandbox: typeof SandboxService
	stoporders: typeof StopOrdersService
	users: typeof UsersService
}

export type TService = keyof ITApi

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