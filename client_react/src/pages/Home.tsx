import { Link } from 'react-router-dom'
import { observer } from "mobx-react-lite"
import { Store } from "src/Store"
import { Header } from 'src/components/Header'

export const Home = observer(function Home(){
	return(
		<div>
			<Header title="Home"/>

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
				userName = {Store.user.userName}
			</div>
		</div>
	)
})