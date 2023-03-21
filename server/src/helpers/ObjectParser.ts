export function ObjectParser<D extends R, R extends {[key:string]:any}>(obj:D, template:(keyof R)[]):R{
	return Object.fromEntries(
		template.map(key => {
			// if(key in obj) return [key,obj[key]] // ts(2322)
			if(key in obj){
				const r = [key,obj[key]]
				return r
			}
			else throw new Error(`ObjectParser: obj has not ${String(key)}`)
		})
	)
}