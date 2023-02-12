import { IToken } from "./Token"
import { IUser } from "./User"

export type TAuthRequestBody = Pick<IUser, "name" | "email" | "pass"> & Pick<IToken, "deviceID">

export type TAuthRequestCookies = Pick<IToken, "deviceID"> & {
	rToken: IToken["value"]
}