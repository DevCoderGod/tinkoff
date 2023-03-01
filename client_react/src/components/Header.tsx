import { ButtonLogout } from "./ButtonLogout"
import { MainMenu } from "./MainMenu"

interface IProps {
	title:string
}

export const Header = (props:IProps) => {
	return(
		<header style={{
			"display":"flex",
			"alignItems":"center",
			"marginLeft":"20px"
		}}>
			<h1>{props.title}</h1>
			<MainMenu/>
			<ButtonLogout/>
		</header>
	)
}