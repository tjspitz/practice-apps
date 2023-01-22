require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const morgan = require('morgan');
const cors = require('cors');


// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/checkout', (req, res) => {
  // if req.session_id already exists, kill the request(?)


  const {
    firstname, lastname, email, password,
    street, city, state, zip,
    cc, exp, cvv, bill_zip
  } = req.body;

  db.queryAsync(
    "INSERT INTO user (firstname, lastname, email, password) VALUES(?, ?, ?, ?)", [firstname, lastname, email, password]
  )
    .then((res) => {
      console.log('hit .then #1: ', res);

      return db.queryAsync(
        "INSERT INTO address (street, city, state, zip)VALUES(?, ?, ?, ?)", [street, city, state, zip]
      );
    })
    .then((res) => {
      console.log('hit .then #2: ', res);

      return db.queryAsync(
        "INSERT INTO payment (cc, exp, cvv, bill_zip) VALUES(?, ?, ?, ?)", [cc, exp, cvv, bill_zip]
      );
    })
    .then((data) => res.status(201).send(console.log('success!')))
    .catch((err) => {
      console.log('failasaurus rex in server/index.js POST: ', err);
      res.status(500).send();
    })
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
