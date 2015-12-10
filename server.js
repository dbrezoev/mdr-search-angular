var express = require('express'),
    EXPRESS_ROOT = __dirname,
    EXPRESS_PORT = 80;

function startServer() {
    var app = express();
    app.use(express.static(EXPRESS_ROOT));
    app.listen(EXPRESS_PORT);
    console.log('Server is running on: Localhost: ' + EXPRESS_PORT)
}

startServer();
