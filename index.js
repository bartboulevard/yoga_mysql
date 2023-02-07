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
    layoutsDir: __dirname + '/views/layouts/',
}))
// setup static public dir
app.use(express.static('public'));


const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: true}))

const articleRoutes = require('./routes/article'); // import article route

// to use article routes
app.use('/', articleRoutes)
app.use('/article', articleRoutes)

// articles by author
app.get('/author/:id', (req, res) => {
    let query = `SELECT * FROM article WHERE author_id="${req.params.author_id}"`
    let article
    con.query(query, (err, result) => {
        if (err) throw err;
        article = result
        console.log(article)
        query = `SELECT * FROM author WHERE id="${req.params.author_id}"`
        let author
        con.query(query, (err, result) => {
            if (err) throw (err);
            author = result
            console.log(author)
        })
        res.render('author', {
            author: author,
            article:article
        })
    });
});


app.listen(3000, () => {
    console.log('http://localhost:3000');
});