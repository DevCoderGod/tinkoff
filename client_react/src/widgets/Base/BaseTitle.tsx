import React, { useEffect, useRef, useState } from 'react'
import S from './BaseWidget.module.scss'
import cn from 'classnames'

interface IProps{
	title:string
}

export const BaseTitle = (props:IProps) => {
	return(
		<div
			className={cn(S.title)}
		>
			{props.title}
		</div>
	)
}