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
        inline_keyboard: keyboard.mainKeyboard
      }
    });
  }
});

bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;

  const opts = {
    chat_id: query.message.chat.id,
    message_id: query.message.message_id,
  };

  if (query.data === constants.query.randomMeme) {
    bot.sendMessage(chatId, constants.msg.wait);

    const randomImage = await cloud.getRandomImage();

    bot.sendPhoto(chatId, randomImage.url)
      .then(() => {
        bot.sendMessage(chatId, 'Ну как?', {
          reply_markup: {
            inline_keyboard: keyboard.reviewKeyboard(),
          }
        })
      });
  }

  if (query.data === constants.query.getMemesLength) {
    const resources = await cloud.getImagesList();

    bot.sendMessage(chatId, constants.msg.imagesLength(resources.length), {
      reply_markup: {
        inline_keyboard: keyboard.mainKeyboard
      }
    });
  }

  if (query.data === constants.query.showMenu) {
    bot.sendMessage(chatId, constants.msg.hello, {
      reply_markup: {
        inline_keyboard: keyboard.mainKeyboard
      }
    });
  }

  if (query.data === constants.reactions.laugh) {
    opts.reply_markup = {
      inline_keyboard: keyboard.reviewKeyboard(constants.reactions.laugh, 1),
    };

    bot.editMessageText('Ну как', opts);
  }
});
