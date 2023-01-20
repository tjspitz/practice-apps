const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary', {useNewUrlParser: true, useUnifiedTopology: true});

  // 2nd arg in mongoose docs:

  // const db = mongoose.connection;

  // db.on('error', console.error.bind(console, 'connection error: '));
  // db.once('open', function() {


// 2. Set up any schema and models needed by the app
const wordsSchema = new mongoose.Schema({
  name: {type: String, lowercase: true, unique: true},
  definition: {type: String, lowercase: true, maxLlength: 255}
});

const Word = mongoose.model('Word', wordsSchema);

// 3. Export the models

  // export the function that saves new words

module.exports = {
  save: (word) => {
    // word = {word.name, word.definition}
    let newWord = new Word(word);
    return newWord.save();
  },

  updateOne: (word) => {
    return Word.updateOne({name: word.name}, {definition: word.definition});
  },

  deleteOne: (word) => {
    return Word.deleteOne({name: word.name});
  },

  retrieveAll: () => {
    return Word.find({});
  }
}
// const save = (word) => {
//   // word = {word.name, word.definition}
//   console.log('hit save!')
//   let newWord = new Word(word);
//   return newWord.save();
// };

// const retrieveAll = () => {
//   console.log('hit retrieveAll!')
//   return Word.find({});
// };

// module.exports.save = save;
// module.exports.retrieveAll = retrieveAll;

// 4. Import the models into any modules that need them
