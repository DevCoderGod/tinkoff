import { Types } from "mongoose"

type	Model = {[key:string]:any, id:string}
type	DOC = (Omit<Model, "id"> & {_id: Types.ObjectId}) & Object

export function transformToModel<OBJ extends Model>(doc:DOC):OBJ{

	const res:OBJ = {} as OBJ
	( Object.keys(doc) as (keyof DOC)[] ).forEach((key) => {

		if(key === "_id") res.id = doc._id.toString()
		else if(key === "__v") {}
		else {
			const value = doc[key]
			if(value && typeof value === "object"){ // рекурсиво перебрать объект
				if(value && Array.isArray(value)){ //рекурсиво перебрать массив
					const valArray:OBJ[] = []
					value.forEach((val:DOC) => val && valArray.push(transformToModel(val)))
					Object.defineProperty(res, key, {value: valArray, writable: true, enumerable: true, configurable: true})
				} else {
					const valObject:OBJ = {} as OBJ
					for(let keyInObj in value){
						valObject[keyInObj as (keyof OBJ)] = transformToModel(value[keyInObj])
						Object.defineProperty(res, key, {value: valObject, writable: true, enumerable: true, configurable: true})
					}
				}
			} else {
				Object.defineProperty(res, key, {value: value, writable: true, enumerable: true, configurable: true})
			}
		}
	})
	return res
}