const keyboard = require('./keyboard');
const constants = require('./constants');
const cloud = require('./Cloud');

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, constants.helloMsg, {
    reply_markup: {
      inline_keyboard: keyboard
    }
  });
});

bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;
  let imgUrl = '';

  if (query.data === constants.query.randomMeme) {
    const randomImage = await cloud.getRandomImage();

    imgUrl = randomImage.url;
  }

  if (query.data === constants.query.getMemesLength) {
    const resources = await cloud.getImagesList();

    bot.sendMessage(chatId, constants.msg.imagesLength(resources.length));
  }

  console.log(imgUrl);

  if (imgUrl) {
    bot.sendPhoto(chatId, imgUrl, {
      reply_markup: {
        inline_keyboard: keyboard
      }
    });
  } else {
    bot.sendMessage(chatId, constants.msg.error, {
      reply_markup: {
        inline_keyboard: keyboard
      }
    });
  }
});
