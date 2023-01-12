import { Link } from "react-router-dom"
import { Store } from "src/Store"

export const Portfolio = () => {

	const logout = async() => await Store.user.logout()

	return(
		<>
			<div>
				<h1>Portfolio</h1>
			</div>
			<div>
				<Link to="/">Home</Link>
			</div>
			<div>
				<button onClick={logout}>Выход</button>
			</div>

		</>
	)
}