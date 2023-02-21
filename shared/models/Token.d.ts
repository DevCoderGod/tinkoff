export interface IToken{
	id: string
	userID: string
	deviceID: string
	value: string
	type: "access" | "refresh"
	expiration: string //ISO 8601
}