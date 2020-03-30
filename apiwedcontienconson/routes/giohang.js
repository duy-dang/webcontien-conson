const express = require('express');

const router = express.Router();


const controller = require('../controller/giohangController');

router.get('/',controller.giohang);
router.get('/deletesp/:productten',controller.deletesp);

module.exports = router;