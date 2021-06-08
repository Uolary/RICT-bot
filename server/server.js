require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const cloudinary = require('cloudinary').v2;

const keyboard = require('./keyboard');
const constants = require('./constants');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что бы ты хотел?', {
    reply_markup: {
      inline_keyboard: keyboard
    }
  });
});

bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  let img = '';

  if (query.data === constants.query.randomMeme) {
    console.log('random mem')
  }
});
