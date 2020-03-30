const express = require('express');

const router = express.Router();

const controller = require('../controller/huongdanController');

router.get('/',controller.huongdan);

module.exports = router;