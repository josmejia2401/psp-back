const DB = require('../../core/db/sequelize.db');
const Fases = require('../../models/fases')(DB.sequelize, DB.Sequelize);

exports.consultarFases = (request, response) => {
    Fases.findAll().then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.crearFases = (request, response) => {
    var entry = request.body;
    console.log(entry);
    Fases.bulkCreate(entry).
        then(results => {
            response.send(results);
        }).catch(function (err) {
            response.send(err);
        });
}

exports.modificarFases = (request, response) => {
    var entry = request.body;
    Fases.update(entry,
        {
            where: {phaseid: request.params.phaseid}
        }
      ).then(function(rowsUpdated) {
        response.json(rowsUpdated)
      }).catch(function (err) {
        response.send(err);
      });
}
exports.eliminarFases = (request, response) => {
    Fases.destroy({
        where: {
            phaseid: request.params.phaseid
        }
      }).then(function  (affectedRows) {
        response.status(response.statusCode).json(affectedRows);
        return;
    }).catch(function (err) {
        response.send(err);
    });
}