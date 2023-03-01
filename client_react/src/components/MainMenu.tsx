import { Store } from "../Store"
import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite"

const Point = (props:{
	path:string,
	children:any
}) => {
	return(
		<div style={{
			"marginLeft":"20px",
		}}>
			<Link to= {props.path}>{props.children}</Link>
		</div>
	)
}

export const MainMenu = observer(function MainMenu(){
	return(
		<div style={{
			"display":"flex",
			"alignItems":"center",
			"marginLeft":"20px",

		}}>
			{Store.app.isAuth &&
				<>
					<Point path="/">Home</Point>
					<Point path="/tradeSpace">tradeSpace</Point>
					<Point path="/terminal">terminal</Point>
				</>
			}

			{!Store.app.isAuth &&
				<>
					<Point path="/">Home</Point>
					<Point path="/auth">Вход</Point>
				</>
			}
		</div>
	)
})