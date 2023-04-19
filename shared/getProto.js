import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { get } from 'https'
import { join } from 'path'
import { createWriteStream, mkdir, unlink } from 'fs'
import admzip from 'adm-zip'

const __dirname = dirname(fileURLToPath(import.meta.url))

const arch=join(__dirname, 'proto.zip')
const file = createWriteStream(arch)
const url = 'https://codeload.github.com/Tinkoff/investAPI/zip/refs/tags/v1.3'


file.on('close',async ()=>{
	const azip = new admzip(arch)
	try {
		console.log(' Распаковка ')
		await azip.extractAllTo(__dirname,true)
		await mkdir('./tsproto',()=>{})//дир для компиляции
	} catch (e) { 
		console.log('Ошибка распаковки: ',e)
	}
	unlink(arch, e=> console.log(' Успех! '))
})

const req = get(url, res => res.pipe(file))
	.on('error', e => console.error('Ошибка загрузки: ', e))

console.log(' Загрузка ')
req.end()