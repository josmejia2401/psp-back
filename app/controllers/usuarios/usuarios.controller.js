const DB = require('../../core/db/sequelize.db');
const Users = require('../../models/users')(DB.sequelize, DB.Sequelize);
const objects = require("../../core/json/usuarios_perfiles.json");
var jwt = require('jsonwebtoken');
const configAll = require('../../../config/config');

exports.consultarUsuarios = (request, response) => {
    Users.findAll().then(users => {
        response.send(users);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.consultarUsuario = (request, response) => {
    Users.findAll({
        where: {
            userid: request.params.userid
        }
      }).then(users => {
        response.send(users);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.crearUsuario = (request, response) => {
    var entry = request.body;
    Users.create({  
        userid: entry.userid,
        userprofileid: entry.userprofileid,
        name: entry.name,
        instructor : entry.instructor,
        initials : entry.initials,
        organizationname : entry.organizationname,
        username : entry.username,
        password : entry.password
    }).then(user => {
          response.send(user);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.modificarUsuario = (request, response) => {
    var entry = request.body;
    Users.update({userprofileid: entry.userprofileid,
        name: entry.name,
        instructor : entry.instructor,
        initials : entry.initials,
        organizationname : entry.organizationname},
{where: {
  userid: request.params.userid
        }}
      ).then(function(rowsUpdated) {
        response.json(rowsUpdated)
      }).catch(function (err) {
        response.send(err);
      });
}
exports.eliminarUsuario = (request, response) => {
    Users.destroy({
        where: {
            userid: request.params.userid
        }
      }).then(function  (affectedRows) {
        response.status(response.statusCode).json(affectedRows);
        return 
    }).catch(function (err) {
        response.send(err);
    });
}
exports.validarUsuario = (request, response) => { 
    var entry = request.body;
    Users.findOne({
        where: {
            username: entry.username,
            password: entry.password
        }
      }).then(users => {
          if(users != null){
            users.password = null;
            var token = jwt.sign({ usuario: users.username}, configAll.getClaveJwt());
            users.token = token;
          }
        response.send(users);
    }).catch(function (err) {
        console.log(err);
        response.send(err);
    });
}

exports.consultarPerfiles = (request, response) => {
    console.log('consultarEstados');
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(objects));
}