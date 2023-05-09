import { useRef } from "react"
import S from './LeftPanel.module.scss'
import { observer } from "mobx-react-lite"
import { Store } from "../../Store"
import { Button } from "./common/Button/Button"
import { Title } from "./common/Title/Title"
import { Input } from "./common/Input/Input"

export const Connector = observer(function Connector(){
	const refTok = useRef<HTMLInputElement>(null)

	async function connect(){
		Store.tAccount.connect(refTok.current?.value ?? "")
	}

	function getInscription(){
		switch (Store.tAccount.status) {
			case "connection": return "соединение..."
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