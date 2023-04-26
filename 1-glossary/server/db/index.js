const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect("mongodb://localhost/glossary", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 2. Set up any schema and models needed by the app
const wordsSchema = new mongoose.Schema({
  name: { type: String, lowercase: true, unique: true },
  definition: { type: String, lowercase: true, maxLlength: 255 },
});

const Word = mongoose.model("Word", wordsSchema);

// 3. Export the models

module.exports = {
  save: (word) => {
    let newWord = new Word(word);
    return newWord.save();
  },

  updateOne: (word) => {
    return Word.updateOne({ name: word.name }, { definition: word.definition });
  },

  deleteOne: (word) => {
    return Word.deleteOne({ name: word.name });
  },

  retrieveAll: () => {
    return Word.find({});
  },
};

// 4. Import the models into any modules that need them
