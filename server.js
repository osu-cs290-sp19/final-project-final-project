var http = require('http');
var fs = require('fs');

var css = fs.readFileSync('./public/style.css');
var html = fs.readFileSync('./public/index.html');
var pg404 = fs.readFileSync('./public/404.html');
var js = fs.readFileSync('./public/index.js');

function requestHandler (req, res) {

  console.log("req.method", req.method);
  console.log("req.url", req.url);
  console.log("req.headers", req.headers);

    if ((req.url == '/index.html') || (req.url == '/')) {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(html);

    }

    else if (req.url == '/index.js') {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/js');
        res.write(js);

    }

    else if (req.url == '/style.css') {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        res.write(css);

    }

    else {

        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write(pg404);

    }

    res.end();
}

var server = http.createServer(requestHandler);
server.listen(3000, function () {
    console.log("Server running on port 3000");
});
