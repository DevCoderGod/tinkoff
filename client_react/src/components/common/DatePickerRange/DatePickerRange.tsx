import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import S from './DatePickerRange.module.scss'
import './react-datepicker.css'

interface IProps{
	startDate:Date
	endDate:Date
	onChange:(date:Date)=>void
}

export const DatePickerRangeStart = (props:IProps) => {
	return(
		<DatePicker
			className={S.inputDate}
			calendarClassName={S.inputCalendar}
			selected={props.startDate}
			selectsStart
			dateFormat="dd/MM/yyyy"
			onChange={(date) => date && props.onChange(date)}
			startDate={props.startDate}
			endDate={props.endDate}
		/>
	)
}

export const DatePickerRangeEnd = (props:IProps) => {
	return(
		<DatePicker
			className={S.inputDate}
			calendarClassName={S.inputCalendar}
			selected={props.endDate}
			selectsEnd
			dateFormat="dd/MM/yyyy"
			onChange={(date) => date && props.onChange(date)}
			startDate={props.startDate}
			endDate={props.endDate}
			minDate={props.startDate}
		/>
	)
}
