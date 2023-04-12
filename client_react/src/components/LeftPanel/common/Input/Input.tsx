import S from './Input.module.scss'

interface IProps {
	id: string
	label:string
	type:string
	refInput:React.RefObject<HTMLInputElement>
	disabled?: boolean
}

export const Input = (props:IProps) => {
	return (
		<div className={S.container}>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				id={props.id}
				ref={props.refInput}
				className={S.input}
				type={props.type}
				disabled={props.disabled}
			/>
		</div>
	)
}