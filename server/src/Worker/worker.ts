import { workerData, parentPort } from 'worker_threads'

const timer = setInterval(()=>{
	console.log('worker process.pid === ', process.pid)
	console.log('worker process workerData === ', workerData)
},3000)