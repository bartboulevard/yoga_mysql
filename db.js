var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'yoga_mysql'
});

con.connect(function (err){
    if (err) throw err;
    console.log('connected');
    var sql = 'CREATE DATABASE article';
    con.query(sql, function (err, result){
        if (err) throw err;
        console.log('databse created')
    });
});