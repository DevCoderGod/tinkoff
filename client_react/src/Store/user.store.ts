import { makeObservable, observable, computed, action } from 'mobx'
import { TUserClientStore } from '@models'
import { TAuth } from '@api'
import { app } from "./app.store"
import { Api } from 'src/Api'

export class CUserStore{
	user: TUserClientStore | null
	token: string

	constructor() {
        makeObservable(this, {
            user: observable,
            token: observable,
            userName: computed,
			setUser:action,
			setToken:action,
			login:action,
			logout:action,
        })
		this.token = localStorage.getItem("token") ?? ""
        this.user = null
	}

	get userName(){
		return this.user?.name
	}

	setUser(user:TUserClientStore | null){
		localStorage.setItem("user",user?.name ?? "")
		this.user = user
	}
	
	setToken(token:string){
		localStorage.setItem("token",token)
		this.token = token
	}
	
	async login(userData:TAuth.LoginRequest):Promise<boolean>{
		try {
			if(!userData) throw new Error('bud userData') //TODO валидация
			const data = await Api.user.login(userData)
			console.log('data === ',data)
			if(!data.user) return false
			this.setToken(data.token)
			this.setUser(data.user)
			app.setIsAuth(true)
			return true
		} catch (err) {
			app.setIsAuth(false)
			this.setUser(null)
			this.setToken("")
			console.log(' Ошибка входа! ', err)
			return false
		}
	}

	async logout():Promise<void>{
		try {
			await Api.user.logout()
		} catch (err) {
			console.log(' Ошибка выхода! ', err)
		}
		this.setUser(null)
		this.setToken("")
		app.setIsAuth(false)
	}
}

export const user = new CUserStore()