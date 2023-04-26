import { Store } from "../Store"
import { IOperationsServiceClient } from "@tinkoff/operations.client"
import { OperationsRequest, OperationsResponse } from "@tinkoff/operations"
import { Timestamp } from "@tinkoff/google/protobuf/timestamp"

// type TOperationsServices = keyof IOperationsServiceClient
type TOperationsServices = keyof IOperationsServiceClient

export const Operations:{[key in TOperationsServices]:(data:any)=>any} = {
	getOperations: async (data:OperationsRequest):Promise<OperationsResponse> => {
		return await Store.tAccount.sendMessage(
			{
				requestId: Store.tAccount.getRequestId,
				service: "operations",
				proc: "getOperations",
				data: data
			}
		) as Promise<OperationsResponse>
	},

	getPortfolio: (data: any,) => {throw new Error(`Function not implemented.`)},
    getPositions: (data: any,) => {throw new Error(`Function not implemented.`)},
    getWithdrawLimits: (data: any,) => {throw new Error(`Function not implemented.`)},
    getBrokerReport: (data: any,) => {throw new Error(`Function not implemented.`)},
    getDividendsForeignIssuer: (data: any,) => {throw new Error(`Function not implemented.`)},
    getOperationsByCursor: (data: any,) => {throw new Error(`Function not implemented.`)},
}

