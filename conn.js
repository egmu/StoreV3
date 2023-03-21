// CREATE BY MELL

"use strict";
const { BufferJSON, WA_DEFAULT_EPHEMERAL, proto, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { downloadContentFromMessage, generateWAMessage, generateWAMessageFromContent, MessageType, buttonsMessage } = require("@adiwajshing/baileys")
const { exec, spawn } = require("child_process");
const { color, bgcolor, pickRandom, randomNomor } = require('./function/Data_Server_Bot/Console_Data')
const { formatp, removeEmojis, sendButLoc, bytesToSize, getBuffer, fetchJson, getRandom, getGroupAdmins, runtime, sleep, makeid, isUrl, generateProfilePicture, removebg, reSize } = require("./function/func_Server");
const { TelegraPh, UploadFileUgu, AnonFiles } = require("./function/uploader_Media");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./function/func_Addlist');
const { media_JSON, mess_JSON, setting_JSON, mode_JSON, antilink_JSON, db_user_JSON, server_eror_JSON, welcome_JSON, db_menfes_JSON, db_respon_list_JSON, auto_downloadTT_JSON } = require('./function/Data_Location.js')
const { mediafireDl } = require('./function/scrape_Mediafire')
const { webp2mp4File } = require("./function/Webp_Tomp4")
const { cerpen } = require('./function/Search_Cerpen')
const { bioskop, bioskopNow, latinToAksara, aksaraToLatin, gempa, gempaNow, jadwalTV, listJadwalTV, jadwalsholat} = require ('@bochilteam/scraper') 
const { jadibot, listJadibot } = require('./function/jadibot')

// database virtex
const { TelegraPh2, defaultq } = require ("./function/uploadImage");
const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
const ms = require("ms");
const chalk = require('chalk');
const axios = require("axios");
const qs = require("querystring");
const fetch = require("node-fetch");
const colors = require('colors/safe');
const ffmpeg = require("fluent-ffmpeg");
const moment = require("moment-timezone");
const { Primbon } = require("scrape-primbon");
const primbon = new Primbon()
let setting2 = require("./key.json");
const speed = require("performance-now")
const Exif = require("./function/set_WM_Sticker")
const exif = new Exif()
const os = require("os")
const msgFilter = require("./function/func_Spam");
const { stalkff, stalkml } = require("./function/func_Stalker");
const mekih = fs.readFileSync ('./function/mod.jpg')
let orang_spam = []
let medianya = []
let args = []
const mess = mess_JSON
const setting = setting_JSON
const modebot = mode_JSON
const antilink = antilink_JSON
const db_user = db_user_JSON
const server_eror = server_eror_JSON
const welcomeJson = welcome_JSON
const db_menfes = db_menfes_JSON
const db_respon_list = db_respon_list_JSON
const auto_downloadTT = auto_downloadTT_JSON
global.thumbnail = "./media/ok.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
const pp_bot = fs.readFileSync(thumbnail)
// global.autobio = false //auto ganti bio
moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async(conn, msg, m, setting, store, chatUpdate) => {
try {
let { ownerNumber, botName, smm_dana_nama, smm_dana_number } = setting
const { type, quotedMsg, mentioned, now, fromMe, isBaileys } = msg
if (msg.isBaileys) return
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const tanggal = moment().tz("Asia/Jakarta").format("ll")
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const time = moment(new Date()).format("HH:mm");
var chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
if (chats == undefined) { chats = '' }
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
const isGroup = msg.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
const isOwner = [`${setting.ownerNumber}`,"6289519240209@s.whatsapp.net","6289519240209@s.whatsapp.net"].includes(sender) ? true : false
const pushname = msg.pushName
 var budy = typeof m.text == "string" ? m.text : "";
 const body = chats.startsWith(prefix) ? chats : ''
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
 let text = args.join(" ");

const mek = m.messages[0];
// Random Image Simple Menu
global.thumb = { url: 'https://telegra.ph/file/d718d5a123a0943abfb30.jpg' }
global.visoka = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.menuimg = { url: 'https://telegra.ph/file/d718d5a123a0943abfb30.jpg' }
global.zy = { url: 'https://telegra.ph/file/d718d5a123a0943abfb30.jpg' }
global.logonya = fs.readFileSync("./media/gambarnye/thezyren.jpg")
global.thumbnailvid = { url: 'https://telegra.ph/file/d718d5a123a0943abfb30.jpg4' }
global.bgv = { url: 'https://a.uguu.se/YHuhGMUw.mp4' }
global.removebgkey = "o9jGwRuAbYFGprJDwZhEAsU1" //Login di https://www.remove.bg
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
const isCommand = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
  
const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender)
const autobio = false //auto ganti bio
const isModebot = modebot.includes(from) ? true : false
const isModebot2 = modebot.includes(from) ? true : false
const isWelcome = isGroup ? welcomeJson.includes(from) : false
const isAntiLink = antilink.includes(from) ? true : false
const isAutoDownTT = auto_downloadTT.includes(from) ? true : false

const quoted = msg.quoted ? msg.quoted : msg
var dataGroup = (type === 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
var dataPrivate = (type === "messageContextInfo") ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isButton = dataGroup.length !== 0 ? dataGroup : dataPrivate
var dataListG = (type === "listResponseMessage") ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
var dataList = (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isListMessage = dataListG.length !== 0 ? dataListG : dataList

const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isVideo = (type == 'videoMessage')
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isSticker = (type == 'stickerMessage')
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
	  const reply2 = m.reply;
const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const tzy = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "14169948404-1305080833@g.us" } : {}) },"message": {"extendedTextMessage": {"text": "Matchaalalumu","previewType": "NONE","contextInfo": {"stanzaId": "3EB0382EDBB2","participant": "6289519240209@s.whatsapp.net" }}}}
//=================================================//

try {
var pp_user = await conn.profilePictureUrl(sender, 'image')
} catch {
var pp_user = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
conn.sendButImage = async(id, text1, desc1, gam1, but = [], options1, options2 = {}) => {
let buttonMessage = {
image: gam1,
caption: text1,
footer: desc1,
buttons: but,
contextInfo: options1,
}
return await conn.sendMessage(id, buttonMessage, options2)
}        
//=================================================//
conn.sendButGif = async (id, text1, desc1, gam1, gam2, but = [], options = {}) => {
const buttonMessage = { 
buttons: but,
video: gam1, 
jpegThumbnail: gam2,
caption: text1, 
footer: desc1, 
gifPlayback: true, 
}
return await conn.sendMessage(id, buttonMessage, options)
}    
//=================================================//
conn.sendButVideo = async (id, text1, desc1, gam1, gam2, but = [], options = {}) => {
const listMessage = { 
buttons: but,
video: gam1, 
jpegThumbnail: gam2,
caption: text1, 
footer: desc1, 
}
return await conn.sendMessage(id, listMessage, options)
}                        
//=================================================//
conn.sendButLoc = async(id, text1, desc1, gam1, but = [], options) => {
let buttonMessage = {
location: { jpegThumbnail: gam1 } ,
caption: text1,
footer: desc1,
buttons: but,        
}
return await conn.sendMessage(id, buttonMessage, options)
}
const PathAuto = "./function/menuPath/"
conn.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted });
  };
   conn.sendButMessage = async (jid, desc = '', footer = '', but = [], options = {}) => {
        var buttonMessage = {
            text: desc,
            footer: footer,
            buttons: but,
            headerType: 1
        }

        conn.sendMessage(jid, buttonMessage, options)
    }
function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = conn.sendMessage(from, { text: teks, mentions: mems })
return res
} else {
let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
return res
}
}

function monospace(string) {
return '```' + string + '```'
}

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
// Public & Self
if (!conn.public) {
if (!isOwner) return
}
const q1 = q.split('&')[0];
const q2 = q.split('&')[1];
const q3 = q.split('&')[2];	

const isEmoji = (emo) => {
let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
let regexEmoji = new RegExp(emoji_ranges, 'gi');
return emo.match(regexEmoji)
}

const reply = (teks) => {conn.sendMessage(from, { text: teks }, { quoted: msg })}

if (isGroup && isAntiLink) {
if (!isBotGroupAdmins) return reply('Untung Bot Bukan Admin')
var linkgce = await conn.groupInviteCode(from)
if (chats.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(chats)) {
let bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isGroupAdmins) return reply(bvl)
if (fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
await conn.sendMessage(from, { delete: msg.key })
mentions(`「 ANTILINK 」\n\n@${sender.split('@')[0]} Kamu mengirim link group, maaf bot akan kick kamu dari grup`, [sender])
await sleep(3000)
conn.groupParticipantsUpdate(from, [sender], "remove")
} else {
}
}
if (isOwner && isModebot) {
if (!isOwner) return reply('Maaf kamu bukan Owner')
if (chats.includes(botNumber.public == true)) return reply("Sudah Active")
botNumber.public = true 

}
if (isOwner && isModebot2) {
if (!isOwner) return reply('Maaf kamu bukan Owner')
if (chats.includes(botNumber.public == false)) return reply("Sudah Active")
botNumber.public = false 

}


if (isGroup && isAutoDownTT){
if (chats.match(/(tiktok.com)/gi)){
reply('Url tiktok terdekteksi\nWait mengecek data url.')
await sleep(3000)
var tt_res = await fetchJson(`https://saipulanuar.ga/api/download/tiktok2?url=${chats}&apikey=jPHjZpQF`)
reply(`𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗

𝘼𝙪𝙩𝙝𝙤𝙧: Nov Xd
𝙅𝙪𝙙𝙪𝙡: ${tt_res.result.judul}
𝙎𝙤𝙪𝙧𝙘𝙚: ${chats}

Video sedang dikirim...`)
conn.sendMessage(sender,{video:{url:tt_res.result.video.link1}, caption:'No Watermark!'}, {quotes:msg})
if (isGroup) return conn.sendMessage(from, {text:'Media sudah dikirim lewat chat pribadi bot.'}, {quoted:msg})
}}

if (!isCmd && isGroup && isAlreadyResponList(from, chats, db_respon_list)) {
var get_data_respon = getDataResponList(from, chats, db_respon_list)
if (get_data_respon.isImage === false) {
conn.sendMessage(from, { text: sendResponList(from, chats, db_respon_list) }, {
quoted: msg
})
} else {
conn.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: msg
})
}
}

const sendContact = (jid, numbers, name, quoted, mn) => {
let number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:' + name + '\n'
+ 'ORG:;\n'
+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
+ 'END:VCARD'
return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
}

