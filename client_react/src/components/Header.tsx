import { Store } from "../Store"
import { observer } from "mobx-react-lite"
import { ButtonLogout } from "./ButtonLogout"
import { MainMenu } from "./MainMenu"

interface IProps {
	title:string
}

export const Header = observer(function Header(props:IProps){
	return(
		<header style={{
			"display":"flex",
			"alignItems":"center",
			"marginLeft":"20px"
		}}>
			<h1>{props.title}</h1>
			<MainMenu/>
			{Store.app.isAuth && <ButtonLogout/>}
		</header>
	)
})