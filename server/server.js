const keyboard = require('./keyboard');
const constants = require('./constants');
const cloud = require('./Cloud');

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Что бы ты хотел?', {
    reply_markup: {
      inline_keyboard: keyboard
    }
  });
});

bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;
  let img = '';

  if (query.data === constants.query.randomMeme) {
    console.log('random mem');
  }

  if (query.data === constants.query.getMemesLength) {
    const resources = await cloud.getImagesList();

    bot.sendMessage(chatId, `В нашей базе ${resources.length} мемов`);
  }
});
