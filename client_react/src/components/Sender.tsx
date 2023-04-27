import { Store } from "../Store"
import { useRef } from "react"
import { Button } from "./LeftPanel/common/Button/Button"
import { Input } from "./LeftPanel/common/Input/Input"
// import { IWSMessage, IWSMessageData } from '@api'
import { GetUserTariffRequest, GetUserTariffResponse } from '@tinkoff/users'

// import { UsersService } from "../tApi/tsproto/users"
// import { OperationsRequest, OperationState } from "../../../shared/tsproto/operations"
// import { Timestamp } from "../../../shared/tsproto/google/protobuf/timestamp"
// import { TApi, TServiceName, TServiceData } from "@tApi"
// import { InstrumentsRequest, InstrumentStatus } from "../tApi/instruments"
// import { Timestamp } from "../tApi/google/protobuf/timestamp"
// TODO https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory

// 2187116252  2023-04-19T04:48:11.094Z

export const Sender = () => {

	// console.log('m.data === ',m.data)

	const refMess = useRef<HTMLInputElement>(null)

	async function sendMessage(){
		// const d = new Date(Date.now())
		// console.log('d === ',d)
		// console.log('d.toISOString() === ',d.toISOString())
		Store.tAccount.likeFetch<GetUserTariffRequest, GetUserTariffResponse>({
			service: "users",
			method:"getUserTariff",
			payload:{}
		})
	}

	return(
		<div>
			<Input
				id="mess"
				label="mess"
				type="text"
				refInput={refMess}
			/>
			<Button
				onClick={sendMessage}
				inscription={"sendMessage"}
			/>
		</div>
	)
}