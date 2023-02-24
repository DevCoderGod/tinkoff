import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import glob from "glob"
import fs from "fs"
import ncp from "ncp"

const __dirname = dirname(fileURLToPath(import.meta.url))
const source = "../shared/tsproto/"
const destination = __dirname + "/src/tApi/grpc"

function patch(){

	//timostamm/protobuf-ts issue add enable_import_extensions option #233   https://github.com/timostamm/protobuf-ts/pull/233
	glob(destination + '/**/*.ts', (err, files) => {
		files.forEach(file => {
			let content = fs.readFileSync(file, 'utf-8')

			content = content.split('\n').map(s => s.replace(/^(import .+? from ["']\..+?)(["'];)$/, '$1.js$2')).join('\n')

			fs.writeFileSync(file, content, 'utf-8')
			console.log(`${file} is patched`)
		})
		console.log(' patch is access! ')
	})

	// синхронно
	// const files = glob(destination + '/**/*.ts',{sync:true})
	// if(files.length > 0){
	// 	files.forEach(file => {
	// 		console.log('file === ',file)
	// 		let content = fs.readFileSync(file, 'utf-8')

	// 		content = content.split('\n').map(s => s.replace(/^(import .+? from ["']\..+?)(["'];)$/, '$1.js$2')).join('\n')

	// 		fs.writeFileSync(file, content, 'utf-8')
	// 	})
	// }
}

/*
fs.rmSync(destination, { force: true, recursive: true, maxRetries: 50 })
fs.mkdirSync(destination)

если destination не пустая, fs.rmSync, удаляя рекурсивно не блокирует поток(будто рекурсивные вызовы асинхронны).
соответственно fs.mkdirSync получает исключение EPERM. Если destination пуста - всё работает без ошибок.
destination удаляется уже после падения и следующий запуск (если destination отсутствует) без ошибок.

	node:fs:1395
	handleErrorFromBinding(ctx)
	^

	Error: EPERM: operation not permitted, mkdir 'C:\Tinkoff\tinkoff\server/src/tApi/grpc'
	    at Object.mkdirSync (node:fs:1395:3)
	    at start (file:///C:/Tinkoff/tinkoff/server/getGRPC.js:46:5)
	    at file:///C:/Tinkoff/tinkoff/server/getGRPC.js:74:1
	    at ModuleJob.run (node:internal/modules/esm/module_job:194:25) {
		  errno: -4048,
		  syscall: 'mkdir',
		  code: 'EPERM',
		  path: 'C:\\Tinkoff\\tinkoff\\server/src/tApi/grpc'
		}
*/

// костыль через setTimeout работает..
const delay = 2000
console.log(' clean... ')
fs.rm(destination, { force: true, recursive: true, maxRetries: 50 }, err => {
	if(err) throw new Error(' rm error = ',err)
	else {
		setTimeout(()=>{
			console.log(' make dir... ')
			fs.mkdir(destination,(err => {
				if(err){
					console.log('err === ',err)
					throw new Error(' mkdir error = ')
				}
				setTimeout(() => {
					console.log(' copy files... ')
					ncp(source, destination, err => {
					    if (err) throw new Error(' ncp err = ', err)
						setTimeout(() => {
							console.log(' patch... ')
							patch()
						},delay)
					})
				},delay)
			}))
		},delay)
	}
})