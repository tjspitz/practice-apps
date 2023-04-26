const mongoose = require('mongoose');
const db = require('../db');

const wordsSchema = new mongoose.Schema({
  name: { type: String, lowercase: true, unique: true },
  definition: { type: String, lowercase: true, maxLlength: 255 },
});

const Word = mongoose.model('Word', wordsSchema);

const save = (word) => {
  let newWord = new Word(word);
  return newWord.save();
};

const updateOne = (word) => {
  return Word.updateOne({ name: word.name }, { definition: word.definition });
};

const deleteOne = (word) => {
  return Word.deleteOne({ name: word.name });
};

const retrieveAll = () => {
  return Word.find({});
};

module.exports = { save, updateOne, deleteOne, retrieveAll };
