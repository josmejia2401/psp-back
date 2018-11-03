const sessionExpress = require('express-session');
const FileStore = require('session-file-store')(sessionExpress);
const uuid = require('uuid/v4')
var req;
var config = {
    
    production: {
        jwtClave : 'estaeslaclave',
        port : process.env.PORT || 1521,
        session: {
            key: 'the.express.session.id',
            secret: 'something.super.secret',
            name   : 'sessionId',
            cookie : { secure: true,  // serve secure cookies
                    httpOnly: true,  
                    domain: 'localhost',  
                    path: '/', 
                    expires: new Date( Date.now() + 60 * 60 * 1000 ),
                    maxAge: new Date( Date.now() + 60 * 60 * 1000 )},
            genid : (req) => {
                console.log('Inside the session middleware')
                console.log(req.sessionID)
                return uuid() 
            }
        },
        database: {
            host     : 'ec2-184-72-247-70.compute-1.amazonaws.com',
            user     : 'qehtkypiapazxj',
            password : '527a3ab2e0b6fd3d0ac5eb5ad52d0ae6b267b629d1c7994898cb9055cb3d0625',
            database : 'd199t5s7a0b9gk',
            port     : '5432',
            dialect  : "postgres",
            connectionLimit : 100,
            connectString: 'postgres://qehtkypiapazxj:527a3ab2e0b6fd3d0ac5eb5ad52d0ae6b267b629d1c7994898cb9055cb3d0625@ec2-184-72-247-70.compute-1.amazonaws.com:5432/d199t5s7a0b9gk',
            connectTimeout  : 60 * 60 * 1000,
            aquireTimeout   : 60 * 60 * 1000,
            timeout         : 60 * 60 * 1000
        },
        twitter: {
            consumerKey: 'consumer Key',
            consumerSecret: 'consumer Secret',
            callbackURL: 'http://yoururl.com/auth/twitter/callback'
        }
    },
    default: {
        jwtClave : 'estaeslaclave',
        port : process.env.PORT || 1522,
        store : new FileStore(),
        session: {
            key: 'the.express.session.id',
            secret: 'something.super.secret'
        },
        database: {
            host     : 'ec2-184-72-247-70.compute-1.amazonaws.com',
            user     : 'qehtkypiapazxj',
            password : '527a3ab2e0b6fd3d0ac5eb5ad52d0ae6b267b629d1c7994898cb9055cb3d0625',
            database : 'd199t5s7a0b9gk',
            port     : '5432',
            dialect  : "postgres",
            connectString: 'postgres://qehtkypiapazxj:527a3ab2e0b6fd3d0ac5eb5ad52d0ae6b267b629d1c7994898cb9055cb3d0625@ec2-184-72-247-70.compute-1.amazonaws.com:5432/d199t5s7a0b9gk'
        },
        twitter: {
            consumerKey: 'consumer Key',
            consumerSecret: 'consumer Secret',
            callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
        }
        }
  }
  
  exports.get = function get(env, app) {
        this.req = app.reuest;
        if (app.get('env') === 'production') {
            app.set('trust proxy', 1) // trust first proxy
        }
    return config[env] || config.default;
  }

  exports.getDataBase = function get(env) {
      var conf = config[env];
      if(conf == null){
          return config.default.database;
      }
    return conf.database;
  }
  exports.getClaveJwt = function(){
      return 'estaeslaclave';
  }

  exports.PORT = process.env.PORT || 1521;
  exports.sessionAll = sessionExpress;