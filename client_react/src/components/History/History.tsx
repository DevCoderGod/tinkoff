import React, { useEffect, useState } from 'react'
import S from './History.module.scss'
import { Store } from '../../Store'
import { Table } from '../Table/Table'
import { observer } from "mobx-react-lite"
import { Timestamp } from '../../tsproto/google/protobuf/timestamp'
import { Operation } from '../../../../shared/tsproto/operations'
import { tApi } from '../../tApi'
import { InstrumentIdType } from '../../tsproto/instruments'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
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
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())

	useEffect(()=>{

		async function getData():Promise<LocOps[]>{
			const m = Promise.all( history.map(async (o: Operation) => {
				const operation = {
					id: o.id,
					// ticker: await getTicker(o.figi),
					ticker: await getTickerFromStore(o.figi),
					quantity: o.quantity,
					price: Number.parseFloat(`${o.price?.units}.${o.price?.nano}`),
					type: o.type,
					date: o.date? new Date(Number.parseInt(o.date.seconds)*1000).toLocaleString() : "no Date"
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

	async function getTickerFromStore(i:string):Promise<string>{
		return Store.tAccount.info.instruments.shares.find(share=>share.figi === i)?.ticker ?? "no Ticker"
	}

	// async function getTicker(i:string):Promise<string>{

	// 	let ticker:string = await tApi.Instruments.shareBy({
	// 		idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
	// 		classCode:"",
	// 		id: i
	// 	}).then(shareData => shareData.instrument?.ticker ?? "no Ticker")
	// 	return ticker
	// }

	async function onClick() {
		const r =await tApi.Operations.getOperations(
			{
				accountId:Store.tAccount.account.id,
				from: Timestamp.fromDate(startDate),
				to: Timestamp.fromDate(endDate),
				state: 0,
				figi:""
			}
		)
		setHistory(r.operations)
	}

	function getDateOnly(date:Date){
		return new Date(date.getFullYear(), date.getMonth(), date.getDate())
	}

	return (
		<div className={S.container}>
			<div className={S.header}>
				<div className={S.datepickers}>
					<DatePicker selected={startDate} onChange={(date) => date && setStartDate(getDateOnly(date))} />
					<DatePicker selected={endDate} onChange={(date) => date && setEndDate(date)} />
				</div>
				<button onClick={onClick}>
					история
				</button>
			</div>
			{historyLocal.length>0 && <Table
				ops={historyLocal}
			/>}
		</div>
	)
})