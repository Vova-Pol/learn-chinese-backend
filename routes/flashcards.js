const flashcardsRouter = require('express').Router();
const { postFlashcard, getFlashcards } = require('../controllers/flashcards');

flashcardsRouter.post('/', postFlashcard);
flashcardsRouter.get('/', getFlashcards);

module.exports = flashcardsRouter;
