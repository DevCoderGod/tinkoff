import { Store } from "src/Store"
import { Button } from "./Button"

export const ButtonLogout = () => {

	async function logout(){
		await Store.user.logout()
	}
	
	return Store.app.isAuth ? <Button onClick={logout} children= "Выход"/> : <></>
}