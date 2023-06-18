import { useRef } from "react"
import S from './LeftPanel.module.scss'
import { observer } from "mobx-react-lite"
import { Store } from "../../Store"
import { Button } from "./common/Button/Button"
import { Title } from "./common/Title/Title"
import { Input } from "./common/Input/Input"
import { toast } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css'

export const Connector = observer(function Connector(){
	const refTok = useRef<HTMLInputElement>(null)

	async function connect(){
		try {
			await Store.tAccount.connect(refTok.current?.value ?? "")
		} catch (err:any) {
			toast(`Ошибка: ${err.message}`)
		}
	}

	function getInscription(){
		switch (Store.tAccount.status) {
			case "connection": return "Соединение..."
			case "online": return "Разъеденить"
			case "offline": return "Соединить"
			case "query": return "Запрос данных аккаунта"
		}
	}

	async function disconnect(){
		Store.tAccount.disconnect()
	}

	return(
		<div className={S.container}>
			<Title>Соединение</Title>
			<Input
				id="token"
				label="Токен"
				type="text"
				refInput={refTok}
			/>
			<Button
				onClick = {Store.tAccount.ws ? disconnect : connect}
				inscription={getInscription()}
			/>
		</div>
	)
})