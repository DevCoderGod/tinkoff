import { makeObservable, observable, action } from 'mobx'

export class CAppStore{
	isAuth:boolean
	isOpenLeftPanel: boolean

	constructor() {
        makeObservable(this, {
			isAuth:observable,
			isOpenLeftPanel:observable,
			setIsAuth:action,
			setIsOpenLeftPanel:action,
        })
		this.isAuth = localStorage.getItem("token") ? true : false
		this.isOpenLeftPanel = true
	}

	setIsAuth = (v:boolean) => {
		this.isAuth = v
	}

	setIsOpenLeftPanel = (v:boolean) => {
		this.isOpenLeftPanel = v
	}
}

export const app = new CAppStore()