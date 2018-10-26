const DB = require('../../core/db/sequelize.db');
const Logs = require('../../models/defect_type')(DB.sequelize, DB.Sequelize);

exports.consultarTipoDefecto = (request, response) => {
    Logs.findAll().then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.crearTipoDefecto = (request, response) => {
    var entry = request.body;
    console.log(entry);
    Logs.bulkCreate(entry).
    then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.modificarTipoDefecto = (request, response) => {
    var entry = request.body;
    Logs.update(entry,
        {
            where: {defecttypeid: request.params.defecttypeid}
        }
      ).then(function(rowsUpdated) {
        response.json(rowsUpdated)
      }).catch(function (err) {
        response.send(err);
      });
}
exports.eliminarTipoDefecto = (request, response) => {
    Logs.destroy({
        where: {
            defecttypeid: request.params.defecttypeid
        }
      }).then(function  (affectedRows) {
        response.status(response.statusCode).json(affectedRows);
        return;
    }).catch(function (err) {
        response.send(err);
    });
}