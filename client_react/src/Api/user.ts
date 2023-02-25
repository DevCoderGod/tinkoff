import { TAuthRequestBody } from "@models/Models";
import { IUser } from "@models/User";
import { fetchJSON } from "./requests";

class CUserApi {

	login = async (userData:TAuthRequestBody):Promise<IUser | null> => {
		if(!userData) return null
		
		return await fetchJSON<TAuthRequestBody,IUser>('http://localhost:5000/u', "POST", userData)
	};

	logout = () => {
		return null
	};
}

export const user = new CUserApi();