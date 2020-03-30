const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: process.env.DATABASE_URL,
  database: 'sanphambetong',
  password: '0967216299',
  port: 5432,
})

const data = ((caulenh) =>{
    return new Promise((resolve,reject) => {
    pool.query(caulenh, (err, responsive) => {
    if(err)
    {
        console.log(err);
        reject(err);
    }
    else
    {
        resolve(responsive.rows);
    }
    })  
    })
});
module.exports = data;