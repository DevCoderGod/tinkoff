import S from './Home.module.scss'
import { Store } from '../Store'
import { Header } from '../components/Header/Header'
import { History } from '../components/History/History'

export const Home = () => {
	
	return(
		<div className={S.container}>
			<Header title="Home"/>
			<History/>
		</div>
	)
}