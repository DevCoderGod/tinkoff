interface IProps {
	children:string
	onClick: ()=>void
}

export const Button = (props:IProps) => {
	return <button onClick={props.onClick}>{props.children}</button>
}