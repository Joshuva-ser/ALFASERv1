const Ktb = require('../events'); 
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:ᴊᴏꜱʜᴜᴠᴀ [OWNER]\n' // full name
            + 'ORG:ᴊᴏꜱʜᴜᴠᴀ;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=918129900380:+91 8129900380\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "ᴊᴏꜱʜᴜᴠᴀ [OWNER]", vcard: vcard}, MessageType.contact)
}))
