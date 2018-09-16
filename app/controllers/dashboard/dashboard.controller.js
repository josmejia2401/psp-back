const DB = require('../../core/db/sequelize.db');
const Proyects = require('../../models/proyects')(DB.sequelize, DB.Sequelize);
const objects = require("../../core/json/tipos_proyectos.json");

exports.consultarProyectosActivos = (request, response) => {
    Proyects.findAll({
        where: {
            userid: request.params.userid,
            enddate : {
                ne : null
            }            
        }
      }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}

exports.consultarProyectosInactivos = (request, response) => {
    Proyects.findAll({
        where: {
            userid: request.params.userid,
            enddate : null          
        }
      }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}


exports.consultarProyectosInactivos = (request, response) => {
    Proyects.findAll({
        where: {
            userid: request.params.userid,
            enddate : null          
        }
      }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}