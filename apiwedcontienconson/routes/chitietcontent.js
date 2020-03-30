const express = require('express');

const router = express.Router();


const controllercontien = require('../controller/chitietcontienController');

const controllerconson = require('../controller/chitietconsonController');

router.get('/contien/:id',controllercontien.chitietcontien);
router.get('/conson/:id',controllerconson.chitietconson);

module.exports = router;