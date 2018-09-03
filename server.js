const express = require('express');
const bodyParser = require('body-parser');
//const morgan = require('morgan'); // Log server
//const fs = require('fs'); // Escritura del log
const app = express();
const configAll = require('./config/config');
const config = configAll.get(process.env.NODE_ENV, app);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.use(configAll.sessionAll(config.session));
require('./app/routes/user.routes.js')(app);
app.use('/logs', express.static(__dirname + '/logs'));
/*
    morgan.token('res', function getId(res) {
            return res;
        });
    var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});
    app.use(morgan(':req[body] :res[body]', {stream: accessLogStream}));
*/
// listen for requests
app.listen(configAll.PORT, function () {
    console.log('Server running, Express is listening... http://localhost:'+configAll.PORT);
});