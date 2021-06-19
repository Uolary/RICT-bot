require('dotenv').config();

module.exports = {
  query: {
    randomMeme: 'randomMeme',
    getMemesLength: 'getMemesLength',
    editMessage: 'editMessage',
    showMenu: 'showMenu',
  },
  reactions: {
    laugh: 'laugh',
    neutral: 'neutral',
    heart: 'heart',
  },
  cloudFolder: 'memes',
  msg: {
    startMemBot: '/start',
    hello: 'Что ты хочешь?',
    wait: 'Ищем мем...',
    imagesLength: (length) => `В нашей базе ${length} мемов`,
    error: 'Непонятно, давай попробуем ещё раз?',
  }
};
