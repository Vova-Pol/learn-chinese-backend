const flashcardsRouter = require('express').Router();
const { postFlashcard } = require('../controllers/flashcards');

flashcardsRouter.post('/', postFlashcard);

module.exports = flashcardsRouter;
