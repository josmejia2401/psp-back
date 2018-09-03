const DB = require('../../core/db/sequelize.db');
const Proyects = require('../../models/proyects')(DB.sequelize, DB.Sequelize);
const objects = require("../../core/json/tipos_proyectos.json");

exports.consultarProyectos = (request, response) => {
    Proyects.findAll({
        where: {
            UserID: request.params.UserID
        }
      }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.crearProyecto = (request, response) => {
    var entry = request.body;
    var results = new Array();
    var errores = new Array();
    console.log(entry);
    entry.forEach(function (item) {
        Proyects.create({
                    ProjectTypeID : item.ProjectTypeID,
                    UserID : item.UserID,
                    ProcessID : item.ProcessID,
                    Name : item.Name,
                    CreatedDate : item.CreatedDate,
                    StartDate : item.StartDate,
                    EndDate : item.EndDate
        }).then(result => {
            results.push(result);
        }).catch(function (err) {
            //response.send(err);
            errores.push(err);
        });
    });
    response.send(results);
}
exports.modificarProyecto = (request, response) => {
    var entry = request.body;
    Proyects.update({ProjectTypeID : entry.ProjectTypeID,
                  UserID : entry.UserID,
                  ProcessID : entry.ProcessID,
                  Name : entry.Name,
                  CreatedDate : entry.CreatedDate,
                  StartDate : entry.StartDate,
                  EndDate : entry.EndDate},
        {
            where: {ProjectID: request.params.ProjectID}
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
            ProjectID: request.params.ProjectID
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