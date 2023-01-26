export interface IToken{
	id: string
	userID: string
	value: string
	type: "access" | "refresh"
	expired: string
}