const mongoose = require('mongoose');

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// 2. Set up any schema and models needed by the app
// did it in '../models'

// 3. Export the models

module.exports = db;

// 4. Import the models into any modules that need them
// did it in '../controllers'
