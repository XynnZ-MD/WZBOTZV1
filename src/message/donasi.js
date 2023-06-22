/*
Mau Yang No Enc Luh ?

https://wa.me/6285731947500
*/

const fs = require('fs')
const chalk = require('chalk')

// Jika tidak penting payment nya hapus aja
// Contoh gw gak punya gopay ya payment gopay gw hapus
// Hapusnya dari " > gopay : - " ya itulah
// Kalau mau ganti teks ganti aja mulai dari " *donasi* sampek Amin_ "

exports.donasi = (prefix) => {
return `
*Donasi*

  > Gopay : 082127124134
  > Dana : 082127124134
  > Ovo : -
  > Allpay : https://telegra.ph/file/000b2dbfa39746d183014.jpg
  > Saweria : -

_Terima Kasih Buat Kalian Kalian_
_Yang Sudah Berdonasi Semoga_
_Rejeki Kalian Lancar. Amin_
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
