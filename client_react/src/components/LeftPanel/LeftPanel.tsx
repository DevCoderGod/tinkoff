import S from './LeftPanel.module.scss'
import cn from "classnames"
import { observer } from "mobx-react-lite"
import { Store } from "../../Store"

import { Auth } from "./Auth";
import { Connector } from "./Connector"
import { Switch } from "./Switch"

export const LeftPanel = observer(function LeftPanel(){
	return(
		<div className= {cn(S.panel, Store.app.isOpenLeftPanel ? S.panel_open : S.panel_closed)}>
			<div className={S.panel__title}>
				<Switch
					className={cn(S.panel__themeSwitch, Store.app.theme === "dark" ? S["panel__themeSwitch_dark"] : "")}
					onClick={changeThemeHandler}
				/>
				<Switch
					className={cn(S.panel__switch, Store.app.isOpenLeftPanel ? S["panel__switch_open"] : "")}
					onClick={openPanelHandler}
				/>
			</div>
			<Auth/>
			{Store.app.isAuth && <Connector/>}
		</div>
	)
})

function openPanelHandler():void {
	Store.app.setIsOpenLeftPanel(!Store.app.isOpenLeftPanel)
}

function changeThemeHandler():void {
	Store.app.setTheme(Store.app.theme === "dark" ? "light" : "dark")
	document.documentElement.dataset.theme = Store.app.theme
}