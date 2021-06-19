require('dotenv').config();

module.exports = {
  query: {
    randomMeme: 'randomMeme',
    getMemesLength: 'getMemesLength',
  },
  cloudFolder: 'memes',
  msg: {
    startMemBot: '/startMemBot',
    hello: 'Что бы ты хотел?',
    imagesLength: (length) => `В нашей базе ${length} мемов`,
    error: 'Непонятно, давай попробуем ещё раз?',
  }
};
