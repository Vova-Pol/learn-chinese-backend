const flashcardsRouter = require('express').Router();
const {
  postFlashcard,
  getFlashcards,
  deleteFlashcard,
} = require('../controllers/flashcards');

flashcardsRouter.post('/', postFlashcard);
flashcardsRouter.get('/', getFlashcards);
flashcardsRouter.delete('/:flashcardId', deleteFlashcard);

module.exports = flashcardsRouter;
