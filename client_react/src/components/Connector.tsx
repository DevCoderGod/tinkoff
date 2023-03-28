import { useRef } from "react"
import { Button } from "./Button"
import { Store } from "../Store"
import { observer } from "mobx-react-lite"

export const Connector = observer(function Connector(){
	const refTok = useRef<HTMLInputElement>(null)

	async function connect(){
		Store.tAccount.connect(refTok.current?.value ?? "")
	}

	async function close(){
		Store.tAccount.close()
	}

	return(
		<div>
			<label htmlFor="token">Токен:</label>
			<input
				ref={refTok}
				id="token"
				type="text"
			/>
			<Button 
				onClick = {Store.tAccount.ws ? close : connect}
				children = {Store.tAccount.ws ? "Close" : "Connect"}
			/>
		</div>
	)
})