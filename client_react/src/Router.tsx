import { Route, Routes } from "react-router-dom"
import { Auth } from "./pages/Auth"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Portfolio } from "./pages/Portfolio"
import { Terminal } from "./pages/Terminal"

export const Router = (isAuth:boolean, isTerminal:boolean) =>{
	if(isAuth){
		if(isTerminal){
			return(
				<Routes>
					<Route path= "/terminal" element={<Terminal/>} />
					<Route path= "/*" element={<Home/>} />
				</Routes>
			)
		} else {
			return(
				<>
					<Header/>
					<Routes>
						<Route path= "/portfolio" element={<Portfolio/>} />
						<Route path= "/*" element={<Home/>} />
					</Routes>
				</>
			)	
		}
	} else {
		return(
			<>
				<Header/>
				<Routes>
					<Route path= "/" element={<Home/>} />
					<Route path= "/auth" element={<Auth/>} />
					<Route path= "/*" element={<Home/>} />
				</Routes>
			</>
		)
	}
}