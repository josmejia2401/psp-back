const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const events = require('events');
const cluster = require('cluster');
//var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
const app = express();
const configAll = require('./config/config');
const config = configAll.get(process.env.NODE_ENV, app);
//const HOST = 'http://localhost:4200';
const HOST = 'https://psp-front.herokuapp.com';
console.log(config.jwtClave);
app.use(expressJwt({secret: configAll.getClaveJwt()}).unless({path: ["/api/usuarios/validar","/api/usuarios/perfiles"]}));

var _cpus = require('os').cpus().length;
console.log('numero de cpus: '+_cpus);
_cpus = _cpus / _cpus;
if (cluster.isMaster && _cpus > 1) {
    for (var i = 0; i < _cpus; i += 1) {
        cluster.fork();
    }
    cluster.on('exit', function(worker) {
      console.log('worker ' + worker.id +  ' died');
      cluster.fork();
    });
  } else {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(configAll.sessionAll(config.session));
    app.use('/logs', express.static(__dirname + '/logs'));
    app.use(cors({origin: HOST,credentials: true}));
    require('./app/routes/todos/route.routes')(app);
    events.EventEmitter.defaultMaxListeners = 15;
    app.listen(configAll.PORT, function () {
        console.log('Server running, Express is listening... '+HOST+":"+configAll.PORT);
    });
}