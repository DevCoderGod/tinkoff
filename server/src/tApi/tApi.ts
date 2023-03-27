import grpc from "@grpc/grpc-js"
import { GrpcTransport } from "@protobuf-ts/grpc-transport"
import { tServer } from '../globalVars.js'

// TODO reference to shared
import { InstrumentsServiceClient } from './grpc/instruments.client.js'
import { MarketDataServiceClient, MarketDataStreamServiceClient } from './grpc/marketdata.client.js'
import { OperationsServiceClient, OperationsStreamServiceClient } from './grpc/operations.client.js'
import { OrdersServiceClient, OrdersStreamServiceClient } from './grpc/orders.client.js'
import { SandboxServiceClient } from './grpc/sandbox.client.js'
import { StopOrdersServiceClient } from './grpc/stoporders.client.js'
import { UsersServiceClient } from "./grpc/users.client.js"


function getTransport(token:string): GrpcTransport{
	const metadata = new grpc.Metadata()
	metadata.add('Authorization', 'Bearer ' + token)
	const metadataCreds = grpc.credentials.createFromMetadataGenerator(function(args, callback) {
		callback(null, metadata)
	})

	return new GrpcTransport({
		host: tServer,
		channelCredentials: grpc.credentials.combineChannelCredentials(grpc.credentials.createSsl(), metadataCreds)
	})
}
export class CTApi {

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

	constructor(token:string){
		const transport = getTransport(token)

		this.instruments = new InstrumentsServiceClient(transport)
		this.marketData = new MarketDataServiceClient(transport)
		this.marketDataStream = new MarketDataStreamServiceClient(transport)
		this.operations = new OperationsServiceClient(transport)
		this.operationsStream = new OperationsStreamServiceClient(transport)
		this.orders = new OrdersServiceClient(transport)
		this.ordersStream = new OrdersStreamServiceClient(transport)
		this.sandbox = new SandboxServiceClient(transport)
		this.stopOrders = new StopOrdersServiceClient(transport)
		this.users = new UsersServiceClient(transport)
	}
}

// local token
import { readFileSync } from 'fs'

export const getApi = () => {
	const transport = getTransport(readFileSync('token.txt', 'utf8'))
	return {
		instruments: new InstrumentsServiceClient(transport),
		marketData: new MarketDataServiceClient(transport),
		marketDataStream: new MarketDataStreamServiceClient(transport),
		operations: new OperationsServiceClient(transport),
		operationsStream: new OperationsStreamServiceClient(transport),
		orders: new OrdersServiceClient(transport),
		ordersStream: new OrdersStreamServiceClient(transport),
		sandbox: new SandboxServiceClient(transport),
		stopOrders: new StopOrdersServiceClient(transport),
		users: new UsersServiceClient(transport),
	}	
}