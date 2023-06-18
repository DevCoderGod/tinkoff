import S from './Home.module.scss'
import { Store } from '../Store'
import { Header } from '../components/Header/Header'
import { HistoryWidget } from '../widgets/HistoryWidget'

export const Home = () => {
	
	return(
		<div className={S.container}>
			<Header title="Home"/>
			<HistoryWidget/>
		</div>
	)
}