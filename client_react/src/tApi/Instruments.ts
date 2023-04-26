import { Store } from "../Store"
import { IInstrumentsServiceClient } from "@tinkoff/instruments.client"
import { OperationsRequest } from "@tinkoff/operations"
import { Timestamp } from "@tinkoff/google/protobuf/timestamp"
import { InstrumentRequest, ShareResponse } from "@tinkoff/instruments"

type TInstrumentsService = keyof IInstrumentsServiceClient

// export const Instruments:{[key in TInstrumentsService]:(data:any,cb:(data:any)=>void)=>void} = {
// 	shareBy: (data: InstrumentRequest, cb: (data: ShareResponse) => void) => {
// 		Store.tAccount.sendMessage(
// 			{
// 				requestId: Store.tAccount.getRequestId,
// 				service: "instruments",
// 				proc: "shareBy",
// 				data: data
// 			}, cb
// 		)
// 	}
// }

export const Instruments = {//:{[key in TInstrumentsService]:(data:any,cb:(data:any)=>void)=>void}
	shareBy: async (data: InstrumentRequest):Promise<ShareResponse> =>  {
		const requestId = Store.tAccount.getRequestId
		let result = await Store.tAccount.sendMessage({
			requestId,
			service: "instruments",
			proc: "shareBy",
			data: data
		}) as ShareResponse
		return result
	}
}