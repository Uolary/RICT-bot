const constants = require('./constants');

module.exports = [
  [
    {
      text: 'Случайный мем',
      callback_data: constants.query.randomMeme,
    },
    {
      text: 'Общее количество мемов',
      callback_data: constants.query.getMemesLength,
    },
  ],
];
