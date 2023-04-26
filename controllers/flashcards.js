const Flashcard = require('../models/flashcard');

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
};
