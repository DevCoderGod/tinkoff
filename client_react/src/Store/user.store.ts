import { makeObservable, observable, computed, action } from 'mobx'
import { IUser, TAuthRequestBody } from '@models/Models'
import { app } from "./app.store"
import { Api } from 'src/Api'

export class CUserStore{
	user: Pick<IUser, "name"| "email" | "role"  | "isActiv"> | null

	constructor() {
        makeObservable(this, {
            user: observable,
            userName: computed,
			setUser:action,
			login:action,
			logout:action,
        })
        this.user = null
	}

	get userName(){
		return this.user?.name
	}

	setUser(user:any){
		this.user = user
	}
	
	async login(userData:TAuthRequestBody):Promise<boolean>{
		try {
			this.setUser(await Api.user.login(userData))
			app.setIsAuth(!!this.user)
			return true
		} catch (err) {
			app.setIsAuth(false)
			console.log(' Ошибка входа! ', err)
			return false
		}
	}

	async logout():Promise<void>{
		console.log('this.user === ',this.user)
		const logout = await Api.user.logout()
		console.log('logout === ',logout)
		this.setUser(null)
		app.setIsAuth(false)
	}
}

export const user = new CUserStore()