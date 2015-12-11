var express = require('express'),
    EXPRESS_ROOT = __dirname,
    EXPRESS_PORT = 8080;

function startServer() {
    var app = express();
    app.set('port', (process.env.PORT || EXPRESS_PORT));

    app.use(express.static(EXPRESS_ROOT));
    app.listen(app.get('port'), function() {
        console.log('App is running, server is listening on port: ', app.get('port'))
    });
}

startServer();
