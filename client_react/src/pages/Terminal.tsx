import { Link } from "react-router-dom"
import { ButtonLogout } from "src/components/ButtonLogout"
import { Header } from "src/components/Header"

export const Terminal = () => {
	return(
		<>
			<Header title="Terminal"/>
			<div>
				<Link to="/">Home</Link>
			</div>
			<div>
				<Link to="/portfolio">Портфель</Link>
			</div>
			<ButtonLogout/>
		</>
	)
}