require('dotenv').config();

module.exports = {
  query: {
    randomMeme: 'randomMeme',
    getMemesLength: 'getMemesLength',
  },
  cloudFolder: 'memes',
  msg: {
    hello: 'Что бы ты хотел?',
    imagesLength: (length) => `В нашей базе ${length} мемов`,
    error: 'Непонятно, давай попробуем ещё раз?',
  }
};
