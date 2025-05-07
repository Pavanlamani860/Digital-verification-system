// db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',         // 👉 your MySQL username
  password: 'Gagan@07', // 👉 your MySQL password
  database: 'authenticdb'  // 👉 your DB name
});

module.exports = pool;
