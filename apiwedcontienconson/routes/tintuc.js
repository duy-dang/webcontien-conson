const express = require('express');

const router = express.Router();

const controller = require('../controller/tintucController');

router.get('/',controller.tintuc);

module.exports = router;