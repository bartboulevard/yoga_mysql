// application packages
const express = require('express')
const app = express()

const path = require('path')
// add template engine
const hbs = require('express-handlebars')
// setup template engine dir and file extensions
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + 'views/layouts/',
}))
// setup static public dir
app.use(express.static('public'));

const mysql = require('mysql')

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: true}))

// create database connection
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'yoga_mysql'
})

con.connect(function (err){
    if (err) throw err;
    console.log('Connected to yoga_mysql database')
})
app.listen(3000, () => {
    console.log('https://localhost:3000');
});