function toRupiah(angka) {
var saldonyeini = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldonyeini += angkarev.substr(i, 3) + '.';
return '' + saldonyeini.split('', saldonyeini.length - 1).reverse().join('');
}
// try {
//     let user = await global['db']['data']['users'][m['sender']];
//     let chats = await global['db']['data']['chats'][m['chat']];
//     let setting = await global['db']['data']['settings'][botNumber];
//     let isNumber = (_0xfbe1x5) => {
//         return typeof _0xfbe1x5 === 'number' && !isNaN(_0xfbe1x5)
//     };
//     if (typeof user !== 'object') {
//         db['data']['users'][m['sender']] = {}
//     };
//     if (user) {
//         if (!('premium' in user)) {
//             user['premium'] = false
//         };
//         if (!isNumber(user['premiumTime'])) {
//             user['premiumTime'] = 0
//         };
//         if (!('banned' in user)) {
//             user['banned'] = false
//         };
//         if (!'BannedReason' in user) {
//             user['BannedReason'] = ''
//         };
//         if (!isNumber(user['afkTime'])) {
//             user['afkTime'] = -1
//         };
//         if (!isNumber(user['pc'])) {
//             user['pc'] = 0
//         };
//         if (!('afkReason' in user)) {
//             user['afkReason'] = ''
//         };
//         if (!('language' in user)) {
//             user['language'] = 'id'
//         };
//         if (!isNumber(user['limit'])) {
//             user['limit'] = limitawal['free']
//         };
//         if (!isNumber(user['healt'])) {
//             user['healt'] = 100
//         };
//         if (!isNumber(user['healtmonster'])) {
//             user['healtmonster'] = 0
//         };
//         if (!isNumber(user['title'])) {
//             user['title'] = 0
//         };
//         if (!isNumber(user['stamina'])) {
//             user['stamina'] = 100
//         };
//         if (!isNumber(user['haus'])) {
//             user['haus'] = 100
//         };
//         if (!isNumber(user['laper'])) {
//             user['laper'] = 100
//         };
//         if (!isNumber(user['level'])) {
//             user['level'] = 0
//         };
//         if (!('pasangan' in user)) {
//             user['pasangan'] = ''
//         };
//         if (!isNumber(user['exp'])) {
//             user['exp'] = 0
//         };
//         if (!isNumber(user['korbanngocok'])) {
//             user['korbanngocok'] = 0
//         };
//         if (!isNumber(user['ojekk'])) {
//             user['ojekk'] = 0
//         };
//         if (!isNumber(user['trofi'])) {
//             user['trofi'] = 0
//         };
//         if (!user['rtrofi']) {
//             user['rtrofi'] = 'Perunggu'
//         };
//         if (!isNumber(user['troopcamp'])) {
//             user['troopcamp'] = 0
//         };
//         if (!isNumber(user['coin'])) {
//             user['coin'] = 0
//         };
//         if (!isNumber(user['atm'])) {
//             user['atm'] = 0
//         };
//         if (!isNumber(user['tprem'])) {
//             user['tprem'] = 0
//         };
//         if (!isNumber(user['tigame'])) {
//             user['tigame'] = 50
//         };
//         if (!isNumber(user['lastclaim'])) {
//             user['lastclaim'] = 0
//         };
//         if (!isNumber(user['money'])) {
//             user['money'] = 1000
//         };
//         if (!isNumber(user['bank'])) {
//             user['bank'] = 1000
//         };
//         if (!isNumber(user['rumahsakit'])) {
//             user['rumahsakit'] = 0
//         };
//         if (!isNumber(user['fortress'])) {
//             user['fortress'] = 0
//         };
//         if (!isNumber(user['shield'])) {
//             user['shield'] = false
//         };
//         if (!isNumber(user['pertanian'])) {
//             user['pertanian'] = 0
//         };
//         if (!isNumber(user['pertambangan'])) {
//             user['pertambangan'] = 0
//         };
//         if (!isNumber(user['botol'])) {
//             user['botol'] = 0
//         };
//         if (!isNumber(user['kardus'])) {
//             user['kardus'] = 0
//         };
//         if (!isNumber(user['kaleng'])) {
//             user['kaleng'] = 0
//         };
//         if (!isNumber(user['aqua'])) {
//             user['aqua'] = 0
//         };
//         if (!isNumber(user['diamond'])) {
//             user['diamond'] = 0
//         };
//         if (!isNumber(user['iron'])) {
//             user['iron'] = 0
//         };
//         if (!isNumber(user['emas'])) {
//             user['emas'] = 0
//         };
//         if (!isNumber(user['arlok'])) {
//             user['arlok'] = 0
//         };
//         if (!isNumber(user['common'])) {
//             user['common'] = 0
//         };
//         if (!isNumber(user['boxs'])) {
//             user['boxs'] = 0
//         };
//         if (!isNumber(user['cupon'])) {
//             user['cupon'] = 0
//         };
//         if (!isNumber(user['as'])) {
//             user['as'] = 0
//         };
//         if (!isNumber(user['uncommon'])) {
//             user['uncommon'] = 0
//         };
//         if (!isNumber(user['mythic'])) {
//             user['mythic'] = 0
//         };
//         if (!isNumber(user['legendary'])) {
//             user['legendary'] = 0
//         };
//         if (!isNumber(user['glory'])) {
//             user['glory'] = 0
//         };
//         if (!isNumber(user['enchant'])) {
//             user['enchant'] = 0
//         };
//         if (!isNumber(user['pet'])) {
//             user['pet'] = 0
//         };
//         if (!isNumber(user['psepick'])) {
//             user['psepick'] = 0
//         };
//         if (!isNumber(user['psenjata'])) {
//             user['psenjata'] = 0
//         };
//         if (!isNumber(user['potion'])) {
//             user['potion'] = 0
//         };
//         if (!isNumber(user['sampah'])) {
//             user['sampah'] = 0
//         };
//         if (!isNumber(user['armor'])) {
//             user['armor'] = 0
//         };
//         if (!isNumber(user['pancing'])) {
//             user['pancing'] = 0
//         };
//         if (!isNumber(user['apel'])) {
//             user['apel'] = 0
//         };
//         if (!isNumber(user['ayamb'])) {
//             user['ayamb'] = 0
//         };
//         if (!isNumber(user['ayamg'])) {
//             user['ayamg'] = 0
//         };
//         if (!isNumber(user['sapir'])) {
//             user['sapir'] = 0
//         };
//         if (!isNumber(user['ssapi'])) {
//             user['ssapi'] = 0
//         };
//         if (!isNumber(user['esteh'])) {
//             user['esteh'] = 0
//         };
//         if (!isNumber(user['leleg'])) {
//             user['leleg'] = 0
//         };
//         if (!isNumber(user['leleb'])) {
//             user['leleb'] = 0
//         };
//         if (!isNumber(user['sword'])) {
//             user['sword'] = 0
//         };
//         if (!isNumber(user['sworddurability'])) {
//             user['sworddurability'] = 0
//         };
//         if (!isNumber(user['pickaxe'])) {
//             user['pickaxe'] = 0
//         };
//         if (!isNumber(user['pickaxedurability'])) {
//             user['pickaxedurability'] = 0
//         };
//         if (!isNumber(user['fishingrod'])) {
//             user['fishingrod'] = 0
//         };
//         if (!isNumber(user['fishingroddurability'])) {
//             user['fishingroddurability'] = 0
//         };
//         if (!isNumber(user['umpan'])) {
//             user['umpan'] = 0
//         };
//         if (!isNumber(user['kucing'])) {
//             user['kucing'] = 0
//         };
//         if (!isNumber(user['kucinglastclaim'])) {
//             user['kucinglastclaim'] = 0
//         };
//         if (!isNumber(user['kuda'])) {
//             user['kuda'] = 0
//         };
//         if (!isNumber(user['kudalastclaim'])) {
//             user['kudalastclaim'] = 0
//         };
//         if (!isNumber(user['rubah'])) {
//             user['rubah'] = 0
//         };
//         if (!isNumber(user['rubahlastclaim'])) {
//             user['rubahlastclaim'] = 0
//         };
//         if (!isNumber(user['anjing'])) {
//             user['anjing'] = 0
//         };
//         if (!isNumber(user['anjinglastclaim'])) {
//             user['anjinglastclaim'] = 0
//         };
//         if (!isNumber(user['serigalalastclaim'])) {
//             user['serigalalastclaim'] = 0
//         };
//         if (!isNumber(user['nagalastclaim'])) {
//             user['nagalastclaim'] = 0
//         };
//         if (!isNumber(user['phonixlastclaim'])) {
//             user['phonixlastclaim'] = 0
//         };
//         if (!isNumber(user['griffinlastclaim'])) {
//             user['griffinlastclaim'] = 0
//         };
//         if (!isNumber(user['centaurlastclaim'])) {
//             user['centaurlastclaim'] = 0
//         };
//         if (!isNumber(user['makananpet'])) {
//             user['makananpet']
//         };
//         if (!isNumber(user['makanannaga'])) {
//             user['makanannaga'] = 0
//         };
//         if (!isNumber(user['makananphonix'])) {
//             user['makananphonix'] = 0
//         };
//         if (!isNumber(user['makanangriffin'])) {
//             user['makanangriffin'] = 0
//         };
//         if (!isNumber(user['makananserigala'])) {
//             user['makananserigala'] = 0
//         };
//         if (!isNumber(user['makanancentaur'])) {
//             user['makanancentaur'] = 0
//         };
//         if (!isNumber(user['warn'])) {
//             user['warn'] = 0
//         };
//         if (!isNumber(user['healthmonster'])) {
//             user['healthmonster'] = 0
//         };
//         if (!isNumber(user['anakkucing'])) {
//             user['anakkucing'] = 0
//         };
//         if (!isNumber(user['anakkuda'])) {
//             user['anakkuda'] = 0
//         };
//         if (!isNumber(user['anakrubah'])) {
//             user['anakrubah'] = 0
//         };
//         if (!isNumber(user['anakanjing'])) {
//             user['anakanjing'] = 0
//         };
//         if (!isNumber(user['serigala'])) {
//             user['serigala'] = 0
//         };
//         if (!isNumber(user['anakserigala'])) {
//             user['anakserigala'] = 0
//         };
//         if (!isNumber(user['naga'])) {
//             user['naga'] = 0
//         };
//         if (!isNumber(user['anaknaga'])) {
//             user['anaknaga'] = 0
//         };
//         if (!isNumber(user['phonix'])) {
//             user['phonix'] = 0
//         };
//         if (!isNumber(user['anakphonix'])) {
//             user['anakphonix'] = 0
//         };
//         if (!isNumber(user['griffin'])) {
//             user['griffin'] = 0
//         };
//         if (!isNumber(user['anakgriffin'])) {
//             user['anakgriffin'] = 0
//         };
//         if (!isNumber(user['kyubi'])) {
//             user['kyubi'] = 0
//         };
//         if (!isNumber(user['anakkyubi'])) {
//             user['anakkyubi'] = 0
//         };
//         if (!isNumber(user['centaur'])) {
//             user['centaur'] = 0
//         };
//         if (!isNumber(user['anakcentaur'])) {
//             user['anakcentaur'] = 0
//         };
//         if (!isNumber(user['makananpet'])) {
//             user['makananpet'] = 0
//         };
//         if (!isNumber(user['antispam'])) {
//             user['antispam'] = 0
//         };
//         if (!isNumber(user['antispamlastclaim'])) {
//             user['antispamlastclaim'] = 0
//         };
//         if (!isNumber(user['kayu'])) {
//             user['kayu'] = 0
//         };
//         if (!('kingdom' in user)) {
//             user['kingdom'] = false
//         };
//         if (!isNumber(user['batu'])) {
//             user['batu'] = 0
//         };
//         if (!isNumber(user['ramuan'])) {
//             user['ramuan'] = 0
//         };
//         if (!isNumber(user['string'])) {
//             user['string'] = 0
//         };
//         if (!isNumber(user['sword'])) {
//             user['sword'] = 0
//         };
//         if (!isNumber(user['sworddurability'])) {
//             user['sworddurability'] = 0
//         };
//         if (!isNumber(user['pickaxe'])) {
//             user['pickaxe'] = 0
//         };
//         if (!isNumber(user['pickaxedurability'])) {
//             user['pickaxedurability'] = 0
//         };
//         if (!isNumber(user['fishingrod'])) {
//             user['fishingrod'] = 0
//         };
//         if (!isNumber(user['fishingroddurability'])) {
//             user['fishingroddurability'] = 0
//         };
//         if (!isNumber(user['paus'])) {
//             user['paus'] = 0
//         };
//         if (!isNumber(user['kepiting'])) {
//             user['kepiting'] = 0
//         };
//         if (!isNumber(user['gurita'])) {
//             user['gurita'] = 0
//         };
//         if (!isNumber(user['cumi'])) {
//             user['cumi'] = 0
//         };
//         if (!isNumber(user['buntal'])) {
//             user['buntal'] = 0
//         };
//         if (!isNumber(user['dory'])) {
//             user['dory'] = 0
//         };
//         if (!isNumber(user['lumba'])) {
//             user['lumba'] = 0
//         };
//         if (!isNumber(user['lobster'])) {
//             user['lobster'] = 0
//         };
//         if (!isNumber(user['hiu'])) {
//             user['hiu'] = 0
//         };
//         if (!isNumber(user['udang'])) {
//             user['udang'] = 0
//         };
//         if (!isNumber(user['ikan'])) {
//             user['ikan'] = 0
//         };
//         if (!isNumber(user['nila'])) {
//             user['nila'] = 0
//         };
//         if (!isNumber(user['bawal'])) {
//             user['bawal'] = 0
//         };
//         if (!isNumber(user['lele'])) {
//             user['lele'] = 0
//         };
//         if (!isNumber(user['orca'])) {
//             user['orca'] = 0
//         };
//         if (!isNumber(user['banteng'])) {
//             user['banteng'] = 0
//         };
//         if (!isNumber(user['harimau'])) {
//             user['harimau'] = 0
//         };
//         if (!isNumber(user['gajah'])) {
//             user['gajah'] = 0
//         };
//         if (!isNumber(user['kambing'])) {
//             user['kambing'] = 0
//         };
//         if (!isNumber(user['panda'])) {
//             user['panda'] = 0
//         };
//         if (!isNumber(user['buaya'])) {
//             user['buaya'] = 0
//         };
//         if (!isNumber(user['kerbau'])) {
//             user['kerbau'] = 0
//         };
//         if (!isNumber(user['sapi'])) {
//             user['sapi'] = 0
//         };
//         if (!isNumber(user['monyet'])) {
//             user['monyet'] = 0
//         };
//         if (!isNumber(user['babihutan'])) {
//             user['babihutan'] = 0
//         };
//         if (!isNumber(user['babi'])) {
//             user['babi'] = 0
//         };
//         if (!isNumber(user['ayam'])) {
//             user['ayam'] = 0
//         };
//         if (!isNumber(user['lastadventure'])) {
//             user['lastadventure'] = 0
//         };
//         if (!isNumber(user['lastopen'])) {
//             user['lastopen'] = 0
//         };
//         if (!isNumber(user['lastkill'])) {
//             user['lastkill'] = 0
//         };
//         if (!isNumber(user['lastbanned'])) {
//             user['lastbanned'] = 0
//         };
//         if (!isNumber(user['lastnguli'])) {
//             user['lastnguli'] = 0
//         };
//         if (!isNumber(user['lastfishing'])) {
//             user['lastfishing'] = 0
//         };
//         if (!isNumber(user['lastdungeon'])) {
//             user['lastdungeon'] = 0
//         };
//         if (!isNumber(user['lastwar'])) {
//             user['lastwar'] = 0
//         };
//         if (!isNumber(user['lastsda'])) {
//             user['lastsda'] = 0
//         };
//         if (!isNumber(user['lastberbru'])) {
//             user['lastberbru'] = 0
//         };
//         if (!isNumber(user['lastduel'])) {
//             user['lastduel'] = 0
//         };
//         if (!isNumber(user['lastjb'])) {
//             user['lastjb'] = 0
//         };
//         if (!isNumber(user['lastSetStatus'])) {
//             user['lastSetStatus'] = 0
//         };
//         if (!isNumber(user['lastmining'])) {
//             user['lastmining'] = 0
//         };
//         if (!isNumber(user['lasthunt'])) {
//             user['lasthunt'] = 0
//         };
//         if (!isNumber(user['lastngocok'])) {
//             user['lastngocok'] = 0
//         };
//         if (!isNumber(user['lastgift'])) {
//             user['lastgift'] = 0
//         };
//         if (!isNumber(user['lastrob'])) {
//             user['lastrob'] = 0
//         };
//         if (!isNumber(user['lastngojek'])) {
//             user['lastngojek'] = 0
//         };
//         if (!isNumber(user['lastgrab'])) {
//             user['lastgrab'] = 0
//         };
//         if (!isNumber(user['lastberkebon'])) {
//             user['lastberkebon'] = 0
//         };
//         if (!isNumber(user['lastcodereg'])) {
//             user['lastcodereg'] = 0
//         };
//         if (!isNumber(user['lastdagang'])) {
//             user['lastdagang'] = 0
//         };
//         if (!isNumber(user['lasthourly'])) {
//             user['lasthourly'] = 0
//         };
//         if (!isNumber(user['lastweekly'])) {
//             user['lastweekly'] = 0
//         };
//         if (!isNumber(user['lastmonthly'])) {
//             user['lastmonthly'] = 0
//         };
//         if (!isNumber(user['lastIstigfar'])) {
//             user['lastIstigfar'] = 0
//         };
//         if (!isNumber(user['lastturu'])) {
//             user['lastturu'] = 0
//         };
//         if (!isNumber(user['lastseen'])) {
//             user['lastseen'] = 0
//         };
//         if (!isNumber(user['lastbansos'])) {
//             user['lastbansos'] = 0
//         };
//         if (!isNumber(user['lastrampok'])) {
//             user['lastrampok'] = 0
//         };
//         if (!('registered' in user)) {
//             user['registered'] = false
//         };
//         if (!user['registered']) {
//             if (!('name' in user)) {
//                 user['name'] = m['pushName'] || 'No Name'
//             };
//             if (!('gender' in user)) {
//                 user['gender'] = ''
//             };
//             if (!('hobi' in user)) {
//                 user['hobi'] = ''
//             };
//             if (!('serialNumber' in user)) {
//                 user['serialNumber'] = ''
//             };
//             if (!isNumber(user['apel'])) {
//                 user['apel'] = 0
//             };
//             if (!isNumber(user['anggur'])) {
//                 user['anggur'] = 0
//             };
//             if (!isNumber(user['jeruk'])) {
//                 user['jeruk'] = 0
//             };
//             if (!isNumber(user['semangka'])) {
//                 user['semangka'] = 0
//             };
//             if (!isNumber(user['mangga'])) {
//                 user['mangga'] = 0
//             };
//             if (!isNumber(user['stroberi'])) {
//                 user['stroberi'] = 0
//             };
//             if (!isNumber(user['pisang'])) {
//                 user['pisang'] = 0
//             };
//             if (!isNumber(user['kayu'])) {
//                 user['kayu'] = 0
//             };
//             if (!isNumber(user['emas'])) {
//                 user['emas'] = 0
//             };
//             if (!isNumber(user['makanan'])) {
//                 user['makanan'] = 0
//             };
//             if (!isNumber(user['bibitanggur'])) {
//                 user['bibitanggur'] = 0
//             };
//             if (!isNumber(user['bibitpisang'])) {
//                 user['bibitpisang'] = 0
//             };
//             if (!isNumber(user['bibitapel'])) {
//                 user['bibitapel'] = 0
//             };
//             if (!isNumber(user['bibitmangga'])) {
//                 user['bibitmangga'] = 0
//             };
//             if (!isNumber(user['bibitjeruk'])) {
//                 user['bibitjeruk'] = 0
//             };
//             if (!isNumber(user['gardenboxs'])) {
//                 user['gardenboxs'] = 0
//             };
//             if (!isNumber(user['age'])) {
//                 user['age'] = -1
//             };
//             if (!isNumber(user['premiumDate'])) {
//                 user['premiumDate'] = -1
//             };
//             if (!isNumber(user['regTime'])) {
//                 user['regTime'] = -1
//             }
//         };
//         if (!isNumber(user['level'])) {
//             user['level'] = 0
//         };
//         if (!user['job']) {
//             user['job'] = 'Pengangguran'
//         };
//         if (!user['lbars']) {
//             user['lbars'] = '[▒▒▒▒▒▒▒▒▒]'
//         };
//         if (!user['role']) {
//             user['role'] = 'Newbie ㋡'
//         };
//         if (!('autolevelup' in user)) {
//             user['autolevelup'] = true
//         };
//         if (!('lastIstigfar' in user)) {
//             user['lastIstigfar'] = true
//         }
//     } else {
//         db['data']['users'][m['sender']] = {
//             premium: false,
//             banned: false,
//             afkTime: -1,
//             pc: 0,
//             afkReason: '',
//             language: 'id',
//             limit: limitawal['free'],
//             healt: 100,
//             title: '',
//             healtmonster: 0,
//             haus: 100,
//             laper: 100,
//             tprem: 0,
//             stamina: 100,
//             level: 0,
//             pasangan: '',
//             exp: 0,
//             coin: 0,
//             atm: 0,
//             tigame: 50,
//             lastclaim: 0,
//             money: 1000,
//             bank: 1000,
//             diamond: 0,
//             iron: 0,
//             pisang: 0,
//             anggur: 0,
//             mangga: 0,
//             jeruk: 0,
//             apel: 0,
//             bibitpisang: 0,
//             bibitanggur: 0,
//             bibitmangga: 0,
//             bibitjeruk: 0,
//             bibitapel: 0,
//             gardenboxs: 0,
//             emas: 0,
//             common: 0,
//             boxs: 0,
//             cupon: 0,
//             uncommon: 0,
//             mythic: 0,
//             legendary: 0,
//             rumahsakit: 0,
//             fortress: 0,
//             trofi: 0,
//             rtrofi: 'perunggu',
//             makanan: 0,
//             troopcamp: 0,
//             shield: 0,
//             arlok: 0,
//             ojekk: 0,
//             korbanngocok: 0,
//             as: 0,
//             paus: 0,
//             kepiting: 0,
//             gurita: 0,
//             cumi: 0,
//             buntal: 0,
//             dory: 0,
//             lumba: 0,
//             lobster: 0,
//             hiu: 0,
//             lele: 0,
//             nila: 0,
//             bawal: 0,
//             udang: 0,
//             ikan: 0,
//             orca: 0,
//             banteng: 0,
//             harimau: 0,
//             gajah: 0,
//             kambing: 0,
//             panda: 0,
//             buaya: 0,
//             kerbau: 0,
//             sapi: 0,
//             monyet: 0,
//             babihutan: 0,
//             babi: 0,
//             ayam: 0,
//             apel: 20,
//             ayamb: 0,
//             ayamg: 0,
//             ssapi: 0,
//             sapir: 0,
//             leleb: 0,
//             leleg: 0,
//             esteh: 0,
//             pet: 0,
//             potion: 0,
//             sampah: 0,
//             armor: 0,
//             kucing: 0,
//             kucinglastclaim: 0,
//             kuda: 0,
//             kudalastclaim: 0,
//             rubah: 0,
//             rubahlastclaim: 0,
//             anjing: 0,
//             anjinglastclaim: 0,
//             naga: 0,
//             nagalastclaim: 0,
//             griffin: 0,
//             griffinlastclaim: 0,
//             centaur: 0,
//             centaurlastclaim: 0,
//             serigala: 0,
//             serigalalastclaim: 0,
//             phonix: 0,
//             phonixlastclaim: 0,
//             makanannaga: 0,
//             makananphonix: 0,
//             makanancentaur: 0,
//             makananserigala: 0,
//             BannedReason: '',
//             warn: 0,
//             anakkucing: 0,
//             anakkuda: 0,
//             anakrubah: 0,
//             anakanjing: 0,
//             makananpet: 0,
//             antispam: 0,
//             antispamlastclaim: 0,
//             kayu: 0,
//             batu: 0,
//             string: 0,
//             umpan: 0,
//             sword: 0,
//             sworddurability: 0,
//             pickaxe: 0,
//             pickaxedurability: 0,
//             fishingrod: 0,
//             fishingroddurability: 0,
//             lastadventure: 0,
//             lastbanned: 0,
//             lastopen: 0,
//             lastkill: 0,
//             lastnguli: 0,
//             lastfishing: 0,
//             lastdungeon: 0,
//             lastduel: 0,
//             lastmining: 0,
//             lasthourly: 0,
//             lasthunt: 0,
//             lastweekly: 0,
//             lastmonthly: 0,
//             lastjb: 0,
//             lastrob: 0,
//             lastdaang: 0,
//             lastngojek: 0,
//             lastgrab: 0,
//             lastngocok: 0,
//             lastturu: 0,
//             lastseen: 0,
//             lastSetStatus: 0,
//             registered: false,
//             apel: 20,
//             mangga: 0,
//             stroberi: 0,
//             semangka: 0,
//             jeruk: 0,
//             semangka: 0,
//             premiumTime: 0,
//             job: 'Pengangguran',
//             lbars: '[▒▒▒▒▒▒▒▒▒]',
//             role: 'Newbie ㋡',
//             registered: false,
//             name: m['pushName'] || 'No Name',
//             gender: '',
//             hobi: '',
//             serialNumber: '',
//             age: -1,
//             premiumDate: -1,
//             regTime: -1,
//             autolevelup: true,
//             lastIstigfar: 0
//         }
//     };
//     if (typeof chats !== 'object') {
//         db['data']['chats'][m['chat']] = {}
//     };
//     if (chats) {
//         if (!('name' in chats)) {
//             chats['name'] = groupName ? groupName : '-'
//         };
//         if (!('goodbye' in chats)) {
//             chats['goodbye'] = true
//         };
//         if (!('welcome' in chats)) {
//             chats['welcome'] = true
//         };
//         if (!('promote' in chats)) {
//             chats['promote'] = true
//         };
//         if (!('demote' in chats)) {
//             chats['demote'] = true
//         };
//         if (!('mute' in chats)) {
//             chats['mute'] = false
//         };
//         if (!('captionPay' in chats)) {
//             chats['captionPay'] = ''
//         };
//         if (!('nsfw' in chats)) {
//             chats['nsfw'] = false
//         };
//         if (!('sewa' in chats)) {
//             chats['sewa'] = false
//         };
//         if (!('antilink' in chats)) {
//             chats['antilink'] = false
//         };
//         if (!('antionce' in chats)) {
//             chats['antionce'] = false
//         };
//         if (!('setWelcome' in chats)) {
//             chats['setWelcome'] = ''
//         };
//         if (!('setLeave' in chats)) {
//             chats['setLeave'] = ''
//         };
//         if (!('setPromote' in chats)) {
//             chats['setPromote'] = ''
//         };
//         if (!('setDemote' in chats)) {
//             chats['setDemote'] = ''
//         };
//         if (!('setProses' in chats)) {
//             chats['setProses'] = ''
//         };
//         if (!('setDone' in chats)) {
//             chats['setDone'] = ''
//         };
//         if (!('paygc' in chats)) {
//             chats['paygc'] = ''
//         };
//         if (!isNumber(chats['expired'])) {
//             chats['expired'] = 0
//         }
//     } else {
//         db['data']['chats'][m['chat']] = {
//             name: groupName ? groupName : '-',
//             goodbye: true,
//             welcome: true,
//             promote: true,
//             demote: true,
//             mute: false,
//             captionPay: '',
//             nsfw: false,
//             sewa: false,
//             antilink: false,
//             antionce: false,
//             setWelcome: '',
//             setLeave: '',
//             setPromote: '',
//             setDemote: '',
//             setProses: '',
//             setDone: '',
//             paygc: '',
//             expired: 0
//         }
//     };
//     if (typeof setting !== 'object') {
//         db['data']['settings'][botNumber] = {}
//     };
//     if (setting) {
//         };
//         if (!('autobio' in setting)) {
//             setting['autobio'] = autobio
//     } else {
//         db['data']['settings'][botNumber] = {

