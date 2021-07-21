const mysql = require('mysql2');

// Connect to the database
const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Db_0202075',
  database: 'election'
});

module.exports = db;