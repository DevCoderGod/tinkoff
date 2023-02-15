import { IUser } from "@models"
import { Schema, model, ObjectId, LeanDocument, Types} from "mongoose"

const UserModel = model<IUser>("User", new Schema<IUser>({
	name: { type: String, required: true },
	pass: { type: String, required: true },
	email: { type: String, required: true },
	role: { type: String, required: true, default: "guest" },
	isActiv: { type: Boolean, default: false },
	activExp: { type: Date, default: null },
	jwtTokens: [{ type: Schema.Types.ObjectId, ref: "Token" }]
}))

type R = {[key:string]:any} & {id:string}

type DB<R> = Omit<R, "id"> & {_id: Types.ObjectId}

function change<T>(doc:DB<T>):R {
	const res:R = {} as R

	const arr:(keyof DB<T>)[] = Object.keys(doc) as (keyof DB<T>)[]

	arr.forEach((key) => {
		if(key === "_id") res.id = doc._id.toString()
		else if(key === "__v") {}
		else {
			const val = doc[key]
			if(val && typeof val === "object") console.log('val === ',val) //TODO рекурсиво перебрать массивы и объекты
			Object.defineProperty(res, key, {value: val, writable: true, enumerable: true, configurable: true})
		}
	})
	return res
}

export const User = {
	
	find: async function (key:{[key in Pick<IUser, "id" | "name" | "email"> as string]:string}):Promise<IUser | null>{
		const dbKey = Object.keys(key)[0] === "id" ? {_id: key.id} : {...key} // замена "id" на "_id" в "key"
		
		return await UserModel.findOne(dbKey)
			.populate("jwtTokens")
			.lean()
			.then(user => {
				if(!user)return null
				return change(user) as IUser
			})
			.then(user => {
				// if(!user)return null
				// console.log('user === ',user)
				// const id = user._id.toString()
				// const {name, pass, email, role, isActiv, activExp, jwtTokens} = user // TODO не универсально..
				// return {id, name, pass, email, role, isActiv, activExp, jwtTokens} //: jwtTokens.map(token => token.id.toString())
				console.log('...user === ',{...user})
				return user
			})
			.catch(err => {
				console.log(" User.findOne is fail: ",err)
				throw new Error("User.findOne is fail:")
			})
	},

	create: async function (candidate:Pick<IUser, "name" | "pass" | "email">){

		return await UserModel.create(candidate)
			.then(user => {
				const id = user._id.toString()
				const {name, pass, email, role, isActiv, activExp, jwtTokens} = user // TODO не универсально..
				return {id, name, pass, email, role, isActiv, activExp, jwtTokens}
			})
			.catch(err => {
				console.log(" User.create is fail: ",err)
				throw new Error("User.create is fail:")
			})	
	},

	addTokens: async function (id:string, tokens:string[]){

		return await UserModel.updateOne({_id:id}, {$push: {jwtTokens:tokens}})
			.then(query => query.acknowledged && query.modifiedCount>0)
			.catch(err => {
				console.log(" User.saveTokens is fail: ",err)
				throw new Error(" User.saveTokens is fail: ")
			})
	},

	updateTokens: async function (id:string, tokens:string[]){

		return await UserModel.updateOne({_id:id}, {jwtTokens:tokens})
			.then(query => query.acknowledged && query.modifiedCount>0)
			.catch (err => {
				console.log(" User.updateTokens is fail: ",err)
				throw new Error(" User.updateTokens is fail: ")
			})
	},

	getTokens: async (id:string) => {
		return await UserModel.findOne({_id:id})
			.populate("jwtTokens")
			.select('jwtTokens')
			.then(arrTokens => arrTokens?.jwtTokens ?? null)
			.catch (err => {
				console.log(" User.getTokens is fail: ",err)
				throw new Error(" User.getTokens is fail: ")
			})
	},
}