import S from './LeftPanel.module.css'
import cn from "classnames"
import { observer } from 'mobx-react-lite'
import { Store } from "../../Store"

export const Switch = observer(function Switch() {

	function click():void {
		Store.app.setIsOpenLeftPanel(!Store.app.isOpenLeftPanel)
	}

	return(
		<div className= {cn(S.switch, Store.app.isOpenLeftPanel ? S["switch--open"] : "")}
			onClick = {click}
		/>
	)
})