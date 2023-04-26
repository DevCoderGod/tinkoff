import React from 'react'
import S from './Table.module.scss'
import cn from "classnames"
import { OperationsRequest, OperationsResponse, Operation } from "@tinkoff/operations"

export function Table(props:{ops:any[]}) {
	console.log(' table ')
	return (
		<table>
			<tbody>
				{
					props.ops.map(op => {
						return <tr key={op.id}>
							{
								Object.keys(op).map((v,i,a) =>{
								// @ts-ignore
									return <td key={i}><span>{op[a[i]].toString()}</span></td>
								})
							}
						</tr>
					})
				}
			</tbody>
		</table>
	);
}