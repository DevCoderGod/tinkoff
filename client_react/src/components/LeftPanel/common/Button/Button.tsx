import S from './Button.module.scss'

interface IProps {
	inscription: string
	onClick: (e:React.MouseEvent)=>void
	disabled?: boolean
}

export const Button = (props:IProps) => {
	return (
		<button
			className= {S.button}
			disabled = {props.disabled}
			onClick = {props.onClick}
		>
			{props.inscription}
		</button>
	)
}