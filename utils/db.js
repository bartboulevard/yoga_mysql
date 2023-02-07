// setup db connection
const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "yoga_mysql"
});

module.exports = db