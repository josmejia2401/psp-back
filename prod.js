const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const events = require('events');
var cluster = require('cluster');
const app = express();
const configAll = require('./config/config');
const config = configAll.get(process.env.NODE_ENV, app);

var _cpus = require('os').cpus().length;
console.log('numero de cpus: '+_cpus);
_cpus = _cpus / _cpus;

if (cluster.isMaster && _cpus > 1) {

    // create a worker for each CPU
    for (var i = 0; i < _cpus; i += 1) {
        cluster.fork();
    }
    // When a worker dies create another one
    cluster.on('exit', function(worker) {
      console.log('worker ' + worker.id +  ' died');
      cluster.fork();
    });
  } else {
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(configAll.sessionAll(config.session));
    app.use('/logs', express.static(__dirname + '/logs'));
    app.use(cors({origin: 'http://localhost:4200',credentials: true}));

    require('./app/routes/proyectos/proyectos.routes.js')(app);
    require('./app/routes/core/estados.router')(app);
    require('./app/routes/procesos/procesos.routes.js')(app);
    require('./app/routes/usuarios/usuarios.routes')(app);


    events.EventEmitter.defaultMaxListeners = 15;
    app.listen(configAll.PORT, function () {
        console.log('Server running, Express is listening... http://localhost:'+configAll.PORT);
    });
}