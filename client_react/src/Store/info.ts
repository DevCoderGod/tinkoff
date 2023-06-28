import { tApi } from '../tApi'
import { Bond, Currency, Etf, Future, InstrumentsRequest, Share } from '@tinkoff/instruments'
import { MoneyValue } from '@tinkoff/common'
import { InstrumentStatus } from '../tsproto/instruments'
import { toast } from 'react-toastify'
import { viewCurrency } from '../helpers'

type TInstrument = Bond | Share | Currency | Etf | Future
export type TInstrumentType = "bond" | "share" | "currency" | "etf" | "futures"
export type TInstrumentsType = "bonds" | "shares" | "currencys" | "etfs" | "futures"

type TInstrumentsInfo = {
	[key in TInstrumentsType]:TInstrument[]
}

type TCategory = {
	[key in TInstrumentType]:TInstrumentsType
}

export interface IInfo{
	instruments:TInstrumentsInfo
}

export class CInfo implements IInfo{
	category:TCategory = {
		bond:"bonds",
		share:"shares",
		currency:"currencys",
		etf:"etfs",
		futures:"futures",
	}

	instruments: TInstrumentsInfo

	constructor(){
		this.instruments = {} as TInstrumentsInfo
	}

	async getInfoData():Promise<boolean>{
		const payload: InstrumentsRequest = { instrumentStatus: InstrumentStatus.BASE }

		return await Promise.all([
			this.instruments.bonds = await tApi.Instruments.bonds(payload).then(r => r.instruments),
			this.instruments.shares = await tApi.Instruments.shares(payload).then(r => r.instruments),
			this.instruments.currencys = await tApi.Instruments.currencies(payload).then(r => r.instruments),
			this.instruments.etfs = await tApi.Instruments.etfs(payload).then(r => r.instruments),
			this.instruments.futures = await tApi.Instruments.futures(payload).then(r => r.instruments)
		])
		.then(()=> true)
		.catch(err => {
			toast(`Error getInfoData: ${err}`)
			return false 
		})
	}

	getInstrument(figi:string, instrumentType:string):TInstrument | undefined{
		return this.instruments[this.category[instrumentType as TInstrumentType]]?.find(i=>i.figi === figi)
	}

	viewTicker(figi:string, instrumentType:string):string{
		return this.getInstrument(figi, instrumentType)?.ticker ?? ""
	}

	viewPrice(price:MoneyValue | undefined, figi:string, instrumentType:string):string{
		if(!price || (price.units === "0" && price.nano === 0)) return ""
		const inc = this.getInstrument(figi, instrumentType)?.minPriceIncrement?.nano
		const prec = inc ? (inc/1000000000).toString().split(".")[1].length : 0
		return parseFloat(`${price.units}.${price.nano}`).toFixed(prec)
	}
	
	viewMoneyValue(price:MoneyValue | undefined, figi:string, instrumentType:string):string{
		if(!price || (price.units === "0" && price.nano === 0)) return ""
		if(price.nano === 0) return `${price.units}${viewCurrency(price.currency)}`

		const inc = this.getInstrument(figi, instrumentType)?.minPriceIncrement?.nano
		const prec = inc ? (inc/1000000000).toString().split(".")[1].length : 0
		
		const sign = (price.units[0] === "-" || price.nano < 0) ? "-" : ""
		const digit = Math.abs(price.nano) === 0 ? "" : `.${Math.abs(price.nano).toString().slice(0,prec)}`
		return `${sign}${price.units.replace(/-*/,"")}${digit.replace(/0*$/,"")} ${viewCurrency(price.currency)}`
	}
}