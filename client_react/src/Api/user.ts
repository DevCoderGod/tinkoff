import { IUser } from "@models/User";

class CUserApi {

	login = (username:string):IUser | null => {
		if(!username) return null
		const user:IUser = {
			email:username,
			name:username
		}
		const userFetch = fetch('http://localhost:5000/u')
		.then((res)=> res.text())
		.then((d)=> {console.log('d === ',d)})

		return user
	};

	logout = () => {
		return null
	};
}

export const user = new CUserApi();