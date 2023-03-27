import { useEffect, useRef, useState } from 'react'
import { Store } from "src/Store"

export const Auth = () => {

    const refNam = useRef<HTMLInputElement>(null)
    const refPas = useRef<HTMLInputElement>(null)
	const userAgent = window.navigator.userAgent.toString()

	const [statusLogin, setstatusLogin] = useState(true)

	useEffect(()=> {
		statusLogin && setstatusLogin(true)
	},[statusLogin])
	

	async function login(e:React.MouseEvent) {

		e.preventDefault()
		setstatusLogin(await Store.user.login({
			name: refNam.current?.value!,
		    pass: refPas.current?.value!,
		    info:{
		        deviceIDs: [
		            userAgent
		        ]
		    }
		}))
	}

	return(
		<div>
			<h1>Auth</h1>

			<form action="">
				<div>
					<label htmlFor="name">Имя</label>
					<input
						ref={refNam}
						id="name"
						type="text"
					/>
				</div>
				
				<div>
					<label htmlFor="password">Пароль</label>
					<input
						ref={refPas}
						id="password"
						type="password"
					/>
				</div>

				<div>
					<button onClick={login}>Вход</button>
				</div>
			</form>
		</div>
	)
}