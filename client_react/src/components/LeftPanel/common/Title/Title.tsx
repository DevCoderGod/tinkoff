import S from './Title.module.css'

export const Title = (props:{children:any}) => {
	return (
		<div className={S.title}>
			{props.children}
		</div>
	)
}