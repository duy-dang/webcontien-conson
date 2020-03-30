const express = require('express');

const router = express.Router();

const controller = require('../controller/gioithieuController');

router.get('/',controller.gioithieu);

module.exports = router;