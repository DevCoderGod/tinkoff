import React, { useEffect, useRef, useState } from 'react'
import S from './History.module.scss'
import { Store } from '../../Store'
import { Table } from '../../components/Table/Table'
import { observer } from "mobx-react-lite"
import { Timestamp } from '../../tsproto/google/protobuf/timestamp'
import { Operation } from '../../../../shared/tsproto/operations'
import { tApi } from '../../tApi'
import { DatePickerRangeStart, DatePickerRangeEnd } from "../../components/common/DatePickerRange/DatePickerRange"
import { OperationState } from '../../tsproto/operations'
import { T } from './mock'


interface ViewOps{
	id: string
	ticker: string
	quantity: string
	price: string
	type: string
	summ: string
	date: string
	state: string
}

export const History = observer(function History() {

	const execRef = useRef<HTMLInputElement>(null)
	const cancelRef = useRef<HTMLInputElement>(null)

	const [history, setHistory] = useState<Operation[]>([])
	const [historyView, setHistoryView] = useState<ViewOps[]>([])
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())
	const [filter, setFilter] = useState(true)
	const runFilter = () => setFilter(!filter)

	useEffect(()=>{
		setHistoryView(history
			.filter(filterOps)
			.map(viewOps)
			.sort((a,b) => sortOps(a,b))
		)
	},[history, filter])
	
	useEffect(()=>{ 
		setHistoryView(T
			.sort((a,b) => sortOps(a,b))
		)
	},[])

	function filterOps(op:Operation):Operation | undefined {
		if(execRef.current?.checked && op.state.toString() === execRef.current?.value) return op
		if(cancelRef.current?.checked && op.state.toString() === cancelRef.current?.value) return op
		return
	}

	function viewOps(o: Operation):ViewOps{
		return {
			id: o.id,
			ticker: Store.tAccount.info.viewTicker(o.figi, o.instrumentType),
			quantity: o.quantity !== "0" ? o.quantity : "",
			price: Store.tAccount.info.viewMoneyValue(o.price, o.figi, o.instrumentType),
			type: o.type,
			summ: Store.tAccount.info.viewMoneyValue(o.payment, o.figi, o.instrumentType),
			date: o.date? new Date(Number.parseInt(o.date.seconds)*1000).toLocaleString() : "no Date",
			state: OperationState[o.state]
		}
	}

	function sortOps(a:ViewOps,b:ViewOps):number{
		if(a.ticker > b.ticker) return 1
		if(a.ticker < b.ticker) return -1
		return 0
	}

	async function getHistory() {
		setHistory(
			await tApi.Operations.getOperations({
				accountId:Store.tAccount.account.id,
				from: Timestamp.fromDate(getDateOnly(startDate)),
				to: Timestamp.fromDate(getDateOnly(endDate)),
				state: 0,
				figi:""
			})
			.then(r => r.operations)
		)
	}

	function getDateOnly(date:Date){ //TODO cut off time
		return new Date(date.getFullYear(), date.getMonth(), date.getDate())
	}

	return (
		<div className={S.container}>
			<div className={S.header}>
				<div className={S.datepickers}>
					<DatePickerRangeStart
						startDate={startDate}
						endDate={endDate}
						onChange={setStartDate}
					/>
					<DatePickerRangeEnd
						startDate={startDate}
						endDate={endDate}
						onChange={setEndDate}
					/>
				</div>
				<button className={S.button} onClick={getHistory}>История</button>
				<label>
					Исполненные
					<input
						type='checkbox'
						ref={execRef}
						defaultChecked={true}
						value={OperationState.EXECUTED}
						onChange={runFilter}
					/>
				</label>
				<label>
					Отменённые
					<input
						type='checkbox'
						ref={cancelRef}
						value={OperationState.CANCELED}
						onChange={runFilter}
					/>
				</label>
			</div>
			<div className={S.body}>
				{historyView.length>0
					?	<Table
							ops={historyView}
						/>
					:	<div>Нет операций</div>
				}
			</div>
		</div>
	)
})