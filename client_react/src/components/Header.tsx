import { MainMenu } from "./MainMenu"

interface IProps {
	title:string
}

export const Header = (props:IProps) => {
	return(
		<header>
			<h1>{props.title}</h1>
			<MainMenu/>
		</header>
	)
}