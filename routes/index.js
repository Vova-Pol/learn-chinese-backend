const mainRouter = require('express').Router();
const flashcardsRouter = require('./flashcards');

mainRouter.use('/flashcards', flashcardsRouter);

module.exports = mainRouter;
