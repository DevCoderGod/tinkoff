export async function fetchJSON<REQ,RES>(url:string, method:string, body?:REQ):Promise<RES | null> {
	return await fetch(url,{
		method,
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: body ? JSON.stringify(body) : null
	})
	.then((res)=> {
		if(res.status === 200) return res.json().catch(()=> true)
		else return null
	})
}