//             autobio: autobio,
            
//         }
//     }
// } catch (err) {
//     console['log'](err)
// }
let cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
if (satu == "premium"){ return db_user[x1].premium }
}
if (x1 == false) { return null } 
}
const fgif = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "videoMessage": {
                    "title": `© ${setting.ownerName}`,
                    "h": `Hmm`,
                    'seconds': '359996400',
                    'gifPlayback': 'true',
                    'caption': `${setting.ownerName}`,
                    'jpegThumbnail': pp_bot
                }
            }
        }
let setUser = (satu, dua, tiga) => { 
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){
if (satu == "±id"){ db_user[i].id = tiga
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
if (satu == "±name"){ db_user[i].name = tiga 
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
if (satu == "±seri"){ db_user[i].seri = tiga 
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))} 
if (satu == "±premium"){ db_user[i].premium = tiga 
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user))}
}})
}

const cekPesan = (satu, dua) => { 
let x2 = false
Object.keys(db_menfes).forEach((i) => {
if (db_menfes[i].id == dua){x2 = i}})
if (x2 !== false) {
if (satu == "id"){ return db_menfes[x2].id }
if (satu == "teman"){ return db_menfes[x2].teman }
}
if (x2 == false) { return null } 
}

const setRoom = (satu, dua, tiga) => { 
Object.keys(db_menfes).forEach((i) => {
if (db_menfes[i].id == dua){
if (satu == "±id"){ db_menfes[i].id = tiga
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))} 
if (satu == "±teman"){ db_menfes[i].teman = tiga 
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))} 
}})
}

conn.readMessages([msg.key])

