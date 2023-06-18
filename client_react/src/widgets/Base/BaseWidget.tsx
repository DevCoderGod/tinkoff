import React, { useEffect, useRef, useState } from 'react'
import S from './BaseWidget.module.scss'
import cn from 'classnames'
import { BaseTitle } from './BaseTitle'
import { BaseBody } from './BaseBody'

interface IProps{
	title:string
	body:JSX.Element
}

export const BaseWidget = (props:IProps) => {
	return(
		<div className={cn(S.container)}>
			<BaseTitle
				title={props.title}
			/>
			<BaseBody
				body={props.body}
			/>
		</div>
	)
}