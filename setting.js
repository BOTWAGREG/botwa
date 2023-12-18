const chalk = require('chalk')
const fs = require('fs')

//SELEBIHNYA JIKA MAU SETTING ADA DI FOLDER JS 

//api ibeng
global.apiibeng = 'orIZRejErR' // letakan apikey kalian daftar dlu ya
// •> https://api.ibeng.tech
//lalu klian daftar jika sudah daftar di dashboard ada tulisan apikey kalian salin aja Paste di 'APIKEY'





global.owner = ['628990230055'] 
global.ownernomer = "628990230055"
global.socialmedia = "TT: gregtzyy"
global.yutub = "YT: -"
global.lokasi = "Indonesia"
global.sakuraurl = 'https://lenttobs.xyz'
global.packgename = "by" 
global.author = "Gregg" 
global.title = 'GREG-BOT'
global.body = 'GREG-BOT'
global.welcome = false //false mati true nyala
global.left = false //false mati true nyala
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})