if (command === 'buatroom') {
if (cekPesan("id", sender) !== null) return reply("Kamu Sedang Didalam roomchat ketik *#stopchat* untuk menghapus sesi chat.")
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
id: sender,
session: "buatroom",
data: {
penerima: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan tulis Nomor WhatsApp yg ingin Di ajak ngobrol*\n\n*Contoh:* 628xxxx")
} else {
reply("Kamu Sedang di dalam sesi room chat, menunggu konfirmasi dari penerima.")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "buatroom") {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_deposit.data.penerima = Number(chats);
if (data_deposit.data.penerima == sender.split('@')[0]) return reply('jangan nomor lu')
if (data_deposit.data.penerima == botNumber.split('@')[0]) return reply('itu kan nomor bot')
var cekap = await conn.onWhatsApp(chats+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Nomor +${chats}\ntidak terdaftar di WhatsApp\nSilahkan kirim nomor yg valid.`)
data_deposit.session = "number_orang";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
var penerimanyo = data_deposit.data.penerima +'@s.whatsapp.net'
mentions(`Berhasil mengirimkan undangan chat ke @${penerimanyo.split('@')[0]} tunggu dia menyetujui undangan tersebut untuk chatan secara anonim jadi dia tidak tau siapa anda`, [penerimanyo])
let roomC = `#${makeid(10)}`
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
var text_tersambung =`*Seseorang Mengajak Chating*\n\n*Dari:* Rahasia\n\nSilahkan klik button ya kak jika ingin menghubungkan chat *ANONYMOUS*`
let btn_room = [{ buttonId: `${prefix}buat_room_chat ${sender}|${data_deposit.data.penerima}@s.whatsapp.net|${roomC}`, buttonText: { displayText: 'Terima️' }, type: 1 }]
var but_room = {
text: text_tersambung,
footer: 'Klik button untuk menerima chat.',
buttons: btn_room,
mentions: [penerimanyo],
headerType: 1
}
conn.sendMessage(`${data_deposit.data.penerima}@s.whatsapp.net`, but_room)
}
}
} else if (command === 'setnamabot') {
if (!isOwner) return reply(mess.OnlyOwner)
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "setnamebot",
data: {
nama_baru: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Ok siap ownerku*\n*Tulis nama bot baru ya*")
} else {
reply("nama bot nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "setnamebot") {
if (chats.length === 0) return;
data_deposit.data.nama_baru = (chats)
data_deposit.session = "nama_barunya";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*SETNAMABOT SUKSES*
_*ID:* @${sender.split('@')[0]}_
_*Nama Lama:* ${setting.botName}_
_*Nama Baru:* ${data_deposit.data.nama_baru}_
_*Waktu:* ${jam} WIB_`)
await sleep(2000)
setting.botName = data_deposit.data.nama_baru
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
await sleep(2000)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'changename') {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "changename",
data: {
nama_baru: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*namalu apa? biar bot ganti*")
} else {
reply("nama nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "changename") {
if (chats.length === 0) return;
data_deposit.data.nama_baru = (chats)
data_deposit.session = "nama_barunya";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*SETNAMA SUKSES*
_*ID:* @${sender.split('@')[0]}_
_*Nama Lama:* ${cekUser("name", sender)}_
_*Nama Baru:* ${data_deposit.data.nama_baru}_
_*Waktu:* ${jam} WIB_`)
await sleep(1000)
setUser("±name", sender, data_deposit.data.nama_baru)
await sleep(2000)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'bitly_short') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "bitly_shortlink",
data: {
trannss: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim url yang ingin di shortilink ke bitly.*\n\n*Contoh:* https://google.com")
} else {
reply("Link url nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "bitly_shortlink") {
if (chats.length === 0) return;
data_deposit.data.trannss = (chats)
let ii = await fetchJson(`https://danzzapi.xyz/api/shortlink/bitly?url=${data_deposit.data.trannss}&apikey=danzz`)
if (ii.status == false) return reply('url tidak valid\nsilahkan kirim yg benar.')
data_deposit.session = "input_texttttranss";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*SHORTLINK*

*TYPE*
https://bitly.com/

*TIME*
${time} WIB

*HASIL*
${ii.result}

*ORIGINAL* 
${data_deposit.data.trannss}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'tinyurl_short') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "tinyurl_shortlink",
data: {
trannss: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim url yang ingin di shortilink ke tinyurl.*\n\n*Contoh:* https://google.com")
} else {
reply("Link url nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "tinyurl_shortlink") {
if (chats.length === 0) return;
data_deposit.data.trannss = (chats)
let ii = await fetchJson(`https://danzzapi.xyz/api/shortlink/tinyurl?url=${data_deposit.data.trannss}&apikey=danzz`)
if (ii.status == false) return reply('url tidak valid\nsilahkan kirim yg benar.')
data_deposit.session = "input_texttttranss";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*SHORTLINK*

*TYPE*
https://tinyurl.com/

*TIME*
${time} WIB

*HASIL*
${ii.result}

*ORIGINAL* 
${data_deposit.data.trannss}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'cuttly_short') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "cuttly_shortlink",
data: {
trannss: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim url yang ingin di shortilink ke cuttly.*\n\n*Contoh:* https://google.com")
} else {
reply("Link url nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "cuttly_shortlink") {
if (chats.length === 0) return;
data_deposit.data.trannss = (chats)
let ii = await fetchJson(`https://danzzapi.xyz/api/shortlink/cuttly?url=${data_deposit.data.trannss}&apikey=danzz`)
if (ii.status == false) return reply('url tidak valid\nsilahkan kirim yg benar.')
data_deposit.session = "input_texttttranss";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*SHORTLINK*

*TYPE*
https://cutt.ly/

*TIME*
${time} WIB

*HASIL*
${ii.result}

*ORIGINAL* 
${data_deposit.data.trannss}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'translate') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "translate",
data: {
trannss: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim text yang ingin jadi translate ke inggris.*\n\n*Contoh:* Hai sayang")
} else {
reply("Text nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "translate") {
if (chats.length === 0) return;
data_deposit.data.trannss = (chats)

var en = await fetchJson(`https://api.popcat.xyz/translate?to=en&text=${data_deposit.data.trannss}`) 
data_deposit.session = "input_texttttranss";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*TRANSLATE*
*IND :* ${data_deposit.data.trannss}
*EN :* ${en.translated}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
}  else if (command === 'stalknpm') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "stalknpm",
data: {
id_nya: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim Username Npm*\n*Contoh:* hikki-me")
} else {
reply("Username npmnya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "stalknpm") {
data_deposit.data.id_nya = (chats)

var x = await fetchJson(`https://api.popcat.xyz/npm?q=${data_deposit.data.id_nya}`)
if (x.error) return reply('Username tidak ditemukan\nSilahkan kirim username Npm yg benar.')
data_deposit.session = "use_npmstalk";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
var npm_text =`*NPM STALKER*
name : ${x.name}
version : ${x.version}
description : ${x.description}
author : ${x.author}
author_email : ${x.author_email}
last_published : ${x.last_published}
maintainers : ${x.maintainers}
repository : ${x.repository}

keywords : ${x.keywords}`
reply(npm_text)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'stalkgithub') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "stalkgithub",
data: {
id_nya: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim Username Github*")
} else {
reply("username nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "stalkgithub") {
data_deposit.data.id_nya = (chats)

var git = await fetchJson(`https://api.github.com/users/${data_deposit.data.id_nya}`)
data_deposit.session = "input_username_github";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
let textGitthub =`*STALK-GITHUB*
id : ${git.id}
login : ${git.login}
html_url : ${git.html_url}
type : ${git.type}
name : ${git.name}
location : ${git.location}
bio : ${git.bio}
public_repos : ${git.public_repos}
followers : ${git.followers}
following : ${git.following}
created : ${git.created_at}
updated : ${git.updated_at}`
reply(textGitthub)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'besarkecil') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "besar_kecilnya",
data: {
text_nya: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan tulis text yg ingin dijadiin besar dan kecil.*\n\n*Contoh:* hallo bro")
} else {
reply("nomor nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "besar_kecilnya") {
data_deposit.data.text_nya = (chats)
data_deposit.session = "text_nya_cuy";
var xx_besar = await fetchJson(`https://api.nataganz.com/api/random/besarkecil?text=${data_deposit.data.text_nya}&apikey=Pasha`)
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*BESAR KECIL*
*Text:* ${data_deposit.data.text_nya}
*Hasil:* ${xx_besar.result.list}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'bilangangka') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "bilang_angkanya",
data: {
text_nya: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan tulis number yg ingin dibilang.*\n\n*Contoh:* 1234")
} else {
reply("nomor nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "bilang_angkanya") {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_deposit.data.text_nya = Number(chats);
data_deposit.session = "text_nya_cuy";
var xx_bilang = await fetchJson(`https://api.nataganz.com/api/random/bilangangka?text=${data_deposit.data.text_nya}&apikey=Pasha`)
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*BILANG ANGKA*
*Nomor:* ${data_deposit.data.text_nya}
*Hasil:* ${xx_bilang.result.list}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'balikangka') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "balik_angkanya",
data: {
text_nya: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan tulis number yg ingin dibalik.*\n\n*Contoh:* 1234")
} else {
reply("nomor nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "balik_angkanya") {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_deposit.data.text_nya = Number(chats);
data_deposit.session = "text_nya_cuy";
var xx_angka = await fetchJson(`https://api.nataganz.com/api/random/balikangka?text=${data_deposit.data.text_nya}&apikey=Pasha`)
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*BALIK ANGKA*
*Nomor Asli:* ${data_deposit.data.text_nya}
*Nomor Hasil:* ${xx_angka.result.list}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'balikhuruf') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "balik_hurufnya",
data: {
text_nya: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan tulis text yg ingin dibalik.*\n\n*Contoh:* Ngetes")
} else {
reply("text nya mana kak?")
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "balik_hurufnya") {
data_deposit.data.text_nya = (chats);
data_deposit.session = "text_nya_cuy";
var xx_huruf = await fetchJson(`https://api.nataganz.com/api/random/balikhuruf?text=${data_deposit.data.text_nya}&apikey=Pasha`)
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*BALIK HURUF*
*Text Asli:* ${data_deposit.data.text_nya}
*Text Hasil:* ${xx_huruf.result.list}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'stalkff') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "stalkff",
data: {
id_nya: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim ID free fire kamu*")
} else {
reply("id ff nya mana kak?")
}
}

 else if (command === 'tahta_maker') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
session: "tahta",
data: {
nulis_nya: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim nama yang mau ditulis.*")
} else {
reply('Namanya apa?')
}
}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "tahta") {
data_deposit.data.nulis_nya = (chats);

data_deposit.session = "tahta_yexftt";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply('Wait sedang menulis..')
var tah =`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${data_deposit.data.nulis_nya}&apikey=IkyOgiwara`
conn.sendMessage(from, { image: {url:tah}, caption: 'Done!'}, {quoted:msg})
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
} else if (command === 'sadcat') {
if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
var deposit_object = {
session: "sadcat",
data: {
nulis_nya: ""
}
}
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("*Silahkan kirim text yang mau ditulis.*")
} else {
reply('Text yg mau jadiin sadcat mana??')
}}

if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")){
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "sadcat") {
data_deposit.data.nulis_nya = (chats);
data_deposit.session = "masukan_texcatt";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply('Wait sedang bikin makernya..')
var nul = `https://api.popcat.xyz/sadcat?text=${data_deposit.data.nulis_nya}`
conn.sendMessage(from, { image: {url:nul}, caption: 'Done!'}, {quoted:msg})
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
}

msgFilter.ResetSpam(orang_spam)

const spampm = () => {
console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
msgFilter.addSpam(sender, orang_spam)
reply('Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik')
}

const spamgr = () => {
console.log(color('~>[SPAM]', 'red'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
msgFilter.addSpam(sender, orang_spam)
reply('Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik')
}

if (isCmd && msgFilter.isFiltered(sender) && !isGroup) return spampm()
if (isCmd && msgFilter.isFiltered(sender) && isGroup) return spamgr()
if (isCmd && args.length < 1 && !isOwner) msgFilter.addFilter(sender)

if (sender.startsWith('212')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('91')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('92')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('90')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('54')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('55')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('40')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('94')) {
return conn.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('60')) {
return conn.updateBlockStatus(sender, 'block')
}

if (isGroup && isCmd && !fromMe) {
console.log(colors.green.bold("[Group]") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(groupName));
}

if (!isGroup && isCmd && !fromMe) {
console.log(colors.green.bold("[Private]") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(pushname));
}

switch(command) {
case 'verify':{
 if (cekUser("id", sender) !== null) return reply('Kamu sudah terdaftar !!')
var res_us = `${makeid(10)}`
var user_name = `#GR${makeid(5)}`
let object_user = {"id": sender, "name": user_name, "seri": res_us, "premium": false }
db_user.push(object_user)
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user, 2, null))
mentions(`𝖬𝖾𝗆𝗎𝖺𝗍 𝖴𝗌𝖾𝗋 @${sender.split("@")[0]}`, [sender])
await sleep(1500)
var verify_teks =`───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ ID : @${sender.split('@')[0]}
○ Name : ${user_name}
○ Seri : ${res_us}

silahkan ketik #rules
untuk membaca rules bot
`
var buttonMessage = {
text: verify_teks,
footer: 'Klik button untuk melihat menu',
mentions: [sender],
buttons: [
{ buttonId: '#menu', buttonText: {displayText: '️𝗠𝗘𝗡𝗨'}, type: 1}
],
headerType: 1
}
conn.sendMessage(from, buttonMessage, {quoted:msg})
}
break
case 'iklan':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
var strip = '```'
var menu_list =`
_Utamakan chat to the point_ 🚀

*_Admin hanya melayani chat_*

${strip}Telpon/Spam blokir 🚫${strip}

_Admin 1 : 6289519240209/RK

*Minta SV? Sebut Nama 🙏*
*No Admin Reall Hanya*
*Di Atas, Selain Itu Clone*‼️
`
reply(menu_list)
}
break
case 'menu':{

const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
var footer_nya =`Creator by - ${setting.ownerName}`
let tampilan_nya = `
╔━━━║ *MATCHAADEPANMU* ━━━
║ 🎭 Name :  ${pushname} 👋 ${ucapanWaktu}😁
║
┗━━━━━━━━━━━━━━━━━━━━━━━━
> 🎭 Creator :  @${ownerNumber.split('@')[0]}
> 🎭 YouTube : DEVIL-X-CODE

━━•> 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢
> ID : @${sender.split('@')[0]}
> Nama : ${pushname}
> Premium : ${cekUser("premium", sender)? 'Aktif':'Tidak'}
 
╔━━━ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ━━━━━━━━━━━━
║ Mode : ${conn.public ? 'Public-Mode' : 'Self-Mode'}
║ Library : Baileys-MD
║ Time : ${jam} WIB
║ Date : ${tanggal}
║ Runtime : ${runtime(process.uptime())}
║ YouTube : https://youtube.com/@DEVIL-X-CODE
┗━━━━━━━━━━━━━━━━━━━━━━━━━`
var pp_user = ['https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg']

let buttons = [
// {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
// {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '► Audio'}, type: 1}
// ]
//  let buttons = [
 { buttonId: `${prefix}allmenu`, buttonText: { displayText: "ALL MENU👋" }, type: 1 },
 { buttonId: `${prefix}simpelmenu`, buttonText: { displayText: "SIMPEL MENU👋" }, type: 1 },
 ]

// conn.sendButLoc(from, location: { jpegThumbnail: pp_user, caption: tampilan_nya, buttons: buttons, footer: footer_nya}, { quoted: msg })
 conn.sendMessage(from, { image:pp_user, text: tampilan_nya, buttons: buttons, footer: footer_nya}, { quoted: msg })
// await conn.sendButImage(from, {text: tampilan_nya}, pp_bot, [{
//                         buttonId: `.owner`,
//                         buttonText: {
//                             displayText: '🙍‍♂️ Owner'
//                         },
//                         type: 1
//                     }], {
//                     userJid: from,
//                     quoted: msg})
}
break
case 'simpelmenu':{
  const mark_slebew = '0@s.whatsapp.net'
const more = String.fromCharCode(8206)
const strip_ny = more.repeat(4001)
var footer_nya =`Creator by - ${setting.ownerName}`
let tampilan_nya = `
╭──( *MENU SIMPEL BOT* )
│🎭 Name :  ${pushname} 👋 ${ucapanWaktu}😁
║
║ •  𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢
║ • ID : @${sender.split('@')[0]}
║ • Nama : ${pushname}
║ • Premium : ${cekUser("premium", sender)? 'Aktif':'Tidak'}
┗━━━━━━━━━━━━━━━━━━⬣`
conn.sendMessage(from,
{text: tampilan_nya, logonya,

buttonText: "Klik Disini",
sections: [{title: "𝗠𝗘𝗡𝗨",
rows: [
{title: " 𝐎𝐏𝐄𝐍𝐀𝐈 𝗠𝗘𝗡𝗨", rowId: prefix+"openai22", description: "Menu Khusus OpenAi"},
{title: " 𝐀𝐒𝐔𝐏𝐀𝐍 𝐌𝐄𝐍𝐔", rowId: prefix+"asupan22", description: "Menu Khusus Asupan"},
{title: " 𝐂𝐎𝐑𝐎𝐍𝐆𝐌𝐄𝐑𝐀𝐇 𝐌𝐄𝐍𝐔", rowId: prefix+"corong22", description: "Menu Khusus Resep"},
{title: " 𝐅𝐔𝐍𝐍𝐘 𝐌𝐄𝐍𝐔", rowId: prefix+"funny22", description: "Menu Khusus OpenAi"},
{title: " 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨", rowId: prefix+"gcmenu", description: "Menu Khusus Group👥"},
{title: " 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨", rowId: prefix+"storemenu", description: "Menu Khusus Store🏷"},
{title: " 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨", rowId: prefix+"ownmenu", description: "Menu Khusus Owner👤"},
{title: " 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨", rowId: prefix+"cvmenu", description: "Menu Convert📄"},
{title: " 𝗨𝗦𝗘𝗥 𝗠𝗘𝗡𝗨", rowId: prefix+"usrmenu", description: "Menu Khusus User💬"},
{title: " 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨", rowId: prefix+"dlmenu", description: "Menu Downloader Khusus Premium🏧"},
{title: " 𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗠𝗘𝗡𝗨", rowId: prefix+"produk", description: "Menampilkan Menu Anonymous🚻"}]},
],
footer: footer_nya,mentions:[setting.ownerNumber, sender]})
}
break
case 'allmenu':{
var allmenu2 = [`╔═══════✪
║ •  𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢
║ • ID : @${sender.split('@')[0]}
║ • Nama : ${pushname}
║ • Premium : ${cekUser("premium", sender)? 'Aktif':'Tidak'}
╚═════════════✪
╔═══════✪ Menu Owner 
╠➥ ${no++} ➳ ${prefix} Error
╠➥ ${no++} ➳ ${prefix} ClearErr
╠➥ ${no++} ➳ ${prefix} Siaran
╠➥ ${no++} ➳ ${prefix} Session
╠➥ ${no++} ➳ ${prefix} ResetDb
╠➥ ${no++} ➳ ${prefix} SetExif
╠➥ ${no++} ➳ ${prefix} Modebot Public/Self
╠➥ ${no++} ➳ ${prefix} SetWm
╠➥ ${no++} ➳ ${prefix} SetFooter
╠➥ ${no++} ➳ ${prefix} SetPpBot
╠➥ ${no++} ➳ ${prefix} AddPrem
╠➥ ${no++} ➳ ${prefix} DelPrem
╠➥ ${no++} ➳ ${prefix} Bc(Broadcast)
╚═════════════✪
╔═══════✪ Menu Group 
╠➥ ${no++} ➳ ${prefix} Fitnah
╠➥ ${no++} ➳ ${prefix} Del
╠➥ ${no++} ➳ ${prefix} Revoke
╠➥ ${no++} ➳ ${prefix} Tagall
╠➥ ${no++} ➳ ${prefix} Hidetag
╠➥ ${no++} ➳ ${prefix} SetDesc
╠➥ ${no++} ➳ ${prefix} Lgc
╠➥ ${no++} ➳ ${prefix} InfoGc
╠➥ ${no++} ➳ ${prefix} SetPpGrup
╠➥ ${no++} ➳ ${prefix} SetNameGrup
╠➥ ${no++} ➳ ${prefix} Group Open/Close
╠➥ ${no++} ➳ ${prefix} Antilink On/Off
╠➥ ${no++} ➳ ${prefix} Welcome On/Off
╠➥ ${no++} ➳ ${prefix} TiktokAuto On/Off
╠➥ ${no++} ➳ ${prefix} Kick @Tag
╠➥ ${no++} ➳ ${prefix} Add 08
╠➥ ${no++} ➳ ${prefix} Demote @Tag
╠➥ ${no++} ➳ ${prefix} Promote @Tag
╚═════════════✪

╔═══════✪ Menu Convert
╠➥ ${no++} ➳ ${prefix} Tourl
╠➥ ${no++} ➳ ${prefix} Toimg
╠➥ ${no++} ➳ ${prefix} Tomp3
╠➥ ${no++} ➳ ${prefix} Toaudio
╠➥ ${no++} ➳ ${prefix} Tomp4
╠➥ ${no++} ➳ ${prefix} Tovideo
╠➥ ${no++} ➳ ${prefix} Sgif
╠➥ ${no++} ➳ ${prefix} Swm
╠➥ ${no++} ➳ ${prefix} Sticker
╠➥ ${no++} ➳ ${prefix} Smeme
╠➥ ${no++} ➳ ${prefix} Emojimix
╠➥ ${no++} ➳ ${prefix} Emojimix2
╠➥ ${no++} ➳ ${prefix} TakeSticker
╚═════════════✪

╔═══════✪ Menu Download
╠➥ ${no++} ➳ ${prefix} Tiktok
╠➥ ${no++} ➳ ${prefix} Ytmp3
╠➥ ${no++} ➳ ${prefix} Ytmp4
╠➥ ${no++} ➳ ${prefix} Pin
╠➥ ${no++} ➳ ${prefix} GitClone
╠➥ ${no++} ➳ ${prefix} Mediafire
╠➥ ${no++} ➳ ${prefix} Wikimedia
╚═════════════✪

╔═══════✪ Menu User
╠➥ ${no++} ➳ ${prefix} Verify
╠➥ ${no++} ➳ ${prefix} Request
╠➥ ${no++} ➳ ${prefix} Transfer
╠➥ ${no++} ➳ ${prefix} Menfes
╠➥ ${no++} ➳ ${prefix} BuatRoom
╠➥ ${no++} ➳ ${prefix} SecretChat
╠➥ ${no++} ➳ ${prefix} CekPrem
╠➥ ${no++} ➳ ${prefix} ChangeName
╠➥ ${no++} ➳ ${prefix} Infocuaca
╠➥ ${no++} ➳ ${prefix} Ssweb
╠➥ ${no++} ➳ ${prefix} Runtime
╠➥ ${no++} ➳ ${prefix} Speed
╠➥ ${no++} ➳ ${prefix} Ping
╠➥ ${no++} ➳ ${prefix} Play/Yts
╚═════════════✪

╔═══════✪ Menu Store
╠➥ ${no++} ➳ ${prefix} Kali 1 2
╠➥ ${no++} ➳ ${prefix} Bagi 1 2
╠➥ ${no++} ➳ ${prefix} Kurang 1 2
╠➥ ${no++} ➳ ${prefix} Tambah 1 2
╠➥ ${no++} ➳ ${prefix} Dellist [Key@Response]
╠➥ ${no++} ➳ ${prefix} Addlist [Key@Response]
╠➥ ${no++} ➳ ${prefix} Done  [Reply Pesanan]
╠➥ ${no++} ➳ ${prefix} Proses [Reply Pesanan]
╠➥ ${no++} ➳ ${prefix} List 
╚═════════════✪

╔═══════✪ Menu Produk 
╠➥ ${no++} ➳ ${prefix} Buatroom 628xxx
╠➥ ${no++} ➳ ${prefix} Room <only owner>
╠➥ ${no++} ➳ ${prefix} Stopchat <only room>
╠➥ ${no++} ➳ ${prefix} Menfess 628xx|bot|hai
╚═════════════✪

╔═══════✪ Menu AI 
╠➥ ${no++} ➳ ${prefix} Openai/Ai
╠➥ ${no++} ➳ ${prefix} Ai-Img 
╠➥ ${no++} ➳ ${prefix} ChatGPT
╠➥ ${no++} ➳ ${prefix} Dall-E
╚═════════════✪

╔═══════✪ Menu ASUPAN 
╠➥ ${no++} ➳ ${prefix} Asupan
╠➥ ${no++} ➳ ${prefix} Cecan
╠➥ ${no++} ➳ ${prefix} Cecanchina
╚═════════════✪

╔═══════✪ Menu RESEP 
╠➥ ${no++} ➳ ${prefix} Corongmerah
╚═════════════✪

╔═══════✪ Menu FUNNY 
╠➥ ${no++} ➳ ${prefix} Apakah
╠➥ ${no++} ➳ ${prefix} Bagaimanakah
╠➥ ${no++} ➳ ${prefix} Bisakah
╠➥ ${no++} ➳ ${prefix} Cekganteng
╠➥ ${no++} ➳ ${prefix} Cekcantik
╠➥ ${no++} ➳ ${prefix} Cekmati
╠➥ ${no++} ➳ ${prefix} Rate
╚═════════════✪
`]
let buttons = [
// {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
// {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '► Audio'}, type: 1}
// ]
//  let buttons = [
 { buttonId: `${prefix}owner`, buttonText: { displayText: "Owner👋" }, type: 1 },
 ]
conn.sendMessage(from, {text: allmenu2, buttons: buttons}, { quoted: msg })
}
break
case 'ownmenu':{
return reply(`╔═══════✪ Menu Owner 
╠➥ : Error
╠➥ : ClearErr
╠➥ : Siaran
╠➥ : Session
╠➥ : ResetDb
╠➥ : SetExif
╠➥ : Modebot Public/Self
╠➥ : SetWm
╠➥ : SetFooter
╠➥ : SetPpBot
╠➥ : AddPrem
╠➥ : DelPrem
╠➥ : Bc(Broadcast)
╚═════════════✪`)
}
break
case 'gcmenu':{
return reply(`╔═══════✪ Menu Group 
╠➥ : Fitnah
╠➥ : Del
╠➥ : Revoke
╠➥ : Tagall
╠➥ : Hidetag
╠➥ : SetDesc
╠➥ : Lgc
╠➥ : InfoGc
╠➥ : SetPpGrup
╠➥ : SetNameGrup
╠➥ : Group Open/Close
╠➥ : Antilink On/Off
╠➥ : Welcome On/Off
╠➥ : TiktokAuto On/Off
╠➥ : Kick @Tag
╠➥ : Add 08
╠➥ : Demote @Tag
╠➥ : Promote @Tag
╚═════════════✪`)
}
break
case 'cvmenu':{
return reply(`╔═══════✪ Menu Convert
╠➥ : Tourl
╠➥ : Toimg
╠➥ : Tomp3
╠➥ : Toaudio
╠➥ : Tomp4
╠➥ : Tovideo
╠➥ : Sgif
╠➥ : Swm
╠➥ : Sticker
╠➥ : Smeme
╠➥ : Emojimix
╠➥ : Emojimix2
╠➥ : TakeSticker
╚═════════════✪`)
}
break
case 'dlmenu':{
return reply(`╔═══════✪ Menu Download
╠➥ : Tiktok
╠➥ : Ytmp3
╠➥ : Ytmp4
╠➥ : Pin
╠➥ : GitClone
╠➥ : Mediafire
╠➥ : Wikimedia
╚═════════════✪`)
}
break
case 'usrmenu':{
return reply(`╔═══════✪ Menu User
╠➥ : Verify
╠➥ : Request
╠➥ : Transfer
╠➥ : Menfes
╠➥ : BuatRoom
╠➥ : SecretChat
╠➥ : CekPrem
╠➥ : ChangeName
╠➥ : Infocuaca
╠➥ : Ssweb
╠➥ : Runtime
╠➥ : Speed
╠➥ : Ping
╠➥ : Play/Yts
╚═════════════✪`)
}
break
case 'storemenu':{
// return reply(`╔═══════✪ Menu Store
// ╠➥ : Kali 1 2
// ╠➥ : Bagi 1 2
// ╠➥ : Kurang 1 2
// ╠➥ : Tambah 1 2
// ╠➥ : Dellist [Key@Response]
// ╠➥ : Addlist [Key@Response]
// ╠➥ : Done [Reply Pesanan]
// ╠➥ : Proses [Reply Pesanan]
// ╠➥ : List 
// ╚═════════════✪`)
//  conn.sendButMessage(from, `╔═══════✪ Menu Store
// ╠➥ : Kali 1 2
// ╠➥ : Bagi 1 2
// ╠➥ : Kurang 1 2
// ╠➥ : Tambah 1 2
// ╠➥ : Dellist [Key@Response]
// ╠➥ : Addlist [Key@Response]
// ╠➥ : Done [Reply Pesanan]
// ╠➥ : Proses [Reply Pesanan]
// ╠➥ : List 
// ╚═════════════✪`, `© ${setting.ownerName}`, [{
//                         buttonId: '.owner',
//                         buttonText: {
//                             displayText: 'Owner👋'
//                         },
//                         type: 1
//                     }, {
//                         buttonId: '.mode self',
//                         buttonText: {
//                             displayText: '👋'
//                         },
//                         type: 1
//                     }], {
//                         quoted: fgif
//                     }) 
 let buttons = [
// {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
// {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '► Audio'}, type: 1}
// ]
//  let buttons = [
 { buttonId: `${prefix}owner`, buttonText: { displayText: "Owner👋" }, type: 1 },
 ]
var stire = [`╔═══════✪ Menu Store
╠➥ : Kali 1 2
╠➥ : Bagi 1 2
╠➥ : Kurang 1 2
╠➥ : Tambah 1 2
╠➥ : Dellist [Key@Response]
╠➥ : Addlist [Key@Response]
╠➥ : Done [Reply Pesanan]
╠➥ : Proses [Reply Pesanan]
╠➥ : List 
╚═════════════✪`]
conn.sendMessage(from,
{text: stire, logonya,

buttonText: "Klik Disini",
sections: [{title: "𝗔𝗟𝗟 𝗠𝗘𝗡𝗨",
rows: [
{title: " 𝐎𝐏𝐄𝐍𝐀𝐈 𝗠𝗘𝗡𝗨", rowId: prefix+"openai22", description: "Menu Khusus OpenAi"},]},
],
footer: footer_nya,mentions:[setting.ownerNumber, sender]})
}


break
case 'produk':{
return reply(`╔═══════✪ Menu Produk 
╠➥ : Buatroom 628xxx
╠➥ : Room <only owner>
╠➥ : Stopchat <only room>
╠➥ : Menfess 628xx|bot|hai
╚═════════════✪`)
}
break
case 'openai22':{
return reply(`╔═══════✪ Menu AI 
╠➥ : Openai/Ai
╠➥ : Ai-Img 
╠➥ : ChatGPT
╠➥ : Dall-E
╚═════════════✪`)
}
break
case 'asupan22':{
return reply(`╔═══════✪ Menu ASUPAN 
╠➥ : Asupan
╠➥ : Cecan
╠➥ : Cecanchina
╚═════════════✪`)
}
break
case 'corong22':{
return reply(`╔═══════✪ Menu CORONGMERAH 
╠➥ : Corongmerah
╚═════════════✪`)
}
break
case 'funny22':{
return reply(`╔═══════✪ Menu FUNNY 
╠➥ : Apakah
╠➥ : Bagaimanakah
╠➥ : Bisakah
╠➥ : Cekganteng
╠➥ : Cekcantik
╠➥ : Cekmati
╠➥ : Rate
╚═════════════✪`)
}
break
case 'scnqris':
case 'pay':{
let tekssss = `───「  *PAYMENT*  」────

Dana  : 089519240209
Gopay : 089519240209

*Untuk Pembayaran Silahkan Scan Qris      Yang Tertera Pada Gambar Diatas.*
*Note: Untuk Menghindari Drama Sertakan Bukti Transfer Untuk Menjaga Ketentraman Bersama*
`
conn.sendMessage(from, { image: fs.readFileSync(`./qris.jpg`),
 caption: tekssss, 
footer: `${setting.ownerName}`},
{quoted: msg})
}
break
case 'infoowner':
case 'ownerinfo':{
return reply(`──「 *INFO OWNER* 」──

 *Data Profil*
 • *Nama:* Matchaadepanmu
 • *Umur:* 22 tahun
 • *Hoby:* Turu/Game
 • *Askot:* Jati,
 • *Konten:* Creator 

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* 089519240209
 • *Youtube:* DEVIL-X-CODE
 • *Ig:* =`)
}
break    
case 'joker':
case 'digital':
case 'nulis':
case 'nulis2':
case 'quoteser':
case 'quobucin':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Contoh:\n${prefix+command} saya bukan wibu`)
reply(mess.wait)
var buc = `https://saipulanuar.ga/api/textmaker/${command}?text=${q}&apikey=jPHjZpQF`
conn.sendMessage(from, { image:{url:buc}, caption:'Done!'}, {quoted:msg})
}
break
// case 'attp2':
// case 'attp':
// case 'ttp2':
// case 'ttp':{
// if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
// if (!q) return reply(`Contoh:\n${prefix+command} saya wibu`)
// var nyz1 = await getBuffer(`  https://api.lolhuman.xyz/api/attp?apikey=54930b48e2d97c1c78363c3c&text=${q}`)

// fs.writeFileSync('getpp.jpeg', nyz1)
// await ffmpeg("getpp.jpeg")
// .input("getpp.jpeg")
// .on('error', console.error)
// .on('end', function () {conn.sendMessage(from, { sticker: {url: 'getpp.webp'}, mimetype: 'image/webp' })})
// .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
// .toFormat('webp')
// .save('getpp.webp')
// await sleep(5000)
// fs.unlinkSync('getpp.jpeg')
// fs.unlinkSync('getpp.webp')
// }
// break
case 'pin':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Contoh:\n${prefix+command} loli`)
reply(mess.wait)
fetchJson(`https://saipulanuar.ga/api/search/pinterest?query=${q}&apikey=jPHjZpQF`)
.then(pin =>{
var media = pickRandom(pin.result)
conn.sendMessage(from, { image:{url:media}, caption:`Done *${q}*`}, {quoted:msg})
})
break
case 'tts':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Contoh:\n${prefix+command} hallo bro`)
var tts = `https://saipulanuar.ga/api/text-to-audio/tts?text=${q}&idbahasa=id&apikey=jPHjZpQF`
conn.sendMessage(sender, {audio:{url:tts}, mimetype:'audio/mpeg', ptt:true}, {quoted:msg})
}
break
case 'playmp3':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply('*Contoh:*\n#playmp3 preset angel baby 30 detik')
fetch(`https://api.lolhuman.xyz/api/ytaudio?apikey=54930b48e2d97c1c78363c3c&url=${q}`)
.then(z=>{
var text_playmp3 =`*YOUTUBE PLAYMP3*

*title:* ${z.title}
*channel:* ${z.channel}
*published:* ${z.published}
*views:* ${z.views}
*type:* audio/mp3

Media sedang dikirim.`
reply(text_playmp3)
conn.sendMessage(sender, {audio:{url:z.url}, mimetype:'audio/mpeg', fileName: z.title+'mp3'}, {quoted:msg})
if (isGroup) return reply('Media sudah dikirim dichat pribadi.')
})
break
case 'soundcloud':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply('*Contoh:*\n#soundcloud https://soundcloud.com/ndaa-212683099/dj-coba-kau-ingat-ingat-kembali-seharusnya-aku-jungle-dutch-terbaru-2021-full-bass-viral-tik?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')
var yurl = q
reply(mess.wait)
fetchJson(`https://saipulanuar.ga/api/download/soundcloud?url=${yurl}&apikey=jPHjZpQF`).then(sdc =>{
reply(`*SOUNDCLOUD DOWNLOAD*

*author:* NovXd
*title:* ${sdc.result.title}
*duration:* ${sdc.result.duration}
*quality:* ${sdc.result.quality}

Audio sedang dikirim...

*Note:*
jika reply message status undefined
itu artinya url tidak ditemukan.`)
conn.sendMessage(sender, {audio:{url:sdc.result.download}, mimetype:'audio/mpeg', fileName: sdc.result.title+'mp3'}, {quoted:msg})
if (isGroup) return reply('Audio sudah dikirim dichat pribadi.')
})
break
case 'playmp4':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply('*Contoh:*\n#playmp4 preset angel baby 30 detik')
fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp4?query=${q}`)
.then(zz=>{
var text_playmp4 =`*YOUTUBE PLAYMP4*

*title:* ${zz.title}
*channel:* ${zz.channel}
*published:* ${zz.published}
*views:* ${zz.views}
*type:* video/mp4

Media sedang dikirim.`
reply(text_playmp4)
conn.sendMessage(sender, {video:{url:zz.url}, caption:'Done!'}, {quoted:msg})
if (isGroup) return reply('Media sudah dikirim dichat pribadi.')
})
break
case 'mediafire':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply('*Contoh:*\n#mediafire https://www.mediafire.com/file/451l493otr6zca4/V4.zip/file')
let isLinks = q.match(/(?:https?:\/{2})?(?:w{3}\.)?mediafire(?:com)?\.(?:com|be)(?:\/www\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Link yang kamu berikan tidak valid')
reply('*Mengunduh Media...*')
let baby1 = await mediafireDl(`${isLinks}`)
if (baby1[0].size.split('MB')[0] >= 100) return reply('File Melebihi Batas '+util.format(baby1))
let result4 = `-----[ *MEDIAFIRE DOWNLOADER* ]-----

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Type* : ${baby1[0].mime}

_Wait Mengirim file..._
`
reply(result4)
if (isGroup) return reply('*document udah dikirim ke chat pribadi bot.*')
conn.sendMessage(sender, {document:{url:baby1[0].link}, fileName:baby1[0].nama, mimetype: baby1[0].mime}, {quoted:msg}).catch ((err) => reply('Gagal saat mendownload File'))
break
case 'grupbot':
case 'groupbot':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
reply(`${setting.group.judul}
${setting.group.link}`)
break
case 'infobot':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
reply(`𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
• Author : @${ownerNumber.split('@')[0]}
• Owner : ${setting.ownerName}
• Botname : ${setting.botName}
• Library : Baileys-MD
• Time : ${jam} WIB
• Date : ${tanggal}
• Terdaftar : ( ${("id", db_user).length} )
• Room Chat : ( ${db_menfes.length} )`)
break
case 'setfooter':
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n#setfooter ${setting.footer}`)
setting.footer = q
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
reply('Sukses mengganti footer')
break
case 'runtime':
case 'tes':
if (!isOwner) return reply(mess.OnlyOwner)
reply(`*Runtime :* ${runtime(process.uptime())}`)
break
case "speed":{
let timestamp = speed()
let latensi = speed() - timestamp
reply(`Speed: ${latensi.toFixed(4)} Second`)
}
break
//=================================================//
case "ping": case "botstatus": case "statusbot": {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
var neww = performance.now()
var oldd = performance.now()
var respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length))," ")}: ${formatp(used[key])}`).join("\n")}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + "*").padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + "*").padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join("\n")}`).join("\n\n")}` : ""}
`.trim()
reply(respon)
}
break
case 'rules':{    
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
return reply(`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *.menu* untuk memulai bot `)
}
break
case 'user':
case 'db':{
if (!isOwner) return reply(mess.OnlyOwner)
let xx_us = JSON.parse(fs.readFileSync("./database/pengguna.json"));
let no = 1
let teks_db =`*INFO-DASHBOARD*

*• Terdaftar :* ( ${("id", db_user).length} )
*• Room Chat :* ( ${db_menfes.length} )\n\n`
for (let x of xx_us){
teks_db +=`*User${no++} ${x.name}*\n*ID: @${x.id.split('@')[0]}*\n*Premium: ${x.premium? 'aktif':'tidak'}*\n\n`
}
reply(teks_db)
}
break
case 'addprem':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply('*Contoh:*\n#addprem 628xxx')
var number_one = q+'@s.whatsapp.net'
if (cekUser("id", number_one) == null) return reply('User tersebut tidak terdaftar di database')
if (cekUser("premium", number_one) == true) return reply('User tersebut sudah premium')
setUser("±premium", number_one, true)
reply(`*PREMIUM*\n*ID:* @${number_one.split('@')[0]}\n*Status:* aktif`)
}
break
case 'delprem':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply('*Contoh:*\n#delprem 628xxx')
var number_one = q+'@s.whatsapp.net'
if (cekUser("id", number_one) == null) return reply('User tersebut tidak terdaftar di database')
if (cekUser("premium", number_one) == false) return reply('User tersebut tidak premium')
setUser("±premium", number_one, false)
reply(`*PREMIUM*\n*ID:* @${number_one.split('@')[0]}\n*Status:* tidak`)
}
break
case 'owner':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
var owner_Nya = setting.ownerNumber
sendContact(from, owner_Nya, setting.ownerName, msg)
reply('Chat aja kak, ga usah malu')
}
break
case 'room':{
if (!isOwner) return reply(mess.OnlyOwner)
var room =`*CHAT ANONYMOUS*\n\n*TOTAL ROOM : ${anonymous.length}*\n\n`
var no = 1
for (let x of anonymous){
room +=`*ID ROOM ${x.id}*
*CHAT1: @${x.a.split('@')[0]}*
*CHAT2: @${x.b.split('@')[0]}*
*STATUS: ${x.state}*\n\n`
}
reply(room)
}
break
case 'daftarprem':
mentions(`*Ingin Jadi Premium?*
*Silahkan Pilih Waktu Nya*

*List Harga*
Rp5.000 › 5day
Rp10.000 › 10day
Rp15.000 › 15day
Rp20.000 › 20day

*Dan Seterusnya...*
*day › hari*

*Keuntungan Premium*
- _Bisa Add Bot 1 Group_
- _Bisa Gunain Fitur Premium_

*Minat Jadi Premium?*
*Hubungi Owner*
@${setting.ChatOwner.split('@')[0]}`, [setting.ChatOwner])
break
case 'sewabot':
mentions(`*SEWA BOT*

*List Harga*
Permanen Rp.20.000

*day › hari*

*Keuntungan Sewabot*
- _Bisa Add Bot 1 Group_
- _Bisa Gunain Fitur Admin_

*Minat Sewabot?*
*Hubungi Owner*
@${setting.ChatOwner.split('@')[0]}`, [setting.ChatOwner])
break
case 'cekprem':{
mentions(`*CEK PREMIUM*
_• ID : @${cekUser("id", sender).split('@')[0]}_
_• Status : ${cekUser("premium", sender)? 'Aktif':'Tidak'}_`, [sender])
}
break
case 'resetdb':{
if (!isOwner) return reply(mess.OnlyOwner)
let para_kos = "[]"
db_user.splice(para_kos)
fs.writeFileSync('./database/pengguna.json', JSON.stringify(db_user, null, 1))
await sleep(1000)
db_menfes.splice(para_kos)
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, null, 1))
reply('Sukses restart database')
}
break
case 'resetlist':
db_respon_list.splice('[]')
fs.writeFileSync('./database/db_ListMessage', JSON.stringify(db_respon_list, null, 1))
reply('Sukses Reset List Message')
break
// BROADCAST
case 'bctext':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n${prefix+command} hallo`)
let db_orang = JSON.parse(fs.readFileSync('./database/pengguna.json'));
let data_teks = `${q}`
for (let i of db_orang){ 
var button_broadcast = {text: data_teks, footer: '©broadcast', buttons: [{ buttonId: '!menu', buttonText: {displayText: '⋮☰ 𝗠𝗘𝗡𝗨'}, type: 1}],headerType: 1}
conn.sendMessage(i.id, button_broadcast)
await sleep(2000)
}
reply(`*Sukses mengirim broadcast text ke ${db_orang.length} user*`)
}
break
case 'bcvideo':{
if (!isOwner) return reply(mess.OnlyOwner)
if (isVideo || isQuotedVideo){
await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender.split("@")[0]}.mp4`)
reply(mess.wait)
var bc_video = `./sticker/${setting.ownerNumber.split('@')[0]}.mp4`
for (let i of db_user){
conn.sendMessage(i.id, {video:{url:bc_video}, caption:'*©broadcast*'})
await sleep(2000)
}
reply(`*Sukses mengirim broadcast video ke ${db_user.length} user*`)
fs.unlinkSync(bc_video)
} else {
reply(`*kirim video dengan caption ${prefix+command} atau reply video dengan pesan ${prefix+command}*`)
}
}
break
case 'bcimage':{
if (!isOwner) return reply(mess.OnlyOwner)
if (isImage || isQuotedImage){
await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split("@")[0]}.jpg`)
reply(mess.wait)
var bc_image = `./sticker/${setting.ownerNumber.split('@')[0]}.jpg`
for (let i of db_user){
conn.sendMessage(i.id, {image:{url:bc_image}, caption:'*©broadcast*'})
await sleep(2000)
}
reply(`*Sukses mengirim broadcast image ke ${db_user.length} user*`)
fs.unlinkSync(bc_image)
} else {
reply(`*kirim gambar dengan caption ${prefix+command} atau reply gambar dengan pesan ${prefix+command}*`)
}
}
break
case 'bcaudio':{
if (!isOwner) return reply(mess.OnlyOwner)
if (isQuotedAudio){
await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${sender.split("@")[0]}.mp3`)
reply(mess.wait)
var bc_audio = `./sticker/${setting.ownerNumber.split('@')[0]}.mp3`
for (let i of db_user){
conn.sendMessage(i.id, {audio:{url:bc_audio}, mimetype:'audio/mpeg', fileName:'bcaudio.mp3'})
await sleep(2000)
}
reply(`*Sukses mengirim broadcast audio ke ${db_user.length} user*`)
fs.unlinkSync(bc_audio)
} else {
reply(`*reply audio dengan pesan ${prefix+command}*`)
}
}
break
case 'bc':
case 'siaran':
case 'broadcast':
if (!isOwner) return reply(mess.OnlyOwner)
reply(`*BROADCAST*

*Type Text*
*Example:* 
#bctext <text>

*Type Audio*
*Example:*
#bcaudio <reply audio>

*Type Video*
*Example:*
#bcvideo <reply video>

*Type Image*
*Example:*
#bcimage <reply image>

_Broadcast › Chat All User_`)
break

