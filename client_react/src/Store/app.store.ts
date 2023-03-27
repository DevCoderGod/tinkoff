import { makeObservable, observable, action } from 'mobx'

export class CAppStore{
	isAuth:boolean
	isTerminal:boolean

	constructor() {
        makeObservable(this, {
			isAuth:observable,
			isTerminal:observable,
			setIsAuth:action,
        })
		this.isAuth = localStorage.getItem("token") ? true : false
		this.isTerminal = false
	}

	setIsAuth = (v:boolean) => {
		this.isAuth = v
	}
}

export const app = new CAppStore()