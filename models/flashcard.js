const { Schema, model } = require('mongoose');

const flashcardSchema = new Schema({
  character: {
    type: String,
    required: true,
  },
  pinyin: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
  episode: {
    type: String,
    required: true,
  },
});

module.exports = model('Flashcard', flashcardSchema);
