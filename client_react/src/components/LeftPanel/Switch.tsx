import S from './LeftPanel.module.scss'
import cn from "classnames"
import { observer } from 'mobx-react-lite'
import { Store } from "../../Store"

export const Switch = observer(function Switch() {

	function click():void {
		Store.app.setIsOpenLeftPanel(!Store.app.isOpenLeftPanel)
	}

	return(
		<div className= {cn(S.panel__switch, Store.app.isOpenLeftPanel ? S["panel__switch_open"] : "")}
			onClick = {click}
		/>
	)
})