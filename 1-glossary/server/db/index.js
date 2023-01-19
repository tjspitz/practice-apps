const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:3000/glossary');

  // 2nd arg in mongoose docs:
  // , {useNewUrlParser: true, useUnifiedTopology: true});

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

    // Model.create()
  }
}

// 4. Import the models into any modules that need them
