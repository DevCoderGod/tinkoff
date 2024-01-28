export function viewCurrency(currency:string) {
	switch (currency) {
		case "rub": return "₽"
		case "pt.": return "пт."
	}
	return currency
}