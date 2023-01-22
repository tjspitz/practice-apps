require("dotenv").config();
const express = require("express");
const path = require("path");
// const cors = require('cors');
// const routes = require('./routes.js');
const {retrieveAll, save, updateOne, deleteOne} = require('./db');
const morgan = require('morgan');
// const bp = require('body-parser');

const app = express();

// Serves up all static and generated assets in ../client/dist.

// app.use(cors());
app.use(express.json());
// app.use(bp.json())
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));
// app.use('/', routes);

app.use(express.static(path.join(__dirname, "../client/dist")));
/****
 * Other routes here.... PRE MVC
 ****/

app.get('/api', (req, res) => {
  retrieveAll()
  .then(wordList => {
    console.log('server get SUCCESS');
    res.status(200).send(wordList);
  })
  .catch(err => {
    console.log('server get ERR: ', err);
    res.status(500).send();
  })
});

app.post('/api', (req, res) => {
  save(req.body)
  .then(data => {
    console.log('server post SUCCESS');
    res.status(201).send(data);
  })
  .catch(err => {
    console.log('server post ERR: ', err);
    res.status(500).send();
  })
});

app.patch('/api', (req, res) => {
  updateOne(req.body)
  .then(data => {
    console.log('server patch SUCCESS');
    res.status(200).send(data)
  })
  .catch(err => {
    console.log('server patch ERR: ', err);
    res.status(500).send();
  })
});

app.delete('/api', (req, res) => {
  deleteOne(req.body)
  .then(data => {
    console.log('server delete SUCCESS');
    res.status(200).send(data)
  })
  .catch(err => {
    console.log('server delete ERR: ', err);
    res.status(500).send();
  })
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
