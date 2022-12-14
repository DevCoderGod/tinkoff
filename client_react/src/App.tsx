import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

function App(){
	// const router = Router(true)
	const router = Router(false,false)
	return(
		<BrowserRouter>
			{router}
		</BrowserRouter>
	)
}

export default App;