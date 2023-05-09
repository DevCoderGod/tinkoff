import { Store } from "../Store"
import { FuturesResponse, InstrumentRequest, InstrumentsRequest, ShareResponse, SharesResponse } from "@tinkoff/instruments"

// import { OperationsRequest } from "@tinkoff/operations"
// import { Timestamp } from "@tinkoff/google/protobuf/timestamp"
// import { IInstrumentsServiceClient } from "@tinkoff/instruments.client"
// type TInstrumentsService = keyof IInstrumentsServiceClient

export const Instruments = {//:{[key in TInstrumentsService]:(data:any,cb:(data:any)=>void)=>void}

	shareBy: async (payload: InstrumentRequest):Promise<ShareResponse> =>  {
		return await Store.tAccount.likeFetch<InstrumentRequest, ShareResponse>({
			service: "instruments",
			method:"shareBy",
			payload
		})
	},

	shares: async (payload: InstrumentsRequest):Promise<SharesResponse> =>  {
		return await Store.tAccount.likeFetch<InstrumentsRequest, SharesResponse>({
			service: "instruments",
			method:"shares",
			payload
		})
	},

	futures: async (payload: InstrumentsRequest):Promise<FuturesResponse> =>  {
		return await Store.tAccount.likeFetch<InstrumentsRequest, FuturesResponse>({
			service: "instruments",
			method:"futures",
			payload
		})
	}
}