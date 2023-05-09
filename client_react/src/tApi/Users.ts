import { Store } from "../Store"
import { GetAccountsRequest, GetAccountsResponse } from '@tinkoff/users'

// import { IOperationsServiceClient } from "@tinkoff/operations.client"
// type TOperationsServices = keyof IOperationsServiceClient

export const Users = {//:{[key in TOperationsServices]:(data:any)=>any}

	getAccounts: async (payload:GetAccountsRequest):Promise<GetAccountsResponse> => {
		return await Store.tAccount.likeFetch<GetAccountsRequest, GetAccountsResponse>({
			service: "users",
			method: "getAccounts",
			payload
		})
	},
}