// OWNER ONLY
case 'setexif':
case 'setwm':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply('*Contoh:*\n#setwm pack|author')
let nama_Pack = q.split('|')[0]
let author_Pack = q.split('|')[1]
if (!nama_Pack) return reply('*Contoh:*\n#setwm pack|author')
if (!author_Pack) return reply('*Contoh:*\n#setwm pack|author')
exif.create(nama_Pack, author_Pack)
reply('Sukses membuat exif')
}
break
case 'buat_room_chat':{
var id_satu = q.split('|')[0]
var id_dua = q.split('|')[1]
var id_rom = q.split('|')[2]
db_menfes.push({"id": id_satu, "teman": id_dua})
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, 2, null))
db_menfes.push({"id": id_dua, "teman": id_satu})
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, 2, null))
var tulis_pesan = `𝗖𝗵𝗮𝘁 𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀 𝗧𝗲𝗿𝗵𝘂𝗯𝘂𝗻𝗴✓
𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗞𝗶𝗿𝗶𝗺 𝗣𝗲𝘀𝗮𝗻✍

𝗸𝗲𝘁𝗶𝗸 #𝘀𝘁𝗼𝗽𝗰𝗵𝗮𝘁
𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗵𝗮𝗽𝘂𝘀 𝘀𝗲𝘀𝗶 𝗰𝗵𝗮𝘁

𝗡𝗼𝘁𝗲:
𝙧𝙤𝙤𝙢 𝙘𝙝𝙖𝙩 𝙞𝙣𝙞 𝙗𝙚𝙧𝙨𝙞𝙛𝙖𝙩 𝙖𝙣𝙤𝙣𝙞𝙢
𝙟𝙖𝙙𝙞 𝙠𝙖𝙢𝙪 𝙩𝙞𝙙𝙖𝙠 𝙩𝙖𝙪 𝙥𝙖𝙩𝙣𝙚𝙧𝙢𝙪
𝙠𝙚𝙘𝙪𝙖𝙡𝙞 𝙙𝙞𝙖 𝙢𝙚𝙣𝙜𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙣𝙖𝙢𝙖 𝙖𝙨𝙡𝙞
𝙖𝙩𝙖𝙪 𝙢𝙚𝙢𝙗𝙚𝙧𝙞𝙩𝙖𝙝𝙪𝙠𝙖𝙣 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙨𝙞 𝙙𝙖𝙧𝙞𝙣𝙮𝙖.

𝘿𝙞𝙡𝙖𝙧𝙖𝙣𝙜 𝙨𝙥𝙖𝙢/𝙩𝙚𝙡𝙥𝙤𝙣 𝙗𝙤𝙩
𝙎𝙖𝙣𝙠𝙨𝙞 : 𝘽𝙡𝙤𝙠𝙞𝙧 𝙋𝙚𝙧𝙢𝙖𝙣𝙚𝙣

𝗥𝗼𝗼𝗺 𝗜𝗗 : ${id_rom}`
var buttonMessage = {
text: tulis_pesan,
footer: 'klik button untuk menghapus sesi chat',
buttons: [
{ buttonId: '#stopchat', buttonText: {displayText: '️𝗦𝗧𝗢𝗣'}, type: 1}
],
headerType: 1
}
conn.sendMessage(id_satu, buttonMessage)
conn.sendMessage(id_dua, buttonMessage)
}
break
case 'stopchat':
if (cekPesan("id", sender) == null) return reply(`Kamu sedang tidak didalam roomchat, Silahkan buat room dengan contoh dibawah ini.\n\n*Example:*\n#menfess num|nama|pes\n\n*Contoh:*\n#menfess 628xxx|bot|hai\n\n*Note:*\n6285789004732 - benar (✅)\n+62 857 8900 4732 - salah (❌)`)
if (isGroup) return reply(mess.OnlyPM)
var aku = sender
var dia = cekPesan("teman", aku)
var teks_aku = `[✓] Berhasil memberhentikan chat`
setRoom("±id", dia, null)
setRoom("±teman", dia, null)
await sleep(2000)
conn.sendMessage(aku,{text:teks_aku})
setRoom("±id", aku, null)
setRoom("±teman", aku, null)
var teks_dia = `[✓] Room chat telah dihentikan\noleh teman chat kamu👤`
conn.sendMessage(dia,{text:teks_dia})
db_menfes.splice('[]')
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes, null, 1))
break
case 'secretchat':
case 'menfes': case 'menfess':{
  if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (cekPesan("id", sender) !== null) return reply("Kamu Sedang Didalam roomchat ketik *#stopchat* untuk menghapus sesi chat.")
if (!q) return reply(`Format Fitur Menfess / Kirim pesan rahasia ke seseorang Lewat bot\n\n_*Example*_\n${prefix+command} wa|pengirim|pesan\n\n_*Contoh*_\n${prefix+command} 6281236167286|bot|hai\n\n*Note :*\nBerawal dari 628xxx tanpa spasi`)
let num = q.split('|')[0]
let nama_pengirim = q.split('|')[1]
let pesan_teman = q.split('|')[2]
var cekap = await conn.onWhatsApp(num+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Nomor +${num}\ntidak terdaftar di WhatsApp`)
let roomC = `#${makeid(10)}`
if (num == botNumber.split('@')[0]) return reply('Itu kan nomor bot')
if (num == sender.split('@')[0]) return reply('Menfes ke nomor sendiri:v\ncapek ya? semangat🗿')
if (!num) return reply(`Harus di isi semua !!\nex : ${prefix+command} 62857xxx|nama|hallo\n\nnomor hp tanpa spasi`)
if (!nama_pengirim) return reply(`Harus di isi semua !!\nex : ${prefix+command} 62857xxx|nama|hallo\n\nnomor hp tanpa spasi`)
if (!pesan_teman) return reply(`Harus di isi semua !!\nex : ${prefix+command} 62857xxx|nama|hallo\n\nnomor hp tanpa spasi`)
let text_menfess = `*ANONYMOUS CHAT*\n_Hallo Kak ${ucapanWaktu}_\n_Ada pesan *Menfess/Rahasia*_\n\n*• Dari :* ${nama_pengirim}\n*• Pesan :* ${pesan_teman}\n\n_Pesan ini ditulis oleh seseorang_\n_Bot hanya menyampaikan saja._`
let btn_menfes = [{ buttonId: `${prefix}buat_room_chat ${sender}|${num}@s.whatsapp.net|${roomC}`, buttonText: { displayText: '𝗧𝗘𝗥𝗜𝗠𝗔✅' }, type: 1 }]
var button_menfess = {
text: text_menfess,
footer: 'Klik button untuk membalas chat.',
buttons: btn_menfes,
headerType: 1
}
conn.sendMessage(`${num}@s.whatsapp.net`, button_menfess)
reply('Pesan Menfess kamu sudah dikirim, Sedang menunggu untuk diterima.')
if (isGroup) return reply("Pesan menfess kamu sudah dikirim.")
}
break
case 'sc': case 'script':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let text_buysc =`*_Mau beli scriptnya? harga murah kok._*

*Contact Person 📞*

*Admin1:*
*Wa.me/6289519240209*

_*Harga Normal :*_ ~Rp70.000~
*_Harga Promo : Rp50.000_*

_Script Sudah Disusun Rapih_
_Size Script Sudah Ringan_
_Anti Ngelag - Anti Delay_
_Anti Spam - Anti Call_
_Fitur Store_
_Total Fitur 100_`
conn.sendMessage(from, { text: text_buysc }, { quoted: msg })
}
break
case 'request': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n${prefix+command} Req fitur antilink bg`)
var teks = `*| REQUEST FITUR |*`
var teks1 = `\n\nNomor : @${sender.split("@")[0]}\nPesan : ${q}`
var teks2 = `\n\nSucces send to owner`
var bg_lexxy = '6289519240209@s.whatsapp.net'
conn.sendMessage(bg_lexxy, {text: teks + teks1, mentions:[sender]}, {quoted:msg})
conn.sendMessage(from, {text: teks + teks2 + teks1, mentions:[sender]}, {quoted:msg})
}
break
case 'report': {
  if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Masukan parameter text\n*Contoh:*\n${prefix+command} Fitur anu error bang`)
