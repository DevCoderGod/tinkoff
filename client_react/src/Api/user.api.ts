import { TAuth } from "@api"
import { IUser } from "@models"
import { fetchJSON } from "./requests"
import { server } from "../globalVars"

class CUserApi {

	login = async (userData:TAuth.LoginRequest):Promise<IUser | null> => {
		if(!userData) return null
		
		return await fetchJSON<TAuth.LoginRequest,IUser>(`${server}auth/login`, "POST", userData)
	}

	logout = async():Promise<boolean|null> => {
		return await fetchJSON<TAuth.LoginRequest,boolean>(`${server}auth/logout`, "POST")
	}
}

export const user = new CUserApi()