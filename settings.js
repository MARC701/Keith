
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || '';
const dev = process.env.OWNER_NUMBER || '923111977378';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'true';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'true';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅*Status Viewed By 𝐌𝐀𝐑𝐂-𝐌𝐃 Whatsapp Bot*';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💛,❤️,💜,🤍,💙';

const botPrefix = process.env.PREFIX || ".";
const botAuthor = process.env.AUTHOR || "𝐀𝐫𝐬𝐥𝐚𝐧 𝐂𝐡𝐚𝐮𝐝𝐡𝐚𝐫𝐲 👑";
const botUrl = process.env.BOT_PIC || "https://files.catbox.moe/qyogy8.jpg";
const botGurl = process.env.BOT_GURL || "https://whatsapp.com/channel/0029Vat4TFC0QeaoLURbP61u";
const botTimezone = process.env.BOT_TIMEZONE || "Asia/Karachi";
const botBotname = process.env.BOTNAME || "ᴍᴀʀᴄ-ᴍᴅ";
const botPackname = process.env.BOT_PACKNAME || "ᴍᴀʀᴄ-ᴍᴅ";
const botMode = process.env.BOT_MODE || "public";
const botSessionName = process.env.BOT_SESSION_NAME || "𝐌𝐀𝐑𝐂-𝐌𝐃";

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database = DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,
  dev,
  session, 
  autostatusAutoviewStatus,
  autostatusAutoLikeStatus,
  autostatusAutoReplyStatus,
  autostatusStatusReplyText,
  autostatusStatusLikeEmojis,
  botPrefix,
  botAuthor,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botPackname,
  botMode,
  botSessionName
};
