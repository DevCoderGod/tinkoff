import { Store } from "../Store"
import { InstrumentRequest, ShareResponse } from "@tinkoff/instruments"

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
	}
}