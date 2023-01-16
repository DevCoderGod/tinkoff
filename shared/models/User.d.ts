export interface IUser{
	name: string
	id: string
	email: string
	jwtToken: string
}

export interface IUserLoginRequest{
	name: string
	pass: string
}

export interface IUserLoginResponse{
	id: string
	email: string
	jwtToken: string
}