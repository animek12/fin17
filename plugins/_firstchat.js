import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `๐Hai, ${ucapan()}

${user.banned ? '๐ฎMaaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi' : `๐ฌ Terima kasih sudah menggunakan ${this.user.name} bantu?`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : '๐ฎNote: Jangan spal bot nya\nAtau kamu di banned', [user.banned ? 'OKE ๐' : '๐ธ MENU' user.banned ? 'Ok' : '.menu'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari ๐"
    if (time >= 4) {
        res = "Selamat pagi ๐"
    }
    if (time > 10) {
        res = "Selamat siang โ๏ธ"
    }
    if (time >= 15) {
        res = "Selamat sore ๐"
    }
    if (time >= 18) {
        res = "Selamat malam ๐"
    }
    return res