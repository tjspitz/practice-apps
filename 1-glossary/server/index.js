require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require('cors');
const routes = require('./routes.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.

// app.use(cors());
app.use(express.json());
app.use('/', routes);

app.use(express.static(path.join(__dirname, "../client/dist")));
/****
 *
 *
 * Other routes here....
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
