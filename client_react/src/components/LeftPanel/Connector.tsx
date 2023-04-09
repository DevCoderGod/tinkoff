import { useRef } from "react"
import S from './LeftPanel.module.css'
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
				inscription={Store.tAccount.ws ? "Разъеденить" : "Соединить"}
			/>
		</div>
	)
})