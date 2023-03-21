import { IToken } from "./Token"

export interface IUserInfo{
	deviceIDs: string[]
	[key:string]:any
}

export interface IUser{
	id: string
	name: string
	pass: string
	email: string
	role: "admin" | "user" |"guest"
	isActiv: boolean
	activExp: Date | null
	jwtTokens: IToken[]
	info: IUserInfo
}

export interface TUserClientStore extends Pick<IUser, "name"| "email" | "role"  | "isActiv">{}