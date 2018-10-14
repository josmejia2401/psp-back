const DB = require('../../core/db/sequelize.db');
const Proyects = require('../../models/proyects')(DB.sequelize, DB.Sequelize);
const objects = require("../../core/json/tipos_proyectos.json");

exports.consultarProyectos = (request, response) => {
    Proyects.findAll({
        where: {
            userid: request.params.userid
        }
      }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.crearProyecto = (request, response) => {
    var entry = request.body;
    console.log(entry);
    Proyects.bulkCreate(entry).
    then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.modificarProyecto = (request, response) => {
    var entry = request.body;
    Proyects.update(entry,
        {
            where: {projectid: request.params.projectid}
        }
      ).then(function(rowsUpdated) {
        response.json(rowsUpdated)
      }).catch(function (err) {
        response.send(err);
      });
}
exports.eliminarProyecto = (request, response) => {
    Proyects.destroy({
        where: {
            projectid: request.params.projectid
        }
      }).then(function  (affectedRows) {
        response.status(response.statusCode).json(affectedRows);
        return 
    }).catch(function (err) {
        response.send(err);
    });
}
exports.consultarTiposProyetos = (request, response) => {
    console.log('consultarTiposProyetos');
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(objects));
}