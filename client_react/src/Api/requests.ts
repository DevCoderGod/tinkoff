export async function fetchJSON<REQ,RES>(url:string, method:string, body:REQ):Promise<RES | null> {
	return await fetch(url,{
		method,
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(body)
	})
	.then((res)=> res.json())
}