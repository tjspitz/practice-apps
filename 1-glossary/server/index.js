require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const router = require('./routes');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
