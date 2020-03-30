var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanphambetong',
  password: '0967216299',
  port: 5432,
})

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('trangchu/trangchu')
});

router.get('/getdatacontien', function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  pool.query('SELECT * FROM public.contien', (err, responsive) => {
    if(err)
    {
       console.log(err);
    }
    else
    {
       res.send(responsive.rows);
    }
  })    
});

router.get('/getdataconson', function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  pool.query('SELECT * FROM public.conson', (err, responsive) => {
    if(err)
    {
       console.log(err);
    }
    else
    {
       res.send(responsive.rows);  
    }
  })    
});

module.exports = router;
