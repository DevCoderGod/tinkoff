import { Link } from "react-router-dom"
import { ButtonLogout } from "src/components/ButtonLogout"
import { Header } from "src/components/Header"

export const Portfolio = () => {
	return(
		<>
			<Header title="Portfolio"/>
			<div>
				<Link to="/">Home</Link>
			</div>
			<div>
				<Link to="/terminal">terminal</Link>
			</div>
			<ButtonLogout/>
		</>
	)
}