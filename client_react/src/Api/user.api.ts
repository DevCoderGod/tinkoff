import { TAuth } from '@api'
import { fetchWithRToken } from "./requests"
import { server } from "../globalVars"

class CUserApi {

	login = async (userData:TAuth.LoginRequest):Promise<TAuth.LoginResponse> => {
		return await fetchWithRToken<TAuth.LoginRequest, TAuth.LoginResponse>(`${server}auth/login`, "POST", userData)
			.catch(err => {throw new Error(`CUserApi.login is fail. err: ${err}`)})
	}

	logout = async():Promise<boolean> => {
		return await fetchWithRToken<TAuth.LoginRequest, boolean>(`${server}auth/logout`, "POST")
			.catch(err => {throw new Error(`CUserApi.logout is fail. err: ${err}`)})
	}
}

export const user = new CUserApi()