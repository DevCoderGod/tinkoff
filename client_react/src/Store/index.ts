import { app } from "./app.store"
import { tAccount } from "./tAccount.store"
import { user } from "./user.store"

export const Store = {
	app,
	user,
	tAccount,
}

// @ts-ignore
globalThis.Store=Store