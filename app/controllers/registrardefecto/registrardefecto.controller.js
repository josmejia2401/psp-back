const DB = require('../../core/db/sequelize.db');
const Logs = require('../../models/log_d_detail')(DB.sequelize, DB.Sequelize);

exports.consultarRegistroDefecto = (request, response) => {
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
exports.crearRegistroDefecto = (request, response) => {
    var entry = request.body;
    console.log(entry);
    Logs.bulkCreate(entry).
    then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.modificarRegistroDefecto = (request, response) => {
    var entry = request.body;
    Logs.update(entry,
        {
            where: {defectlogentryid: request.params.defectlogentryid}
        }
      ).then(function(rowsUpdated) {
        response.json(rowsUpdated)
      }).catch(function (err) {
        response.send(err);
      });
}
exports.eliminarRegistroDefecto = (request, response) => {
    Logs.destroy({
        where: {
            defectlogentryid: request.params.defectlogentryid
        }
      }).then(function  (affectedRows) {
        response.status(response.statusCode).json(affectedRows);
        return;
    }).catch(function (err) {
        response.send(err);
    });
}