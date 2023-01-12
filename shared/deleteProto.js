import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { join } from 'path'
import { stat, rm } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const files = [
	'tsconfig.tsbuildinfo',
	'/types',
	'/tsproto',
	'/investAPI-main',
]

console.log(' Удаление proto файлов ... ')

files.forEach(file => {
	const f = join(__dirname, file)
	stat(f, err => {
		if (!err) rm(f, { recursive: true }, err => console.log(`${f}:${err}`))
	})
})

console.log(' Удалено. ')