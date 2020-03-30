const express = require('express');

const router = express.Router();
const controller = require('../controller/lienheController');
const checkerr = require('../validation/checkerr');

router.get('/',controller.lienhe);
router.post('/',checkerr.checkerr,controller.postlienhe);
module.exports = router;