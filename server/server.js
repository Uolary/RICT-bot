const keyboard = require('./keyboard');
const constants = require('./constants');
const cloud = require('./Cloud');

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.text === constants.msg.startMemBot) {
    bot.sendMessage(chatId, constants.msg.hello, {
      reply_markup: {
        inline_keyboard: keyboard
      }
    });
  }
});

bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;

  if (query.data === constants.query.randomMeme) {
    bot.sendMessage(chatId, 'Ищем мем...');

    const randomImage = await cloud.getRandomImage();

    bot.sendPhoto(chatId, randomImage.url, {
      reply_markup: {
        inline_keyboard: keyboard
      }
    });

    return;
  }

  if (query.data === constants.query.getMemesLength) {
    const resources = await cloud.getImagesList();

    bot.sendMessage(chatId, constants.msg.imagesLength(resources.length), {
      reply_markup: {
        inline_keyboard: keyboard
      }
    });
  }
});
