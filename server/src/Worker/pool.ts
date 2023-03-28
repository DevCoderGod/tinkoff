class Pool{
	
	items:number[]
	free:boolean[]
	size:number
	available:number
	current:number

	constructor(low:number, top:number){
		this.items = []
		this.free = []
		this.size = 0
		this.available = 0
		do{
			this.items.push(low)
			this.free.push(true)
			this.size++
			this.available++		
			low++
		} while (low<top) 
		
		const length = this.items.length
		if(length>0){
			this.current = 0
			this.size = length
			this.available = length		
		} else throw new Error(`Pool: constructor abort. pool is emty`)
		console.log(' Pool: constructor done. available = ', this.available)
	}

	next(){
		let item = null
		let free = false
		let current = this.current
		do{
			item = this.items[this.current]
			free = this.free[this.current]
			if(item && free){
				this.current++
				if(this.current === this.size) this.current = 0
				return item
			}
			this.current++
			if(this.current === this.size) this.current = 0
			if(this.current === current) return null
		} while(!item || !free)
		return item
	}

	capture(){
		if(!this.available) return null
		const item = this.next()
		if(!item) return null
		const index = this.items.indexOf(item)
		this.free[index] = false
		this.available--
		return item
	}

	release(item:number){
		const index =  this.items.indexOf(item)
		if(index<0) throw new Error(`Pool: release unexpected item`)
		if(this.free[index]) throw new Error(`Pool: release not captured`)
		this.free[index] = true
		this.available++
	}
}

export const pool = new Pool(8900,8902)