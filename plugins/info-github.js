let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `📮 *JNGN LUPA FOLLOW*

Atau Bisa Lewat Link Dibawah Ini :
https://github.com/Raya2399
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*FIN BOT GITHUB*', 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = /^(github)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

export default handler 
