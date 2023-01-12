import { Navigate, Route, Routes } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { Store } from "src/Store"
// import { Router } from './Router';
// import { Header } from './components/Header';<Header/>
import { Home } from "./pages/Home"
import { Auth } from "./pages/Auth"
import { Portfolio } from "./pages/Portfolio"
import { Terminal } from "./pages/Terminal"

export const App = observer(function App(){
	if(Store.app.isAuth){
		if(Store.app.isTerminal){
			return(
				<Routes>
					<Route path= "/terminal" element={<Terminal/>} />
					<Route path= "/" element={<Home/>} />
					<Route path= "/*" element={<Navigate to="/" replace />} />
				</Routes>
			)
		} else {
			return(
				<Routes>
					<Route path= "/" element={<Home/>} />
					<Route path= "/portfolio" element={<Portfolio/>} />
					<Route path= "/*" element={<Navigate to="/portfolio" replace />} />
				</Routes>
			)	
		}
	}
	return(
		<Routes>
			<Route path= "/" element={<Home/>} />
			<Route path= "/auth" element={<Auth/>} />
			<Route path= "/*" element={<Navigate to="/" replace />} />
		</Routes>
	)
})

export default App;