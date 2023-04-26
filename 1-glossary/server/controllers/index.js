const { retrieveAll, save, updateOne, deleteOne } = require('../models');

const get = (req, res) => {
  retrieveAll()
    .then((wordList) => {
      console.log('server get SUCCESS');
      res.status(200).send(wordList);
    })
    .catch((err) => {
      console.log('server get ERR: ', err);
      res.status(500).send();
    });
};

const post = (req, res) => {
  save(req.body)
    .then((data) => {
      console.log('server post SUCCESS');
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log('server post ERR: ', err);
      res.status(500).send();
    });
};

const patch = (req, res) => {
  updateOne(req.body)
    .then((data) => {
      console.log('server patch SUCCESS');
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('server patch ERR: ', err);
      res.status(500).send();
    });
};

const remove = (req, res) => {
  deleteOne(req.body)
    .then((data) => {
      console.log('server delete SUCCESS');
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('server delete ERR: ', err);
      res.status(500).send();
    });
};

module.exports = { get, post, patch, remove };
