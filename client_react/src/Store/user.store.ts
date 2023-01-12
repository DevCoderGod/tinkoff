import { makeObservable, observable, computed, action } from 'mobx'
import { IUser } from '@models/Models'
import { app } from "./app.store"
import { Api } from 'src/Api'

export class CUserStore{
	user: IUser | null

	constructor() {
        makeObservable(this, {
            user: observable,
            getUser: computed,
			login:action,
			logout:action,
        })
        this.user = null
	}

	get getUser(){
		return this.user
	}

	login = (userName:string) => {
		try {
			this.user = Api.user.login(userName)
			if(!this.user)app.setIsAuth(false)
			else app.setIsAuth(true)
		} catch (err) {
			console.log(' Ошибка входа! ');
		}
	}

	logout = () => {
		this.user = Api.user.logout()
		app.setIsAuth(false)
	}
}

export const user = new CUserStore()