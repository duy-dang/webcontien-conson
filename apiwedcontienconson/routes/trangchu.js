const express = require('express');

const router = express.Router();


const controller = require('../controller/trangchuController');

router.get('/',controller.trangchu);

module.exports = router;