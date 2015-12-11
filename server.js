var express = require('express'),
    EXPRESS_ROOT = __dirname,
    EXPRESS_PORT = 8080;

function startServer() {
    var app = express();
    app.set('port', (process.env.PORT || EXPRESS_PORT));

    app.use(express.static(EXPRESS_ROOT));
    app.listen(app.get('port'), function() {
        console.log('Server is running on: ', app.get('port'));
    });

}

startServer();
