import { IToken } from "./Token"

export interface IUser{
	id: string
	name: string
	pass: string
	email: string
	isActivated: boolean
	jwtToken?: IToken
}