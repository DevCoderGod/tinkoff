import { makeObservable, observable, action } from 'mobx'
import { tAccount } from './tAccount.store'
// import { Timestamp } from "@tinkoff/google/protobuf/timestamp"

import { tApi } from '../tApi'
import { Timestamp } from '../tsproto/google/protobuf/timestamp'
import { Store } from '../Store'
import { OperationsRequest, OperationsResponse, Operation } from "@tinkoff/operations"


export class CHistoryStore{
	operations:Operation[]

	constructor() {
        makeObservable(this, {
			operations:observable,
			getOperations:action,
			setOperations:action,
        })
		this.operations = []
	}

	getOperations = () => {
		tApi.Operations.getOperations(
			{
				accountId:tAccount.account.id,
				from: Timestamp.fromDate(new Date("2023-04-23Z")),
				to: Timestamp.fromDate(new Date("2023-04-25Z")),
				state: 0,
				figi:""
			}
		)
	}

	setOperations = (o:Operation[]) => {
		this.operations = o
	}

}

export const history = new CHistoryStore()