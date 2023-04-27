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
    const { character, pinyin, translation, origin, episode } = req.body;

    const createdFlashcard = await Flashcard.create({
      character,
      pinyin,
      translation,
      origin,
      episode,
    });

    res.send({ data: createdFlashcard });
  } catch (err) {
    next(err);
  }
}

function deleteFlashcard(req, res, next) {
  const { flashcardId } = req.params;

  Flashcard.findByIdAndDelete(flashcardId)
    .then((data) => {
      if (data) {
        res.send({ data });
      } else {
        next(new Error('Не нашлось ни одной карточки'));
      }
    })
    .catch(next);
}

module.exports = {
  postFlashcard,
  getFlashcards,
  deleteFlashcard,
};
