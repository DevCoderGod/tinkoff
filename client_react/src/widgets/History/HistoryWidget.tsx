import { BaseWidget } from '../Base/BaseWidget'
import { History } from './History'

export const HistoryWidget = () => {
	return(
		<BaseWidget
			title={"История"}
			body={<History/>}
		/>
	)
}