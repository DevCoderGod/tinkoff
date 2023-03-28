interface IProps {
	children:string
	onClick: ()=>void
	disabled?: boolean
}

export const Button = (props:IProps) => {
	return <button 
		disabled = {props.disabled}
		onClick = {props.onClick}
	>
		{props.children}
	</button>
}