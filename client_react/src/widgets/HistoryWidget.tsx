// import React, { useEffect, useRef, useState } from 'react'
import S from './HistoryWidget.module.scss'
import cn from 'classnames'
import { BaseWidget } from './Base/BaseWidget'
import { History } from '../components/History/History'

interface IProps{}

export const HistoryWidget = (props:IProps) => {
	return(
		<BaseWidget
			title={"История"}
			body={<History/>}
		/>
	)
}