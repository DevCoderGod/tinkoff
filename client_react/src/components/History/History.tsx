import React, { useEffect, useState } from 'react'
import S from './History.module.scss'
import { Store } from '../../Store'
import { Table } from '../Table/Table'
import { observer } from "mobx-react-lite"
import { Timestamp } from '../../tsproto/google/protobuf/timestamp'
import { Operation } from '../../../../shared/tsproto/operations'
import { tApi } from '../../tApi'
import { InstrumentIdType, Share, ShareResponse } from '../../tsproto/instruments'
import { OperationsRequest, OperationsResponse } from "@tinkoff/operations"

interface LocOps{
	id: string
	ticker:string
	quantity:string
	price:number
	type: string
	date: string
}

export const History = observer(function History() {


	const [history, setHistory] = useState<Operation[]>([])
	const [historyLocal, setHistoryLocal] = useState<LocOps[]>([])


	useEffect(()=>{

		async function getData():Promise<LocOps[]>{
			const m = Promise.all( history.map(async (o: Operation) => {
				const operation = {
					id: o.id,
					ticker: await getTicker(o.figi),
					quantity: o.quantity,
					price: Number.parseInt(`${o.price?.units},${o.price?.nano}`),
					type: o.type,
					date: o.date? new Date(Number.parseInt(o.date.seconds)).toLocaleString() : "no Date"
				}
				return operation
			}))
			return m
		}

		async function getHistoryLocal(){
			const ops = await getData()
			setHistoryLocal(ops)
		}
		getHistoryLocal()
	},[history])

	async function getTicker(i:string):Promise<string>{

		let ticker:string = await tApi.Instruments.shareBy({
			idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
			classCode:"",
			id: i
		}).then(shareData => shareData.instrument?.ticker ?? "no Ticker")
		return ticker
	}



	// let data = await getData()

	async function onClick() {
		const r =await tApi.Operations.getOperations(
			{
				accountId:Store.tAccount.account.id,
				from: Timestamp.fromDate(new Date("2023-04-23Z")),
				to: Timestamp.fromDate(new Date("2023-04-25Z")),
				state: 0,
				figi:""
			}
		)
		setHistory(r.operations)
	}

	return (
		<div className={S.container}>
			<button onClick={onClick}>
				история
			</button>
			{historyLocal.length>0 && <Table
				ops={historyLocal}
			/>}
		</div>
	)
})