import S from './LeftPanel.module.css'
import cn from "classnames"
import { observer } from "mobx-react-lite"
import { Store } from "../../Store"

import { Auth } from "./Auth";
import { Connector } from "./Connector"
import { Switch } from "./Switch"

export const LeftPanel = observer(function LeftPanel(){
	return(
		<div className= {cn(S.panel, Store.app.isOpenLeftPanel ? S.open : S.closed)}>
			<div className={S.panel__title}><Switch/></div>
			<Auth/>
			{Store.app.isAuth && <Connector/>}
		</div>
	)
})