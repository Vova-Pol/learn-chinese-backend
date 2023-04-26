const Flashcard = require('../models/flashcard');
const { Error } = require('mongoose');

function getFlashcards(req, res, next) {
  Flashcard.find()
    .then((data) => {
      if (data) {
        res.send({ data });
      } else {
        next(new Error('Не нашлось ни одной карточки'));
      }
    })
    .catch(next);
}

async function postFlashcard(req, res, next) {
  try {
    const { character, pinyin, translation, episode } = req.body;

    const createdFlashcard = await Flashcard.create({
      character,
      pinyin,
      translation,
      episode,
    });

    res.send({ data: createdFlashcard });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  postFlashcard,
  getFlashcards,
};
