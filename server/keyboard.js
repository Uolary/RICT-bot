const constants = require('./constants');

module.exports = [
  [
    {
      text: 'Случайный мем',
      callback_data: constants.query.randomMeme,
    },
    {
      text: 'Получить общее количество мемов',
      callback_data: constants.query.getMemesLength,
    },
  ],
];
