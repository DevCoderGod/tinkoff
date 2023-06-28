import { Store } from "../Store"
import { BondsResponse, CurrenciesResponse, EtfsResponse, FuturesResponse, InstrumentRequest, InstrumentsRequest, ShareResponse, SharesResponse } from "@tinkoff/instruments"

// import { OperationsRequest } from "@tinkoff/operations"
// import { Timestamp } from "@tinkoff/google/protobuf/timestamp"
// import { IInstrumentsServiceClient } from "@tinkoff/instruments.client"
// type TInstrumentsService = keyof IInstrumentsServiceClient

export const Instruments = {//:{[key in TInstrumentsService]:(data:any)=>void}

	shareBy: async (payload: InstrumentRequest):Promise<ShareResponse> =>  {
		return await Store.tAccount.likeFetch<InstrumentRequest, ShareResponse>({
			service: "instruments",
			method:"shareBy",
			payload
		})
	},

	bonds: async (payload: InstrumentsRequest):Promise<BondsResponse> =>  {
		return await Store.tAccount.likeFetch<InstrumentsRequest, BondsResponse>({
			service: "instruments",
			method:"bonds",
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

	currencies: async (payload: InstrumentsRequest):Promise<CurrenciesResponse> =>  {
		return await Store.tAccount.likeFetch<InstrumentsRequest, CurrenciesResponse>({
			service: "instruments",
			method:"currencies",
			payload
		})
	},

	etfs: async (payload: InstrumentsRequest):Promise<EtfsResponse> =>  {
		return await Store.tAccount.likeFetch<InstrumentsRequest, EtfsResponse>({
			service: "instruments",
			method:"futures",
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