// import React, { useEffect, useRef, useState } from 'react'
import S from './BaseWidget.module.scss'
import cn from 'classnames'

interface IProps{
	body:JSX.Element
}

export const BaseBody = (props:IProps) => {
	return(
		<div
			className={cn(S.body)}
		>
			{props.body}
		</div>
	)
}