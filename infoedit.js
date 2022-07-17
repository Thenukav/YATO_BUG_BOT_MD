//https://s.id/imash

const fs = require('fs')
const chalk = require('chalk')


global.thumb = fs.readFileSync('./src/IMASHvm.jpg')
global.owner = ["94771323434","94779246969"] //owner
global.premium = ["94771323433","94779246969"] //sudo
global.emoji = "▸ ",
global.prefa = ['','!','.','-']
global.mess = {
    owner: 'You are not the owner of the bot',
    premium: 'CANT USE BOT wa.me/94771323434',
    wait: 'wait....',
    trues: 'Non',
    fuck: 'mmm..'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
