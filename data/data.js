const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'zliqpwbmomqhhf',
  host: 'ec2-52-200-119-0.compute-1.amazonaws.com',
  database: 'dbi91mrhjv2c2u',
  password: 'a76a31c533aa0e1af14cb8698fe2fbcebb6af8cfd0fed08fb78aa030c368d5fe',
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