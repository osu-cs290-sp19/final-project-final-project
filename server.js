var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

var moviesData = require('./moviesData');


app.use(bodyParser.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.listen(port, function () {
  console.log('server is listening on port', port);
});

app.get('/', function (req, res) {
    res.status(200).render('home', {
        movies: moviesData
    });
});




