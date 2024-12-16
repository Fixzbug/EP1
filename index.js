var express = require('express');
var cors = require('cors');
const mysql = require('mysql2');
const port = 5000;
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

var app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! 1');
});

app.get('/attractions', function(req, res, next) {
  pool.query("SELECT * FROM attractions", function(err, rows, fields) {
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`app listening at ${port}`);
});
