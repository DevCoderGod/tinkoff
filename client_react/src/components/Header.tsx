import { Store } from "../Store"
import { observer } from "mobx-react-lite"
import { ButtonLogout } from "./ButtonLogout"
import { Connector } from "./Connector"
import { MainMenu } from "./MainMenu"
import { Sender } from "./Sender"

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
			{Store.app.isAuth && <Connector/>}
			{Store.app.isAuth && <Sender/>}
			{/* {Store.app.isAuth && <Connector/>}
			<Connector/>
			<Sender/> */}
		</header>
	)
})