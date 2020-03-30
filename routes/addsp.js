const express = require('express');

const router = express.Router();

const controller = require('../controller/addspController');

router.get('/:productten',controller.addsp);

module.exports = router;