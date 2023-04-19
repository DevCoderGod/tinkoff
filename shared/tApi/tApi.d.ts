import * as InstrumentsService from '../types/tsproto/instruments'
import * as MarketData from '../types/tsproto/marketdata'
import * as Operations from '../types/tsproto/operations'
import * as Orders from '../types/tsproto/orders'
import * as Sandbox from '../types/tsproto/sandbox'
import * as Stoporders from '../types/tsproto/stoporders'
import * as Users from '../types/tsproto/users'
import { InstrumentsServiceClient } from '../types/tsproto/instruments.client'
import { MarketDataServiceClient, MarketDataStreamServiceClient } from '../types/tsproto/marketdata.client.js'
import { OperationsServiceClient, OperationsStreamServiceClient } from '../types/tsproto/operations.client.js'
import { OrdersServiceClient, OrdersStreamServiceClient } from '../types/tsproto/orders.client.js'
import { SandboxServiceClient } from '../types/tsproto/sandbox.client.js'
import { StopOrdersServiceClient } from '../types/tsproto/stoporders.client.js'
import { UsersServiceClient } from "../types/tsproto/users.client.js"

export interface ITApi {
	instruments: typeof InstrumentsService
	marketdata: typeof MarketData
	operations: typeof Operations
	orders: typeof Orders
	sandbox: typeof Sandbox
	stoporders: typeof Stoporders
	users: typeof Users
}

export type TServiceName = keyof ITApi
export type TServiceData<Service extends keyof ITApi> = ITApi[Service][keyof ITApi[Service]]

export declare class TApi {
	constructor(token:string)
	
	instruments: InstrumentsServiceClient
	marketData: MarketDataServiceClient
	marketDataStream: MarketDataStreamServiceClient
	operations: OperationsServiceClient
	operationsStream: OperationsStreamServiceClient
	orders: OrdersServiceClient
	ordersStream: OrdersStreamServiceClient
	sandbox: SandboxServiceClient
	stopOrders: StopOrdersServiceClient
	users: UsersServiceClient
}

export type TService = keyof TApi
export type TServiceMethod<Service extends keyof TApi> = TApi[Service][keyof TApi[Service]]