var teks = `*| REPORT FITUR |*`
var teks1 = `\n\nNomor : @${sender.split("@")[0]}\nPesan : ${q}`
var teks2 = `\n\nSucces send to owner`
var bg_lexxy = '6289519240209@s.whatsapp.net'
conn.sendMessage(bg_lexxy, {text: teks + teks1, mentions:[sender]}, {quoted:msg})
conn.sendMessage(from, {text: teks + teks2 + teks1, mentions:[sender]}, {quoted:msg})
}
break
case 'createcp':
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`*CREATECP ACCOUNT*\nExample:\n#${command} domain|package\n\nContoh:\n#${command} sanzzyapi.com|sanzz`)
let usern = `USER${makeid(6)}`
let domain = q.split('|')[0] 
let pekeg = q.split('|')[1]
if (!domain) return reply('Domain wajib di isi!!')
if (!pekeg) return reply('Package Wajib di isi!!')
reply('Creating please wait... ⏳')
axios.get(`https://${hostwhm}:2087/json-api/createacct?api.version=1&username=${usern}&contactemail=4ksanzz@gmail.com&plan=${pekeg}&domain=${domain}`, authWhm)
.then(response => {     
let np = response.data
if (np.metadata.result == 0) {
reply(np.metadata.reason)
} else {
let dsta = np.metadata.output.raw;
var substr = dsta.substring(
dsta.toString().indexOf("+===================================+")
); //substr = 'word. Hello!'
let xxybot = substr.split("| Language: en")[0];
reply(`${xxybot}\n\nLogin : https://${hostwhm}:2087`)
}});
break
case 'listcp':
if (!isOwner) return reply(mess.OnlyOwner)
reply('Wait Getting List Account info....')
axios.get(`https://${hostwhm}:2087/json-api/listaccts?api.version=1`, authWhm)
.then((risol) => {
let lisol = risol.data
var ttdy = lisol.data.acct
let ogh = `*── 「 LIST CPANEL 」 ──*\nTotal Akun : ${ttdy.length}\n`
for (let i = 0; i < ttdy.length; i++) {
ogh += `
\n
─────[\`\`\` ${ttdy[i].user} \`\`\` ]────────
*▢ Maxsub* : ${ttdy[i].maxsub}
*▢ Maxsql* : ${ttdy[i].maxsql}
*▢ Startdate* : ${ttdy[i].startdate}
*▢ Disklimit* : ${ttdy[i].disklimit}
*▢ Maxlst* : ${ttdy[i].maxlst}
*▢ Plan* : ${ttdy[i].plan}
*▢ Owner*: ${ttdy[i].owner}
*▢ IP* : ${ttdy[i].ip}
*▢ Domain* : ${ttdy[i].domain}
*▢ Diskused* : ${ttdy[i].diskused}
*▢ Maxaddons* : ${ttdy[i].maxaddons}
*▢ Suspendreason* : ${ttdy[i].suspendreason}
─────────────────\n\n`
}
reply(ogh)
})
break
case 'terminate':
if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 2) return reply(`Kirim perintah #${command} username`)
reply('Wait Terminating Account....')
axios
.get(
`https://${hostwhm}:2087/json-api/removeacct?api.version=1&username=${args[1]}`, authWhm )
.then((e) => {
if ([1, "1"].includes(e.data?.metadata?.result))
reply(`Done User ${q} Telah di Terminate`);
else {
reply(e.metadata);
console.log(e.data);
}
})
break
case 'mysesi': case 'sendsesi': case 'session':{
if (!isOwner) return reply(mess.OnlyOwner)
reply('please wait..')
await sleep(3000)

// Read Database
var user_bot = await fs.readFileSync('./database/pengguna.json')
var sesi_bot = await fs.readFileSync(`./${setting.sessionName}.json`)

// Sending Document
conn.sendMessage(from, { document: sesi_bot, mimetype: 'document/application', fileName: 'session.json'}, {quoted:msg})
conn.sendMessage(from, { document: user_bot, mimetype: 'document/application', fileName: 'pengguna.json'}, {quoted:msg})
}
break
// CASE BY MELL 
case 'clear':
case 'clearer':
case 'clearerr':{
if (!isOwner) return reply(mess.OnlyOwner)
server_eror.splice('[]')
fs.writeFileSync('./database/func_error.json', JSON.stringify(server_eror))
reply('Done')
}
break
case 'error':{
if (!isOwner) return reply(mess.OnlyOwner)
var teks =`*ERROR SERVER*\n_Total Tercatatat_ : ${server_eror.length}\n\n`
var NO = 1
for (let i of server_eror){
teks +=`=> *ERROR (${NO++})*\n${i.error}\n\n`
}
reply(teks)
}
break
// STORE FUN
case 'shop': case 'list':
if (!isGroup) return reply(mess.OnlyGrup)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
var listMsg = {
text: `Hi @${sender.split("@")[0]}`,
buttonText: 'Click Here!',
footer: `*List From ${groupName}*\n\n⏳ ${jam}\n📆 ${tanggal}`,
mentions: [sender],
sections: [{
title: groupName, rows: arr_rows
}]
}
conn.sendMessage(from, listMsg)
break
case 'addlist':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Berhasil menambah List menu : *${args1}*`)
break

case 'dellist':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!q) return reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
case 'update':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara #${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
updateResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Berhasil update List menu : *${args1}*`)
break
case 'tambah':
if (!q) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one + nilai_two}`)
break
case 'kurang':
if (!q) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one - nilai_two}`)
break
case 'kali':
if (!q) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one * nilai_two}`)
break
case 'bagi':
if (!q) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
reply(`${nilai_one / nilai_two}`)
break
case 'p': case 'proses':{
if (!isGroup) return ('Hanya Dapat Digunakan Gi Group')
if (!isOwner && !isGroupAdmins) return ('Hanya Bisa Digunakan Oleh Admin')
if (!quotedMsg) return reply('Reply pesanannya!')
mentions(`「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan : ${quotedMsg.chats}\n\nPesanan @${quotedMsg.sender.split("@")[0]} sedang di proses!`, [sender])
}
break
case 'd': case 'done':{

if (!isGroup) return ('Hanya Dapat Digunakan Gi Group')
if (!isOwner && !isGroupAdmins) return ('Hanya Bisa Digunakan Oleh Admin')
if (!quotedMsg) return reply('Reply pesanannya!')
mentions(`「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih @${quotedMsg.sender.split("@")[0]} Next Order ya🙏`, [sender])
}
break
case 'setppbot':

if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
if (isImage && isQuotedImage) return reply(`Kirim gambar dengan caption *#setppbot* atau reply gambar yang sudah dikirim dengan pesan *#setppbot*`)
await conn.downloadAndSaveMediaMessage(msg, "image", `./transaksi/${sender.split('@')[0]}.jpg`)
var media = `./transaksi/${sender.split('@')[0]}.jpg`
conn.updateProfilePicture(botNumber, { url: media })
reply('Sukses Mengganti Profile Bot')
await sleep(2000)
fs.unlinkSync(media)
break

case 'fitnah':
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!q) return reply(`Kirim perintah #*${command}* @tag|pesantarget|pesanbot`)
var org = q.split("|")[0]
var target = q.split("|")[1]
var bot = q.split("|")[2]
if (!org.startsWith('@')) return reply('Tag orangnya')
if (!target) return reply(`Masukkan pesan target!`)
if (!bot) return reply(`Masukkan pesan bot!`)
var mens = parseMention(target)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { conversation: `${target}` }}
conn.sendMessage(from, { text: bot, mentions: mentioned }, { quoted: mens.length > 2 ? msg1 : msg2 })
break
case 'del':
case 'delete':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!quotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`)
if (!quotedMsg.fromMe) return reply(`Hanya bisa menghapus chat dari bot`)
conn.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
break
case 'linkgrup': case 'linkgc':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
url = 'https://chat.whatsapp.com/'+url
reply(url)
break
case 'kick':
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
var number;
if (mentionUser.length !== 0) {
number = mentionUser[0]
conn.groupParticipantsUpdate(from, [number], "remove")
} else if (isQuotedMsg) {
number = quotedMsg.sender
conn.groupParticipantsUpdate(from, [number], "remove")
} else {
reply('Tag atau reply orang yg mau dikick\n\n*Contoh:* #kick @tag')
}
break
case 'add': {
if (!isGroup) return reply(mess.OnlyGrup)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!isGroupAdmins) reply(mess.GrupAdmin)
if (!isQuotedMsg && !text) return reply('No orang yg mau diadd\n\n*Contoh:* #add @0')
// let users = isQuotedMsg ? quotedMsg.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
// conn.groupParticipantsUpdate(from, [users], 'add').then((res) => reply(mess.ok())).catch(() => reply(mess.error.api))
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'add').then((res) => reply(jsonformat(res))).catch(() => reply(mess.error.api))

}
break
case 'setppgrup': case 'setppgc':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (isImage && isQuotedImage) return reply(`Kirim gambar dengan caption *#bukti* atau reply gambar yang sudah dikirim dengan caption *#bukti*`)
await conn.downloadAndSaveMediaMessage(msg, "image", `./transaksi/${sender.split('@')[0]}.jpg`)
var media = `./transaksi/${sender.split('@')[0]}.jpg`
await conn.updateProfilePicture(from, { url: media })
await sleep(2000)
reply('Sukses mengganti foto profile group')
fs.unlinkSync(media)
break
case 'setnamegrup': case 'setnamegc':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!q) return reply(`Kirim perintah #${command} teks`)
await conn.groupUpdateSubject(from, q)
.then( res => {
reply(`Sukses`)
}).catch(() => reply(mess.error.api))
break
case 'setdesc': case 'setdescription':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!q) return reply(`Kirim perintah ${command} teks`)
await conn.groupUpdateDescription(from, q)
.then( res => {
reply(`Sukses`)
}).catch(() => reply(mess.error.api))
break
case 'group': case 'grup':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!q) return reply(`Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`)
if (args[0] == "close") {
conn.groupSettingUpdate(from, 'announcement')
reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
} else if (args[0] == "open") {
conn.groupSettingUpdate(from, 'not_announcement')
reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
} else {
reply(`Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`)
}
break
case 'revoke':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
await conn.groupRevokeInvite(from)
.then( res => {
reply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => reply(mess.error.api))
break
case 'tagall':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply(`Teks?`)
let teks_tagall = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ''}\n\n`
for (let mem of participants) {
teks_tagall += `➲ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(from, { text: teks_tagall, mentions: participants.map(a => a.id) }, { quoted: msg })
break
case 'hidetag':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
conn.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case 'welcome':{
  if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply('Khusus Group!') 
if (!msg.key.fromMe && !isOwner && !isGroupAdmins) return reply("Khusus admin!")
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isWelcome) return reply('Sudah aktif✓')
welcomeJson.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcomeJson))
reply('Suksess mengaktifkan welcome di group:\n'+groupName)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
welcomeJson.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcomeJson))
reply('Success menonaktifkan welcome di group:\n'+groupName)
} else { reply('Kata kunci tidak ditemukan!') }
}
break
case 'antilink':{
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink) return reply('Antilink sudah aktif')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Activate Antilink In This Group')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return reply('Antilink belum aktif')
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Disabling Antilink In This Group')
} else { reply('Kata kunci tidak ditemukan!') }
}
break
case "mode":
if (!isOwner) return reply(mess.OnlyOwner)
// if (!isOwner) return reply(mess.OnlyOwner)
//   if (!args[0]) return reply(`╭──( *MODE* )
// ║ • Mode : ${conn.public ? 'Public-Mode' : 'Self-Mode'}
// ║ 
// ┗━━━━━━━━━━━━━━━━━━⬣\nKirim perintah #${command} _options_\nOptions : Public & Self\nContoh : #${command} public`)
 if (args[0] == "public") {
  conn.public = true
 return reply('Public sudah aktif')
//   if (botNumber.public == true) return reply("Sudah Active")
// botNumber = true
// return reply("Mode Public Telah Active")
}else if (args[0] == 'SELFF' || args[0] == 'SELF' || args[0] == 'Self' || args[0] == 'self' || args[0] == 'selff' || args[0] == 'SElf') {
conn.public = true
  return reply('Self sudah aktif')
// } else if (args[0] == "self") {


} else { conn.sendButMessage(from, 'Mode Public ', `© ${setting.ownerName}`, [{
                        buttonId: '.mode public',
                        buttonText: {
                            displayText: 'ON'
                        },
                        type: 1
                    }, {
                        buttonId: '.mode self',
                        buttonText: {
                            displayText: 'OFF'
                        },
                        type: 1
                    }], {
                        quoted: fgif
                    }) }


