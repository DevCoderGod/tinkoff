import { Navigate, Route, Routes } from "react-router-dom"
import S from './App.module.scss'
import { observer } from "mobx-react-lite"
import { Store } from "./Store"
import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import { Home } from "./pages/Home"
import { Terminal } from "./pages/Terminal"
import { TradeSpace } from "./pages/TradeSpace"

import { LeftPanel } from "./components/LeftPanel/LeftPanel"

const Router = observer(function Router () {
	if(Store.app.isAuth){
			return(
				<Routes>
					<Route path= "/" element={<Home/>} />
					<Route path= "/tradeSpace" element={<TradeSpace/>} />
					<Route path= "/terminal" element={<Terminal/>} />
					<Route path= "/*" element={<Navigate to="/tradeSpace" replace />} />
				</Routes>
			)	
		}
	return(
		<Routes>
			<Route path= "/" element={<Home/>} />
			<Route path= "/*" element={<Navigate to="/" replace />} />
		</Routes>
	)

})

export const App = observer(function App() {
	return(
		<div className={S.app}>
			<LeftPanel/>
			<Router/>
			<ToastContainer
				position="top-right"
				autoClose={1500}
				limit={3}
				hideProgressBar={true}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	)
})

export default App