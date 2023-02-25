import { readFileSync } from 'fs'
import grpc from "@grpc/grpc-js"
import { GrpcTransport } from "@protobuf-ts/grpc-transport"
import { InstrumentsServiceClient } from './grpc/instruments.client.js'
import { MarketDataServiceClient, MarketDataStreamServiceClient } from './grpc/marketdata.client.js'
import { OperationsServiceClient, OperationsStreamServiceClient } from './grpc/operations.client.js'
import { OrdersServiceClient, OrdersStreamServiceClient } from './grpc/orders.client.js'
import { SandboxServiceClient } from './grpc/sandbox.client.js'
import { StopOrdersServiceClient } from './grpc/stoporders.client.js'
import { UsersServiceClient } from "./grpc/users.client.js"

const token = readFileSync('token.txt', 'utf8')
const server = 'invest-public-api.tinkoff.ru:443'

const metadata = new grpc.Metadata()
metadata.add('Authorization', 'Bearer ' + token)

const metadataCreds = grpc.credentials.createFromMetadataGenerator(function(args, callback) {
	callback(null, metadata)
})

const ssl_creds = grpc.credentials.combineChannelCredentials(grpc.credentials.createSsl(), metadataCreds)

const transport = new GrpcTransport({
	host: server,
	channelCredentials: ssl_creds
})

export const tApi = {
	instrument: new InstrumentsServiceClient(transport),
	marketData: new MarketDataServiceClient(transport),
	marketDataStream: new MarketDataStreamServiceClient(transport),
	operations: new OperationsServiceClient(transport),
	operationsStream: new OperationsStreamServiceClient(transport),
	orders: new OrdersServiceClient(transport),
	ordersStream: new OrdersStreamServiceClient(transport),
	sandbox: new SandboxServiceClient(transport),
	stopOrders: new StopOrdersServiceClient(transport),
	user: new UsersServiceClient(transport),
}