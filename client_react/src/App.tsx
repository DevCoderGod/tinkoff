import { Navigate, Route, Routes } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { Store } from "src/Store"
import { Home } from "./pages/Home"
import { Auth } from "./pages/Auth"
import { Terminal } from "./pages/Terminal"
import { TradeSpace } from "./pages/TradeSpace"

export const App = observer(function App(){
	if(Store.app.isAuth){
		if(Store.app.isTerminal){
			return(
				<Routes>
					<Route path= "/" element={<Home/>} />
					<Route path= "/*" element={<Navigate to="/" replace />} />
				</Routes>
			)
		} else {
			return(
				<Routes>
					<Route path= "/" element={<Home/>} />
					<Route path= "/tradeSpace" element={<TradeSpace/>} />
					<Route path= "/terminal" element={<Terminal/>} />
					<Route path= "/*" element={<Navigate to="/tradeSpace" replace />} />
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

export default App