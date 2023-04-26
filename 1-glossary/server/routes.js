const express = require('express');
const ctrl = require('./controllers');
const router = express.Router();

router.get('/api', ctrl.get);
router.post('/api', ctrl.post);
router.patch('/api', ctrl.patch);
router.delete('/api', ctrl.remove);

module.exports = router;
