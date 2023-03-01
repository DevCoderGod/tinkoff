import { Store } from "../Store"
import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite"

export const MainMenu = observer(function MainMenu(){
	return(
		<div>
			{Store.app.isAuth &&
				<>
					<div>
						<Link to="/">Home</Link>
					</div>
					<div>
						<Link to="/portfolio">Портфель</Link>
					</div>
					<div>
						<Link to="/terminal">terminal</Link>
					</div>
				</>
			}

			{!Store.app.isAuth &&
				<>
					<div>
						<Link to="/">Home</Link>
					</div>
					<div>
						<Link to="/auth">auth</Link>
					</div>
				</>
			}
		</div>
	)
})