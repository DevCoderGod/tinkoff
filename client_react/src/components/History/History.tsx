import React, { useState } from 'react'
import S from './History.module.scss'
import { Sender } from '../../components/Sender'
import { Store } from '../../Store'
import { Table } from '../Table/Table';
import { observer } from "mobx-react-lite"

export const History = observer(function History() {

	// const [history, setHistory] = useState([])

	return (
		<div className={S.container}>
			{Store.app.isAuth && <Sender/>}
			<button
				onClick={() => {
					Store.history.getOperations()
				}}
			>
				история
			</button>
			{Store.history.operations.length>0 && <Table
				ops={Store.history.operations}
			/>}
		</div>
	);
})