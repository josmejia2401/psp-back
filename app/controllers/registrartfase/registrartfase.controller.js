const DB = require('../../core/db/sequelize.db');
const Logs = require('../../models/pspassgtdata')(DB.sequelize, DB.Sequelize);

exports.consultarTiempoFase = (request, response) => { 
    Logs.findAll({ 
        where: {
            projectid: request.params.projectid
        }
      }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.crearTiempoFase = (request, response) => {
    var entry = request.body;
    console.log(entry);
    Logs.bulkCreate(entry).
    then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.modificarTiempoFase = (request, response) => {
    var entry = request.body;
    Logs.update(entry,
        {
            where: {pspassgtdataid: request.params.pspassgtdataid}
        }
      ).then(function(rowsUpdated) {
        response.json(rowsUpdated)
      }).catch(function (err) {
        response.send(err);
      });
}
exports.eliminarTiempoFase = (request, response) => {
    Logs.destroy({
        where: {
            pspassgtdataid: request.params.pspassgtdataid
        }
      }).then(function  (affectedRows) {
        response.status(response.statusCode).json(affectedRows);
        return;
    }).catch(function (err) {
        response.send(err);
    });
}