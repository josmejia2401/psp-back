const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const events = require('events');
const app = express();
const configAll = require('./config/config');
const config = configAll.get(process.env.NODE_ENV, app);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(configAll.sessionAll(config.session));
app.use('/logs', express.static(__dirname + '/logs'));
app.use(cors({origin: 'https://psp-front.herokuapp.com',credentials: true}));

require('./app/routes/proyectos/proyectos.routes.js')(app);
require('./app/routes/core/estados.router')(app);
require('./app/routes/procesos/procesos.routes.js')(app);
require('./app/routes/usuarios/usuarios.routes')(app);


events.EventEmitter.defaultMaxListeners = 15;
app.listen(configAll.PORT, function () {
    console.log('Server running, Express is listening... http://localhost:'+configAll.PORT);
});