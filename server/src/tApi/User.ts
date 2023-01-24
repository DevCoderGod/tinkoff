import grpc from "@grpc/grpc-js"
import protoLoader from "@grpc/proto-loader"

const PROTO_PATH = "../shared/investAPI-main/src/docs/contracts/users.proto"
const packageDefinition = protoLoader.loadSync(
	PROTO_PATH,
	{
		keepCase: true,
		longs: Number,
		enums: String,
		defaults: true,
		oneofs: true
	}
)

// @ts-ignore
export const usersService = grpc.loadPackageDefinition(packageDefinition).tinkoff.public.invest.api.contract.v1.UsersService