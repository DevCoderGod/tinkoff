import S from './LeftPanel.module.scss'
import cn from "classnames"
import { observer } from 'mobx-react-lite'
import { Store } from "../../Store"

export const ThemeSwitch = observer(function ThemeSwitch() {

	function click():void {
		Store.app.setTheme(Store.app.theme === "dark" ? "light" : "dark")
		document.documentElement.dataset.theme = Store.app.theme
	}

	return(
		<div
			className= {cn(S.panel__themeSwitch, Store.app.theme === "dark" ? S["panel__themeSwitch_dark"] : "")}
			onClick = {click}
		/>
	)
})