break
            case 'public': {
                if (!msg.key.fromMe && !isOwner) return reply(mess.ownerOnly())
                conn.public = true
                reply('Public sudah aktif')
            }
            break
            case 'self': {
                if (!m.key.fromMe && !isCreator) return reply(mess.ownerOnly())
                conn.public = false
                reply('Self sudah aktif')
            }
            break
case 'tiktokauto':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAutoDownTT) return reply('Auto download tiktok sudah aktif')
auto_downloadTT.push(from)
fs.writeFileSync('./database/tiktokDown.json', JSON.stringify(auto_downloadTT, null, 2))
reply('Berhasil mengaktifkan auto download tiktok')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAutoDownTT) return reply('Auto download tiktok belum aktif')
auto_downloadTT.splice(anu, 1)
fs.writeFileSync('./database/tiktokDown.json', JSON.stringify(auto_downloadTT, null, 2))
reply('Berhasil mematikan auto download tiktok')
} else { reply('Kata kunci tidak ditemukan!') }
}
break
case 'promote': 
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
  if (mentionUser.length !== 0) {
let users = mentionUser[0] ? mentionUser[0] : m.quoted ? quotedMsg.sender: text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [mentionUser[0]], 'promote').then(res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai Admin`, [mentionUser[0]], true) })
.catch(() => reply(mess.error.api))
} else {
reply(`Tag atau balas pesan member yang ingin dijadikan admin\n\n*Contoh:*\n${prefix+command} @tag`)
}
break
case 'demote':
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (mentionUser.length !== 0) {
conn.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
.then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
.catch(() => reply(mess.error.api))
} else if (isQuotedMsg) {
conn.groupParticipantsUpdate(from, [quotedMsg.sender], "demote")
.then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai member biasa`, [quotedMsg.sender], true) })
.catch(() => reply(mess.error.api))
} else {
reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa\n\n*Contoh:*\n${prefix+command} @tag`)
}
break
case 'infogc':
case 'infogrup':
case 'infogroup':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!isGroup) return reply(mess.OnlyGrup)
let cekgcnya =`*INFO GROUP*
• *ID:* ${from}
• *Name:* ${groupName}
• *Member:* ${groupMembers.length}
• *Total Admin:* ${groupAdmins.length}
• *Welcome:* ${isWelcome? "aktif":"tidak"}
• *Antilink:* ${isAntiLink? "aktif":"tidak"}
• *Tiktok Auto:* ${isAutoDownTT? "aktif":"tidak"}`
reply(cekgcnya)
break
case 'text_grup':{
const reactionMessage = { react: { text: "🗿", key: msg.key}}
conn.sendMessage(from, reactionMessage)
}
break
case 'tourl': case 'upload':
if (cekUser("name", sender) == false) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (isSticker || isQuotedSticker){
await conn.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender.split("@")[0]}.webp`)
reply(mess.wait)
let buffer_up = fs.readFileSync(`./sticker/${sender.split("@")[0]}.webp`)
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand2}`, buffer_up)
var { name, url, size } = await UploadFileUgu(rand2)
let sizeNy = bytesToSize(size)
var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Sticker`
conn.sendMessage(from, {text:teks}, {quoted:msg})
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`)
fs.unlinkSync(rand2)
} else if (isVideo || isQuotedVideo){
await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender.split("@")[0]}.mp4`)
reply(mess.wait)
let buffer_up = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`)
var rand2 = 'sticker/'+getRandom('.mp4')
fs.writeFileSync(`./${rand2}`, buffer_up)
var { name, url, size } = await UploadFileUgu(rand2)
let sizeNy = bytesToSize(size)
var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Video`
conn.sendMessage(from, {text:teks}, {quoted:msg})
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.mp4`)
fs.unlinkSync(rand2)
} else if (isImage || isQuotedImage){
var mediany = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split("@")[0]}.jpg`)
reply(mess.wait)
let buffer_up = fs.readFileSync(mediany)
var rand2 = 'sticker/'+getRandom('.png')
fs.writeFileSync(`./${rand2}`, buffer_up)
var { name, url, size } = await UploadFileUgu(rand2)
let sizeNy = bytesToSize(size)
var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Image`
conn.sendMessage(from, {text:teks}, {quoted:msg})
fs.unlinkSync(mediany)
fs.unlinkSync(rand2)
} else if (isQuotedAudio){
await conn.downloadAndSaveMediaMessage(msg, 'audio', `./sticker/${sender.split("@")[0]}.mp3`)
reply(mess.wait)
let buffer_up = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp3`)
var rand2 = 'sticker/'+getRandom('.mp3')
fs.writeFileSync(`./${rand2}`, buffer_up)
var { name, url, size } = await UploadFileUgu(rand2)
let sizeNy = bytesToSize(size)
var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Audio`
conn.sendMessage(from, {text:teks}, {quoted:msg})
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.mp3`)
fs.unlinkSync(rand2)
} else {
reply(`*reply audio/video/sticker/gambar dengan pesan ${prefix+command}*`)
}
break
case 'tomp3':
case 'toaudio':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isVideo || isQuotedVideo){
await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender.split("@")[0]}.mp4`)
reply(mess.wait)
var media = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`)
let ran = './sticker/'+getRandom('.mp3')
fs.writeFileSync(`./${ran}`, media)
exec(`ffmpeg -i ${media} ${ran}`)
conn.sendMessage(from, { audio: fs.readFileSync(ran),  mimetype: 'audio/mp4', fileName: `${sender.split("@")[0]}ToMp3`, ptt: args[1] == '--ptt' ? true : false }, { quoted: msg })
fs.unlinkSync(ran)
fs.unlinkSync(media)
} else {
reply(`*Reply video dengan pesan ${prefix+command}*`)
}
break

// CONVERT
case 'toimg': case 'toimage':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isSticker || isQuotedSticker){
await conn.downloadAndSaveMediaMessage(msg, "sticker", `./sticker/${sender.split("@")[0]}.webp`)
let buffer = fs.readFileSync(`./sticker/${sender.split("@")[0]}.webp`)
var rand1 = 'sticker/'+getRandom('.webp')
var rand2 = 'sticker/'+getRandom('.png')
fs.writeFileSync(`./${rand1}`, buffer)
reply(mess.wait)
exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
fs.unlinkSync(`./${rand1}`)
if (err) return reply(mess.error.api)
conn.sendMessage(from, {caption: `*Sticker Convert To Image!*`, image: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
fs.unlinkSync(`./${rand2}`)
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`)
})
} else {
reply('*Reply sticker nya dengan pesan #toimg*\n\n*Atau bisa sticker gif dengan pesan #tovideo*')
}
break
case 'tomp4': case 'tovideo':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isSticker || isQuotedSticker){
await conn.downloadAndSaveMediaMessage(msg, "sticker", `./sticker/${sender.split("@")[0]}.webp`)
let buffer = `./sticker/${sender.split("@")[0]}.webp`
reply(mess.wait)
let webpToMp4 = await webp2mp4File(buffer)
conn.sendMessage(from, { video: {url:webpToMp4.result}, caption: 'Convert Webp To Video'}, { quoted: msg })
fs.unlinkSync(buffer)
} else {
reply('*Reply sticker gif dengan pesan #tovideo*')
}
break
case 'smeme':
case 'stikermeme':
case 'stickermeme':
case 'memestiker':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
var atas = q.split('|')[0]
var bawah = q.split('|')[1]
if (!atas) return reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
if (!bawah) return reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
if (isImage || isQuotedImage){
reply(mess.wait)
var media = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split('@')[0]}.jpg`)
var media_url = (await UploadFileUgu(media)).url
var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
var opt = { packname: 'Matchaadepanmu', author: 'Matchaalalumu' }
conn.sendImageAsSticker(from, meme_url, msg, opt)
fs.unlinkSync(media)
} else {
reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
}
break

case 'jadianime':
case 'to-anime':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
//   let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

// // let q = m.quoted ? m.quoted : m
//   var mime2 = q.msg || q.mimetype || ('')
//   if (!mime2) return reply( `Kirim/Reply Gambar dengan caption ${prefix+command}`)
//     if (isImage || isQuotedImage){
// m.reply(md)
// var media = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split('@')[0]}.jpg`)
// var media1_url = (await UploadFileUgu(media)).url
// var memeq_url = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${media1_url}&apikey=f5fa20bad2`
// conn.sendImageAsSticker(from, memeq_url, msg)
// fs.unlinkSync(media)
// } else {
// reply(`Kirim gambar dengan caption ${prefix+command} `)
// }

// if (isImage || isQuotedImage){
// reply(mess.wait)
// var media = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split('@')[0]}.jpg`)
// var media_url = (await UploadFileUgu(media)).url
// var meme_url = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${media_url}`
// var opt = { packname: 'Matchaadepanmu', author: 'Matchaalalumu' }
// conn.sendImageAsSticker(from, meme_url, msg, opt)
// fs.unlinkSync(media)
// } else {
// reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
// }

if (isImage || isQuotedImage) {
  const fileName = fs.readdirSync("./media/sampahnye").length + 1
var mediany = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${fileName}`)
reply(mess.wait)
let buffer_up = fs.readFileSync(mediany)
var rand2 = 'sticker/'+getRandom('.png')

var url = await TelegraPh(mediany)
var hasil = await fetch(`https://api.lolhuman.xyz/api/imagetoanime?apikey=xd-team&img=${url}`)
await conn.sendMessage(from,{image: hasil, caption: `*Image Convert To Anime!*`}, { quoted: msg })
} else {
 reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
 }
break
case "gpt": case "chatgpt":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
  try{
if (!text) return reply(`Example : ${prefix + command} Ayam Goreng`) 
  let { data } =  await axios.get("https://api.lolhuman.xyz/api/openai?apikey=xd-team&text="+ encodeURIComponent(text)) 
let teks = "*ChatGPT* \n\n"
teks += `Result : ${data.result}\n`

reply(teks)
} catch {
reply("Maaf Kak Fitur Sedang Error Silahkan Chat Owner Agar Segera Di Perbaiki") 
}

break
case "dall-e":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
try {
if (!text) return reply(`Example : ${prefix + command} Ayam Goreng`) 
reply(mess.wait)
let res =(`https://api.lolhuman.xyz/api/dall-e?apikey=xd-team&text=${text}`) 
let q = "*Dall-e* \n\n"
conn.sendImage(from, res, {quoted:msg})
}
catch {
reply("Maaf Kak Fitur Sedang Error Silahkan Chat Owner Agar Segera Di Perbaiki") 
}
break
case "ai": case "openai": 
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
          try {
            if (setting2.keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
            const configuration = new Configuration({
              apiKey: setting2.keyopenai,
            });
            const openai = new OpenAIApi(configuration);

            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: text,
              temperature: 0, // Higher values means the model will take more risks.
              max_tokens: 2048, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
              top_p: 1, // alternative to sampling with temperature, called nucleus sampling
              frequency_penalty: 0.3, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
              presence_penalty: 0 // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
          });
            reply(`${response.data.choices[0].text}`);
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
          break;
        case "img": case "ai-img": case "image": case "images":
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
          try {
            if (setting2.keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`);
            const configuration = new Configuration({
              apiKey: setting2.keyopenai,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            conn.sendImage(from, response.data.data[0].url, text, mek);
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
          break;
case 'swm':
case 'stikerwm':
case 'stickerwm':
case 'takesticker':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Kirim video/foto dengan caption ${prefix+command} packname|author atau balas video/foto yang sudah dikirim`)
var pname = q.split('|')[0]
var athor = q.split('|')[1]
reply(mess.wait)
if (isImage || isQuotedImage){
await conn.downloadAndSaveMediaMessage(msg, "image", `./sticker/${sender.split("@")[0]}.jpeg`)
var media = fs.readFileSync(`./sticker/${sender.split("@")[0]}.jpeg`)
reply(mess.wait)
var opt = { packname: pname, author: athor }
conn.sendImageAsSticker(from, media, msg, opt)
fs.unlinkSync(media)
} else if (isVideo || isQuotedVideo) {
reply(mess.wait)
var media = await conn.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
var opt = { packname: pname, author: athor }
conn.sendImageAsSticker(from, media, msg, opt)
fs.unlinkSync(media)
} else {
reply(`Kirim video/foto dengan caption ${prefix+command} packname|author atau balas video/foto yang sudah dikirim`)
}
break
case 'sticker': case 's': case 'stiker':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isImage || isQuotedImage){
await conn.downloadAndSaveMediaMessage(msg, "image", `./sticker/${sender.split("@")[0]}.jpeg`)
let buffer = fs.readFileSync(`./sticker/${sender.split("@")[0]}.jpeg`)
reply(mess.wait)
var rand1 = 'sticker/'+getRandom('.jpeg')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./sticker/${sender.split("@")[0]}.jpeg`)
fs.unlinkSync(`./${rand2}`)})}).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"]).toFormat('webp').save(`${rand2}`)
} else {
reply(`Kirim gambar dengan caption ${prefix+command} atau balas gambar yang sudah dikirim`)
}
break
// case 'attp2':
// case 'attp':
// case 'ttp2':
// case 'ttp':{
//   if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
// if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
// if (!q) return reply(`Contoh:\n${prefix+command} saya wibu`)
// var nyz1 = await getBuffer(`https://saipulanuar.ga/api/maker/${command}?text=${q}&apikey=jPHjZpQF`)
// let file_path = "./sticker/";
// let file_name = "mydata.jpeg";
// fs.writeFileSync('./getpp.jpeg', conn.nyz1(data))
// await ffmpeg("getpp.jpeg")
// .input("getpp.jpeg")
// .on('error', console.error)
// .on('end', function () {conn.sendMessage(from, { sticker: fs.readFileSync(`./getpp.webp`) })})
// .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
// .toFormat('webp')
// .save('./getpp.webp')
// await sleep(5000)
// fs.unlinkSync('./getpp.jpeg')
// fs.unlinkSync('./getpp.webp')
// }
// break
case 'sgif':
case 'stickergif':
case 'stikergif':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (isVideo && msg.message.videoMessage.seconds < 10 || isQuotedVideo && quotedMsg.videoMessage.seconds < 10) {
await conn.downloadAndSaveMediaMessage(msg, "video", `./sticker/${sender.split("@")[0]}.mp4`)
let buffer = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`)
reply(mess.wait)
var rand1 = 'sticker/'+getRandom('.mp4')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./${rand2}`)
fs.unlinkSync(buffer)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
} else {
reply(`Kirim video dengan caption ${prefix+command} atau balas video yang sudah dikirim`)
}
break

// LOGO MAKER
break
case 'dadu':
case 'patrick':
case 'amongus':
case 'gawrgura':
case 'anjing':
case 'bucinstick':{
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
reply(mess.wait)
let buffer = `https://api.lolhuman.xyz/api/sticker/${command}?apikey=${setting.api_lolkey}`
conn.sendMessage(from, { sticker:{url:buffer}, mimetype:'image/webp'}, { quoted: msg })
}
break
case 'tiktok':{
  if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply('contoh :\n#tiktok https://vt.tiktok.com/ZSRG695C8/')
reply(mess.wait)
fetchJson(`https://saipulanuar.ga/api/download/tiktok2?url=${q}&apikey=dyJhXvqe`)
.then(tt_res => {
reply(`𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗

𝘼𝙪𝙩𝙝𝙤𝙧: NovXd
𝙅𝙪𝙙𝙪𝙡: ${tt_res.result.judul}
𝙎𝙤𝙪𝙧𝙘𝙚: ${q}

Video sedang dikirim...`)
conn.sendMessage(from,{video:{url:tt_res.result.video.link2}, caption:'No Watermark!'}, {quotes:msg})
}).catch((err) => {
reply('Terjadi Kesalahan!!\nUrl tidak valid')
})
}
break
case "ssweb":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!text) return reply(`Example : ${prefix + command} https://github.com/connn`) 
conn.sendMessage(from, { image: { url: "https://saipulanuar.ga/api/download/ssweb2?url=" + args[0] }, caption: "Nih kak" }, { quoted: msg }) 
break

case "infocuaca":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
try{
if (!text) return reply(`Example : ${prefix + command} bandung`) 
let { data } = await axios.get("https://saipulanuar.ga/api/info/cuaca?provinsi=jawa-barat&kota=" + encodeURI(text)) 
let teks = "Info Cuaca \n\n"
teks += `Id : ${data.result.id}\n`
teks += `Latitude : ${data.result.latitude}\n`
teks += `Longitude : ${data.result.longitude}\n`
teks += `Coordinate : ${data.result.coordinate}\n`
teks += `Type : ${data.result.type}\n`
teks += `Region : ${data.result.region}\n`
teks += `Level : ${data.result.level}\n`
teks += `Description : ${data.result.description}\n`
teks += `Domain : ${data.result.domain}\n`
teks += `Tags : ${data.result.tags}`
reply(teks) 
} catch {
reply("Maaf Kak Fitur Sedang Error Silahkan Chat Owner Agar Segera Di Perbaiki") 
}

