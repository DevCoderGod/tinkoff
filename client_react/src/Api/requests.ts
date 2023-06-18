import { Store } from "../Store"
import { server } from "../globalVars"

interface Param extends RequestInit{headers:{[key:string]:string}, "Authorization"?:string}

function signParam(param:Param):Param {
	param.headers["Authorization"] = `Bearer ${Store.user.token}`
	return param
}

export async function fetchJSON<REQ,RES>(url:string, method:string, body?:REQ):Promise<RES | null> {
	let limit = 1
	const param:Param = {
			method,
			credentials: "omit",
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: body ? JSON.stringify(body) : null
	}

	return fetch(url,{...signParam(param)})
		.then(async res => {
			if(res.status === 200) return res.json().catch((err)=> {throw new Error(`res.json(): ${err}`)})
			if(res.status === 401){
				if(!limit) throw new Error('retry limit exceeded')
				limit--
				const aTokenString = await fetchAToken()
				Store.user.setToken(aTokenString)
				return await fetch(url,{...signParam(param)})
					.then(async(res)=> {
						if(res.status === 200) return await res.json().catch((err)=> {throw new Error(`res.json(): ${err}`)})
						if(res.status === 401) Store.user.logout()
						else throw new Error(`fetchJSON error responce: ${res}`)
					})
					.catch(err => {throw new Error(`fetchJSON is filed: ${err}`)})
			}
			else throw new Error(`fetch error responce: ${res}`)
		})
}

export async function fetchAToken():Promise<string> {
	return await fetch(`${server}auth/refresh`,{method:"POST"})
	.then( async res => {
		if(res.status === 200) return await res.json()
			.then((data:{token:string}) => data.token)
			.catch(err => {throw new Error(`fetchAToken is filed: ${err}`)})
		else throw new Error(`fetchAToken is filed: status: ${res.status}`)
	})
	.catch(err => {throw new Error(`fetchAToken err = ${err}`)}	)
}

export async function fetchWithRToken<REQ,RES>(url:string, method:string, body?:REQ):Promise<RES> {
	return await fetch(url,{
		method,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: body ? JSON.stringify(body) : null
	})
	.then((res)=> {
		if(res.status === 200) return res.json().catch(()=> true)
		// else return null
	})
	.catch((err)=> {throw new Error(`fetchWithRToken err = ${err}`)}	)
}