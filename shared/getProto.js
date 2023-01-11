const https = require('https')
const path = require('path')
const  fs = require('fs')
const admzip = require('adm-zip')

const arch=path.join(__dirname, 'proto.zip')
const file = fs.createWriteStream(arch)
const url = 'https://codeload.github.com/Tinkoff/investAPI/zip/main'

file.on('close',async ()=>{
	const azip = new admzip(arch)
	try {
		console.log(' Распаковка ')
		await azip.extractAllTo(__dirname,true)
		await fs.mkdir('./shared/tsproto',()=>{})
	} catch (e) { 
		console.log('Ошибка распаковки: ',e)
	}
	fs.unlink(arch, e=> console.log(' Успех! '))
})

const req = https.get(url, res => res.pipe(file))
	.on('error', e => console.error('Ошибка загрузки: ', e))

console.log(' Загрузка ')
req.end()