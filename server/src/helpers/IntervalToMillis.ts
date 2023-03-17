import { DateTime, Interval } from 'luxon'

export function IntervalToMillis(exp:string) {
	return Interval.fromDateTimes(DateTime.now(), DateTime.fromISO(exp)).toDuration().toMillis()
}