require('dotenv').config();
const express = require('express');
const path = require('path');
const sessionHandler = require('./middleware/session-handler');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./db');
const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/checkout', (req, res) => {
  const {
    query: { cookie },
  } = req;

  db.queryAsync('SELECT * FROM user WHERE cookie = (?)', [cookie])
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch((err) => res.sendStatus(500));
});

app.post('/checkout', (req, res) => {
  const {
    cookie,
    firstname,
    lastname,
    email,
    password,
    street,
    city,
    state,
    zip,
    cc,
    exp,
    ccv,
    bill_zip,
  } = req.body.data;

  db.queryAsync(
    'INSERT INTO user (cookie, firstname, lastname, email, password) VALUES(?, ?, ?, ?, ?)',
    [cookie, firstname, lastname, email, password]
  )
    .then((update) => {
      return db.queryAsync(
        'INSERT INTO address (street, city, state, zip)VALUES(?, ?, ?, ?)',
        [street, city, state, zip]
      );
    })
    .then((update) => {
      return db.queryAsync(
        'INSERT INTO payment (cc, exp, ccv, bill_zip) VALUES(?, ?, ?, ?)',
        [cc, exp, ccv, bill_zip]
      );
    })
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(500).send(err));
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
