import { app } from "./app.store"
import { user } from "./user.store"

export const Store = {
	app,
	user
}

// @ts-ignore
globalThis.User=Store.User