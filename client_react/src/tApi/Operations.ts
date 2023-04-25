import { Store } from "../Store"
import { IOperationsServiceClient } from "@tinkoff/operations.client"
import { OperationsRequest, OperationsResponse } from "@tinkoff/operations"
import { Timestamp } from "@tinkoff/google/protobuf/timestamp"

// type TOperationsServices = keyof IOperationsServiceClient
type TOperationsServices = keyof IOperationsServiceClient

export const Operations:{[key in TOperationsServices]:(data:any,cb:(data:any)=>void)=>void} = {
	getOperations: (data:OperationsRequest, cb:(data:OperationsResponse)=>void) => {
		Store.tAccount.sendMessage(
			{
				requestId: Store.tAccount.getRequestId,
				service: "operations",
				proc: "getOperations",
				data: data
			},cb
		)
	},

	getPortfolio: (data: any, cb: (data: any) => void) => {throw new Error(`Function not implemented.`)},
    getPositions: (data: any, cb: (data: any) => void) => {throw new Error(`Function not implemented.`)},
    getWithdrawLimits: (data: any, cb: (data: any) => void) => {throw new Error(`Function not implemented.`)},
    getBrokerReport: (data: any, cb: (data: any) => void) => {throw new Error(`Function not implemented.`)},
    getDividendsForeignIssuer: (data: any, cb: (data: any) => void) => {throw new Error(`Function not implemented.`)},
    getOperationsByCursor: (data: any, cb: (data: any) => void) => {throw new Error(`Function not implemented.`)},
}

