import { app } from "./app.store"
import { tAccount } from "./tAccount.store"
import { user } from "./user.store"
import { history } from "./history.store"

export const Store = {
	app,
	user,
	tAccount,
	history
}

// @ts-ignore
globalThis.Store=Store