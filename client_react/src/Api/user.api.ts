import { TAuthRequestBody } from "@models/Models"
import { IUser } from "@models/User"
import { fetchJSON } from "./requests"
import { server } from "../globalVars"

class CUserApi {

	login = async (userData:TAuthRequestBody):Promise<IUser | null> => {
		if(!userData) return null
		
		return await fetchJSON<TAuthRequestBody,IUser>(`${server}auth/login`, "POST", userData)
	}

	logout = async():Promise<boolean|null> => {
		return await fetchJSON<TAuthRequestBody,boolean>(`${server}auth/logout`, "POST")
	}
}

export const user = new CUserApi()