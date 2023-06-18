import React from 'react'
import S from './Table.module.scss'
import cn from "classnames"

export function Table(props:{ops:any[]}) {
	return (
		<table className={S.table}>
			<tbody>{
				props.ops.map(op => {
					return <tr key={op.id}>{
						Object.keys(op).map((v,i,a) =>{
							return <td key={i}><span>{op[a[i]].toString()}</span></td>
						})
					}</tr>
				})
			}</tbody>
		</table>
	)
}