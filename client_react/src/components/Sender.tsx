import { Store } from "../Store"
import { useRef } from "react"
import { Button } from "./Button"

export const Sender = () => {
	const refMess = useRef<HTMLInputElement>(null)

	async function sendMessage(){
		Store.tAccount.sendMessage(refMess.current?.value ?? "")
	}

	return(
		<div>
			<label htmlFor="mess">Message:</label>
			<input
				ref={refMess}
				id="mess"
				type="text"
			/>
			<Button onClick={sendMessage} children= "Send"/>
		</div>
	)
}