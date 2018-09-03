const DB = require('../../core/db/sequelize.db');
const Users = require('../../models/users')(DB.sequelize, DB.Sequelize);
const objects = require("../../core/json/usuarios_perfiles.json");

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
            UserID: request.params.UserID
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
        UserID: entry.UserID,
        UserProfileID: entry.UserProfileID,
        Name: entry.Name,
        Instructor : entry.Instructor,
        Initials : entry.Initials,
        OrganizationName : entry.OrganizationName,
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
    Users.update({UserProfileID: entry.UserProfileID,
                  Name: entry.Name,
                  Instructor : entry.Instructor,
                  Initials : entry.Initials,
                  OrganizationName : entry.OrganizationName},
        {where: {
            UserID: request.params.UserID
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
            UserID: request.params.UserID
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
        response.send(users);
    }).catch(function (err) {
        response.send(err);
    });
}

exports.consultarPerfiles = (request, response) => {
    console.log('consultarEstados');
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(objects));
}