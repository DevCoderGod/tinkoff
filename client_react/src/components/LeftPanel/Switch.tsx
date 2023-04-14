import S from '../LeftPanel.module.scss'
import cn from "classnames"

interface IProps {
	className:string
	onClick:()=>void
}

export const Switch = (props:IProps) => {
	return(
		<div
			className= {props.className}
			onClick = {props.onClick}
		/>
	)
}