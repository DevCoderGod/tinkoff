export function RequestCookiesParser<TCookies extends {[key:string]:string}>(cookies:TCookies, template:(keyof TCookies)[]):Promise<TCookies>{

	return new Promise((resolve, reject) => {
		const result = {} as TCookies
		
		for (let index = 0; index < template.length; index++) {
			const key = template[index]

			if(key === "rToken") {
				if(cookies[key]){
					result[key] = cookies[key]
					continue
				} else reject({message: `cookies.rToken is undefined`})
			}

			if(cookies[key]) {
				result[key] = cookies[key]
			} else reject({message: `cookies.${String(key)} is undefined`})
		}
		resolve(result)
	})
}