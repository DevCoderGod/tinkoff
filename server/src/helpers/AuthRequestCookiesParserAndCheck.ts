import { TAuthRequestCookies } from "@models"
// import { TokenService } from "../Services/TokenServices.js"

export function AuthRequestCookiesParserAndCheck(cookies:TAuthRequestCookies, template:(keyof TAuthRequestCookies)[]):TAuthRequestCookies{

	const result:TAuthRequestCookies = {} as TAuthRequestCookies
	
	for (let index = 0; index < template.length; index++) {
		const key = template[index]

		if(key === "rToken") {
			if(cookies[key]){
				// TokenService.check(cookies[key]) // TODO
				result[key] = cookies[key]
				continue
			} else{
				result[key] = ""
				continue
			}
		}

		if(cookies[key]) {
			result[key] = cookies[key]
		}
		else throw new Error(` cookies.${key} is undefined `)
	}

	return result
}