import { Store } from "../Store"
import { OperationsRequest, OperationsResponse } from "@tinkoff/operations"

// import { IOperationsServiceClient } from "@tinkoff/operations.client"
// type TOperationsServices = keyof IOperationsServiceClient

export const Operations = {//:{[key in TOperationsServices]:(data:any)=>any}

	getOperations: async (payload:OperationsRequest):Promise<OperationsResponse> => {
		return await Store.tAccount.likeFetch<OperationsRequest, OperationsResponse>({
			service: "operations",
			method: "getOperations",
			payload
		})
	},
}

