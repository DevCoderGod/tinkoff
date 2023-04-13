import { makeObservable, observable, action } from 'mobx'

export class CAppStore{
	isAuth:boolean
	isOpenLeftPanel: boolean
	theme: "light" | "dark"

	constructor() {
        makeObservable(this, {
			isAuth:observable,
			isOpenLeftPanel:observable,
			theme:observable,
			setIsAuth:action,
			setIsOpenLeftPanel:action,
			setTheme:action,
        })
		this.isAuth = localStorage.getItem("token") ? true : false
		this.isOpenLeftPanel = true
		this.theme = "dark"
	}

	setIsAuth = (v:boolean) => {
		this.isAuth = v
	}

	setIsOpenLeftPanel = (v:boolean) => {
		this.isOpenLeftPanel = v
	}

	setTheme = (v:"light" | "dark") => {
		this.theme = v
	}
}

export const app = new CAppStore()