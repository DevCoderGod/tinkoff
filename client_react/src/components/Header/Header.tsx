import { observer } from "mobx-react-lite"
import S from './Header.module.scss'

interface IProps {
	title:string
}

export const Header = observer(function Header(props:IProps){
	return(
		<header className={S.header}>
			<h1>{props.title}</h1>
		</header>
	)
})