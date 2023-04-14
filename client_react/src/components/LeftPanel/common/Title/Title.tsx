import S from './Title.module.scss'

export const Title = (props:{children:any}) => {
	return (
		<div className={S.title}>
			{props.children}
		</div>
	)
}