case "removebg":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
try{
if (isImage || isQuotedImage) {
// const fileName = fs.readdirSync("./media/sampahnye").length + 1
// const media = await conn.downloadAndSaveMediaMessage(quoted, `./media/sampahnye/${fileName}`)
// const anu = await removebg(media)
  const fileName = fs.readdirSync("./sticker/").length + 1
var mediany2 = await conn.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${fileName}.webp`)
// reply(mess.wait)
let buffer_up2 = fs.readFileSync(mediany2)
var rand2 = 'sticker/'+getRandom('.png')

var anu = await removebg(mediany2)
await conn.sendMessage(from, { image: anu, caption: mess.success }, { quoted: msg })
} else if (isQuotedSticker) {
const fileName = fs.readdirSync("./sticker/").length + 1
const media = await conn.downloadAndSaveMediaMessage(quoted, `./sticker/${fileName}`)
exec(`ffmpeg -i ${media} ./sticker/${fileName + 1}.png`, async (err) => {
const anu = await removebg(`./sticker/${fileName + 1}.png`)
await conn.sendImageAsSticker(from, anu, m, { packname: "Matchaadepanmu", author: "Matchaalalumu" })
})
} else reply(`Use photos or Reply photos/sticker with captions ${prefix + command}`)
} catch (e) {
console.log(e) 
reply("Maaf kak fiture ini sedang error")
}
break
case "corongmerah":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
try{
if (!text) return reply(`Example : ${prefix + command} Ayam Goreng`) 
let { data } = await axios.get("https://saipulanuar.ga/api/download/cariresep?query=" + encodeURIComponent(text)) 
let teks = "Resep Masakan Ala Corong Merah :v \n\n"
for(let x of data.result) {
teks += `Judul : ${x.judul}\n`
teks += `Link : ${x.link}\n\n`
} 
reply(teks) 
} catch {
reply("Maaf Kak Fitur Sedang Error Silahkan Chat Owner Agar Segera Di Perbaiki") 
}
break

case "asupan":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!quoted) return reply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
reply(mess.wait)
var teks = `Nih Kak >\\<`
var buffer = `https://api.zahwazein.xyz/randomasupan/asupan?apikey=f5fa20bad2`
conn.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted:msg})
break
//=================================================//

case "cecan":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!quoted) return reply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
reply(mess.wait)
var teks = `Nih Kak >\\<`
var buffer = `https://api.zahwazein.xyz/randomasupan/cecan?apikey=f5fa20bad2`
conn.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:msg})
break
case "cecanchina":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!quoted) return reply(`*Ngetik Yg Bener Dek!!* ${prefix + command}`) 
reply(mess.wait)
var teks = `Nih Kak >\\<`
var buffer = `https://api.zahwazein.xyz/randomasupan/china?apikey=f5fa20bad2`
conn.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:msg})
break

case "apakah":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ["Iya", "Tidak", "Bisa Jadi", "Betul"]
const kah = apa[Math.floor(Math.random() * apa.length)]
conn.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: msg })
break
//=================================================//
case "bisakah":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ["Bisa","Gak Bisa","Gak Bisa Ajg Aaokawpk","TENTU PASTI KAMU BISA!!!!"]
const ga = bisa[Math.floor(Math.random() * bisa.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: msg })
break
//=================================================//
case "bagaimanakah":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ["Gak Gimana2", "Sulit Itu Bro", "Maaf Bot Tidak Bisa Menjawab", "Coba Deh Cari Di Gugel","astaghfirallah Beneran???","Pusing ah","Owhh Begitu:(","Yang Sabar Ya Bos:(","Gimana yeee"]
const ya = gimana[Math.floor(Math.random() * gimana.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: msg })
break
//=================================================//
case "rate":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ["5", "10", "15" ,"20", "25","30","35","40","45","50","55","60","65","70","75","80","85","90","100"]
const te = ra[Math.floor(Math.random() * ra.length)]
conn.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: msg })
break
//=================================================//
case "gantengcek":
case "cekganteng":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} conn`)
const gan = ["5", "10", "15" ,"20", "25","30","35","40","45","50","55","60","65","70","75","80","85","90","100"]
const teng = gan[Math.floor(Math.random() * gan.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: msg })
break
//=================================================//
case "cantikcek":
case "cekcantik":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} conn`)
const can = ["5", "10", "15" ,"20", "25","30","35","40","45","50","55","60","65","70","75","80","85","90","100"]
const tik = can[Math.floor(Math.random() * can.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: msg })
break
//=================================================//
case "sangecek":
case "ceksange":
case "gaycek":
case "cekgay":
case "lesbicek":
case "ceklesbi":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ["5", "10", "15","20", "25","30","35","40","45","50","55","60","65","70","75","80","85","90","100"]
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: msg })
break
//=================================================//
case "kapankah":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ["5 Hari Lagi", "10 Hari Lagi", "15 Hari Lagi","20 Hari Lagi", "25 Hari Lagi","30 Hari Lagi","35 Hari Lagi","40 Hari Lagi","45 Hari Lagi","50 Hari Lagi","55 Hari Lagi","60 Hari Lagi","65 Hari Lagi","70 Hari Lagi","75 Hari Lagi","80 Hari Lagi","85 Hari Lagi","90 Hari Lagi","100 Hari Lagi","5 Bulan Lagi", "10 Bulan Lagi", "15 Bulan Lagi","20 Bulan Lagi", "25 Bulan Lagi","30 Bulan Lagi","35 Bulan Lagi","40 Bulan Lagi","45 Bulan Lagi","50 Bulan Lagi","55 Bulan Lagi","60 Bulan Lagi","65 Bulan Lagi","70 Bulan Lagi","75 Bulan Lagi","80 Bulan Lagi","85 Bulan Lagi","90 Bulan Lagi","100 Bulan Lagi","1 Tahun Lagi","2 Tahun Lagi","3 Tahun Lagi","4 Tahun Lagi","5 Tahun Lagi","Besok","Lusa",`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: msg })
break
//=================================================//
case "wangy":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply (`Contoh : .wangy conn`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
 reply(awikwok)
break
//=================================================//
case "cekmati":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
case "attp": case "ttp": {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
  // let text = q.split('|')[0]

if (!text) return reply(`Example : ${prefix + command} text`) 
   var opt = { packname: 'Matchaadepanmu', author: 'Matchaalalumu' }
//  let { data } = await axios.get("https://api.lolhuman.xyz/api/attp2?apikey=54930b48e2d97c1c78363c3c&text=" + encodeURIComponent(text)) 
// conn.sendMessage(from, { sticker: data }, msg, {asSticker: true})
let data = await fetch(`https://api.lolhuman.xyz/api/attp2?apikey=54930b48e2d97c1c78363c3c&text=${encodeURIComponent(text)}`)

let data3 = await conn.sendMessage(from, { image:  data , mimetype: "image", fileName: `${data}.jpeg` }, { quoted: msg })
 await fs.unlinkSync(data3)

}

// break
// case "play2":
// try{
// if (!text) return reply(`Example : ${prefix + command} Temola`)
// let { data } = await axios.get("https://saipulanuar.ga/api/yt/search?query=" + encodeURI(text)) 
// let listSerch = []
// // for (let x of data.result) {
// // if (x.type == "video") {
// // listSerch.push({  
// // title: x.title,
// // description: x.description, 
// // thumbnail: x.thumbnail, 
// // author: x.author.name, 
// // views: x.views, 
// // published: x.ago, 
// // url: x.url
// // })
// // }
// // }
// for (let x of data.result) {
// if (x.type == "video") {
//  listSerch.push({
//  title: x.title,
//  description: x.description, 
//  thumbnail: x.thumbnail, 
//  author: x.author.name, 
//  views: x.views, 
//  published: x.ago, 
//  url: x.url
// })
// }
// }
// let result = conn.pickRandom(listSerch)
// let buttons = [
// { buttonId: `${prefix}ytmp3 ${result.url}`, buttonText: { displayText: "audio" }, type: 1 },
// { buttonId: `${prefix}ytmp4 ${result.url}`, buttonText: { displayText: "video" }, type: 1 }]
// let teks = "Youtube Play :\n\n"
// teks += `⭔ *Title* : ${result.title}\n`
// teks += `⭔ *Author* : ${result.author}\n`
// teks += `⭔ *Views* : ${result.views}\n`
// teks += `⭔ *Published* : ${result.published}\n`
// teks += `⭔ *Description* : ${result.description}\n`
// conn.sendMessage(from, { image: { url: result.thumbnail }, caption: teks, buttons: buttons }, { quoted: msg }) 

// } catch {
// reply("Maaf Kak Fitur Sedang Error") 
// }
// break
case "yts":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
try{
if (!text) return reply(`Example : ${prefix + command} Temola`)
let { data } = await axios.get("https://saipulanuar.ga/api/yt/search?query=" + encodeURI(text)) 
let listSerch = []
for (let x of data.result) {
if (x.type == "video") {
listSerch.push({
title: x.title,
rowId: `${prefix}ytmp3 ${x.url}`,
description: x.description
})
}
}
const sections = [
{title: "Total Search🔍" + data.result.length,
rows: listSerch }]
const listMessage = {
text: `📂Youtube Search`,
buttonText: "Click Here",
sections
}
conn.sendMessage(from, listMessage, { quoted: msg })
} catch {
reply("Maaf kak fitur sedang error") 
}
//=================================================//
case "ytmp3":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
try{
if (!text) return reply(`Example : ${prefix + command} https://www.youtube.com/watch?v=qhA7r4FJx1wTitle`)
let { data } = await axios.get("https://saipulanuar.ga/api/download/ytmp3?url=" + args[0])
let teks = "Youtube Audio :\n\n"
teks += `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Channel* : ${data.result.channel}\n`
teks += `⭔ *Views* : ${data.result.views}\n`
teks += `⭔ *Published* : ${data.result.published}`
teks += `⭔ *Link* : ${data.result.url}`
conn.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: msg })
// conn.sendMessage(from, { audio: { url: data.result.url }, mimetype: "audio/mp4", fileName: `${data.result.title}.mp3` }, { quoted: msg })
conn.sendMessage(sender, { audio: {url: data.result.url}, mimetype:'audio/mp3', fileName: `${data.result.title}.mp3`}, {quoted:msg})
} catch {
reply("Maaf Kak Fitur Sedang Error") 
}
break
//=================================================//
case "ytmp4":
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
try{
if (!text) return reply(`Example : ${prefix + command} https://www.youtube.com/watch?v=qhA7r4FJx1wTitle`)
let { data } = await axios.get("https://saipulanuar.ga/api/download/ytmp4?url=" + args[0])
let teks = "Youtube Video :\n\n"
teks += `⭔ *Title* : ${data.result.title}\n`
teks += `⭔ *Channel* : ${data.result.channel}\n`
teks += `⭔ *Views* : ${data.result.views}\n`
teks += `⭔ *Published* : ${data.result.published}`
conn.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: msg })
conn.sendMessage(from, { video: { url: data.result.url }, mimetype: "video/mp4", fileName: `${data.result.title}.mp4` }, { quoted: msg })
} catch {
reply("Maaf Kak Fitur Sedang Error") 
}

case "stalkff":
if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
if (!chats.startsWith(prefix) && !msg.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(PathAuto + sender.split("@")[0] + ".json"))
if (data_deposit.session === "stalkff") {
if (chats.length === 0) return;
if (isNaN(chats)) return reply("Hanya angka!")
data_deposit.data.id_nya = Number(chats);
let stalk_freefire = await stalkff(data_deposit.data.id_nya)
if (stalk_freefire.status == 404) return reply('*Error ID tidak ditemukan*\n*Silahkan kirim ID yg valid*')
data_deposit.session = "input_id_ff";
fs.writeFileSync(PathAuto + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
reply(`*STALKER FF*
*ID:* ${data_deposit.data.id_nya}
*Username:* ${stalk_freefire.nickname}`)
fs.unlinkSync(PathAuto + sender.split('@')[0] + '.json')
}
}
}
break
case 'play': case 'ytplay': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
reply(mess.wait)
let buttons = [
// {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
// {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '► Audio'}, type: 1}
// ]
//  let buttons = [
 { buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: { displayText: "Audio" }, type: 1 },
 { buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: { displayText: "video" }, type: 1 }]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: setting.ownerName,
buttons: buttons,
headerType: 4
}
conn.sendMessage(from, buttonMessage, { quoted: msg })
}
break

case 'assalamualaikum': {
reply(`Waalaikumsalam`)
}
break
//=================================================//
case 'bot': {
reply(`*STATUS: BOT AKTIF*`)
}
break

//=================================================//
case 'emojimix': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
let [emoji1, emoji2] = text.split`+`
if (!emoji1)  return reply( `Example : ${prefix + command} 😅+🤔`)
if (!emoji2)  return reply( `Example : ${prefix + command} 😅+🤔`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await conn.sendImageAsSticker(from, res.url, msg, { packname: "Matchaadepanmu", author: "Matchaalalumu", categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (!text) return reply( `Example : ${prefix + command} 😅`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await conn.sendImageAsSticker(from, res.url, msg, { packname: "Matchaadepanmu", author: "Matchaalalumu", categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
   case 'autobio': {
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                if (args[0] === "on") {
                    if (conn.autobio === true) return reply('Public sudah aktif')
                    conn.autobio = true
                   reply('Public sudah aktif')
                } else if (args[0] === "off") {
                    if (conn.autobio === false) return reply('Public belum aktif')
                    conn.autobio = false
                    reply('Public sudah aktif')
                } else {
                    conn.sendButMessage(from, 'Mode Autobio', `© ${setting.ownerName}`, [{
                        buttonId: '.autobio on',
                        buttonText: {
                            displayText: 'ON'
                        },
                        type: 1
                    }, {
                        buttonId: '.autobio off',
                        buttonText: {
                            displayText: 'OFF'
                        },
                        type: 1
                    }], {
                        quoted: fgif
                    })
//                       let buttons2 = [
//  { buttonId: `${prefix}autobio on `, buttonText: { displayText: "On" }, type: 1 },
//  { buttonId: `${prefix}autobio off `, buttonText: { displayText: "Off" }, type: 1 }]
// let buttonMessage2 = {
// image: { url: pp_bot },
// caption: `
// ⭔ Mode Autobio : © ${setting.ownerName}`,
// footer: setting.ownerName,
// buttons: buttons2,
// headerType: 4
// }
// conn.sendMessage(from, buttonMessage2, { quoted: msg })

                }
            }
            break
default:

/*━━━━━━━[ Function Menfess ]━━━━━━━*/

// Function Menfess Auto Bales
// Jangan Lu Edit Lagi Disini
// Buy No enc? Chat Wa
// Wa Guwe : 081226416919

var _0x1a6220=_0x4a33;(function(_0x5b325d,_0xd37330){var _0x15f0df=_0x4a33,_0x17b9a4=_0x5b325d();while(!![]){try{var _0x5034a9=parseInt(_0x15f0df(0x1d3))/0x1*(-parseInt(_0x15f0df(0x1ca))/0x2)+-parseInt(_0x15f0df(0x1d4))/0x3*(parseInt(_0x15f0df(0x1c5))/0x4)+parseInt(_0x15f0df(0x1c7))/0x5*(-parseInt(_0x15f0df(0x1cf))/0x6)+-parseInt(_0x15f0df(0x1d5))/0x7*(parseInt(_0x15f0df(0x1c9))/0x8)+-parseInt(_0x15f0df(0x1cc))/0x9+-parseInt(_0x15f0df(0x1c4))/0xa+parseInt(_0x15f0df(0x1cd))/0xb;if(_0x5034a9===_0xd37330)break;else _0x17b9a4['push'](_0x17b9a4['shift']());}catch(_0x1d82f8){_0x17b9a4['push'](_0x17b9a4['shift']());}}}(_0x351e,0x54a56));function _0x4a33(_0x1e5c04,_0x200f07){var _0x351e1e=_0x351e();return _0x4a33=function(_0x4a33ba,_0x1cdc80){_0x4a33ba=_0x4a33ba-0x1c3;var _0x110a2e=_0x351e1e[_0x4a33ba];return _0x110a2e;},_0x4a33(_0x1e5c04,_0x200f07);}function _0x351e(){var _0x26a0e1=['pesan\x20diteruskan','1103568ZGfugO','sendMessage','message','text','445736reezra','18tskWyb','1168237exHeIM','messages','4186710kRyETk','297452lFwhFR','type','10QPbKSn','teman','16yYTSyk','2wHOPdZ','conversation','2985354kCXAlP','29597029dyJWde'];_0x351e=function(){return _0x26a0e1;};return _0x351e();}if(!isCmd){if(cekPesan('id',sender)==null)return;if(cekPesan(_0x1a6220(0x1c8),sender)==![])return;if(m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1c6)]==_0x1a6220(0x1cb)||m[_0x1a6220(0x1c3)][0x0]['type']=='extendedTextMessage'){try{var chat_anonymous=m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1d1)]['extendedTextMessage'][_0x1a6220(0x1d2)];}catch(_0x2d0d82){var chat_anonymous=m[_0x1a6220(0x1c3)][0x0][_0x1a6220(0x1d1)][_0x1a6220(0x1cb)];}let text_nya_menfes='*ANONYMOUS\x20CHAT*\x0a💬\x20:\x20'+chat_anonymous;conn[_0x1a6220(0x1d0)](cekPesan(_0x1a6220(0x1c8),sender),{'text':text_nya_menfes}),conn['sendMessage'](from,{'text':_0x1a6220(0x1ce)},{'quoted':msg});}}

// Bang yg ini knp di enc?
// Gua belike : kamu nanya:v

// Kan di thumbnail no enc 100%?
// Gua belike : function nya langka bro

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

// AUTHOR : Mell
// INI CONSOLE LOG JNGN EDIT

}} catch (err) {
console.log(color('[ERROR]', 'red'), err)
server_eror.push({"error": `${err}`})
fs.writeFileSync('./database/func_error.json', JSON.stringify(server_eror))
}}