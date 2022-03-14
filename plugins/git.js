const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/1r06Lg7/Joshuvaser.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⚜️➪𝑱𝑶𝑺𝑯𝑼𝑽𝑨 𝑺𝑬𝑹 𝑩𝑶𝑻☜︎︎︎⚜️*
ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/918129900380


Tʜɪs ʙᴏᴛ Oᴡɴᴇʀ Nᴀᴍᴇ : ❤️ ✌︎ᴀʟꜰᴀ ꜱᴇʀ Bᴏᴛ ➪ 𝙹ᴏꜱʜᴜᴠᴀ

Gɪᴛʜᴜʙ ʟɪɴᴋ:    https://github.com/Joshuva-ser/ALFASERv1

ᴊᴏꜱʜᴜᴠᴀꜱᴇʀ ʙᴏᴛ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/DG87G5A3cEz4hLTH5LKbPL

Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀᴅᴇ : https://github.com/Joshuva-ser/ALFASERv1/tree/master/uploads

Sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀᴅᴇ:https://github.com/Joshuvaser/Anjuserv2/tree/master/sticker

ɪɴꜱᴛᴀɢᴀʀᴀᴍ ꜰᴏʟʟᴏᴡ : https://instagram.com/j_o_s_h_u_v_a__?utm_medium=copy_link

♥️ᴀʟꜰᴀ ꜱᴇʀ Bᴏᴛ Cʀᴇᴀᴛᴇᴅ Bʏ 𝙹ᴏꜱʜᴜᴠᴀ💝
`}) 

}));
