import { TAuthRequestBody } from "@models"

export function AuthRequestBodyParserAndCheck(body:TAuthRequestBody, template:(keyof TAuthRequestBody)[]):TAuthRequestBody{

	const result:TAuthRequestBody = {} as TAuthRequestBody

	template.forEach(key => {
		if(body[key]) result[key] = body[key]
		else throw new Error(` body.${key} is undefined `)
	})

	return result
}