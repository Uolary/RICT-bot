const constants = require('./constants');

module.exports.mainKeyboard = [
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

module.exports.reviewKeyboard = (key, value) => (
  [
    [
      {
        text: key === constants.reactions.laugh ? `\u{1F604} ${value}` : '\u{1F604}',
        callback_data: constants.reactions.laugh,
      },
      {
        text: key === constants.reactions.neutral ? `\u{1F610} ${value}` : '\u{1F610}',
        callback_data: constants.reactions.neutral,
      },
      {
        text: key === constants.reactions.heart ? `\u{2764} ${value}` : '\u{2764}',
        callback_data: constants.reactions.heart,
      },
      {
        text: "Хочу еще",
        callback_data: constants.query.randomMeme,
      }
    ],
  ]
);
