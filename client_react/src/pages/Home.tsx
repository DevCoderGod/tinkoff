import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import { Store } from "src/Store"

export const Home = observer(() => {

    const ref = useRef<HTMLInputElement>(null)
	const user:string = JSON.stringify(Store.user.getUser,null,2)

	const login = async() => await Store.user.login(ref.current?.value??"")

	return(
		<div>
			<h1>Home</h1>
			<div>
				<input
					ref={ref}
					type="text"
				/>
			</div>

			<div>
				<button onClick={login}>Вход</button>
			</div>
			<div>
				<Link to="/portfolio">Портфель</Link>
			</div>
			<div>
				<Link to="/auth">auth</Link>
			</div>
			<div>
				<Link to="/terminal">terminal</Link>
			</div>
			<div>
				{Store.user.user?.email}
			</div>

			<div>
				{user}
			</div>
		</div>
	)
})