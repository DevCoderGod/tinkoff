import { useRef } from 'react'
import S from './LeftPanel.module.scss'
import { observer } from 'mobx-react-lite'
import { Store } from "src/Store"
import { Button } from "./common/Button/Button"
import { Title } from './common/Title/Title'
import { Input } from './common/Input/Input'

export const Auth = observer(function Auth(){
	const refNam = useRef<HTMLInputElement>(null)
    const refPas = useRef<HTMLInputElement>(null)
	const userAgent = window.navigator.userAgent.toString()

	async function login(e:React.MouseEvent) {
		e.preventDefault()
		await Store.user.login({
			name: refNam.current?.value!,
		    pass: refPas.current?.value!,
		    info:{
		        deviceIDs: [
		            userAgent
		        ]
		    }
		})
	}

	async function logout(){
		await Store.tAccount.disconnect()
		await Store.user.logout()
	}

	return(
		<div className={S.container}>
			<Title>Авторизация</Title>
			{Store.app.isAuth
				? <div>Пользователь: {localStorage.getItem("user")}</div>
				: <form action="">
					<Input
						id="name"
						label="Имя"
						type="text"
						refInput={refNam}
						disabled = {Store.app.isAuth}
					/>
					<Input
						id="password"
						label="Пароль"
						type="password"
						refInput={refPas}
						disabled = {Store.app.isAuth}
					/>
				</form>
			}
			<Button
				onClick={Store.app.isAuth? logout : login}
				inscription={Store.app.isAuth? "Выход" : "Вход"}
			/>
		</div>
	)
})