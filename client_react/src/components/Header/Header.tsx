import { observer } from "mobx-react-lite"

interface IProps {
	title:string
}

export const Header = observer(function Header(props:IProps){
	return(
		<header style={{
			"display":"flex",
			"alignItems":"center",
			"marginLeft":"500px"
		}}>
			<h1>{props.title}</h1>
		</header>
	)
})