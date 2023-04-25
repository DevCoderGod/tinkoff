import { Store } from "../Store"
import { IOperationsServiceClient } from "@tinkoff/operations.client"
import { OperationsRequest } from "@tinkoff/operations"
import { Timestamp } from "@tinkoff/google/protobuf/timestamp"

// type TOperationsServices = keyof IOperationsServiceClient
// type TOperationsServices = keyof IOperationsServiceClient

export const Instruments = {
	getOperations: (data:OperationsRequest, cb:(data:any)=>void) => {
		Store.tAccount.sendMessage(
			{
				requestId: Store.tAccount.getRequestId,
				service: "operations",
				proc: "getOperations",
				data: data
			},cb
		)
	}
}

