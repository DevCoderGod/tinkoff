export interface IToken{
	id: string
	userID: string
	deviceID: string
	value: string
	type: "access" | "refresh"
	expired: string
}