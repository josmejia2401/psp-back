const DB = require('../../core/db/sequelize.db');
const Table = require('../../models/part_type_standart')(DB.sequelize, DB.Sequelize);

exports.consultar = (request, response) => {
    Table.findAll( {
        where: {sizemeasureid: request.params.sizemeasureid}
    }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.crear = (request, response) => {
    var entry = request.body;
    console.log(entry);
    Table.bulkCreate(entry).
        then(results => {
            response.send(results);
        }).catch(function (err) {
            response.send(err);
        });
}

exports.modificar = (request, response) => {
    var entry = request.body;
    Table.update(entry,
        {
            where: {parttypestandardi: request.params.parttypestandardi}
        }
      ).then(function(rowsUpdated) {
        response.json(rowsUpdated)
      }).catch(function (err) {
        response.send(err);
      });
}
exports.eliminar = (request, response) => {
    Table.destroy({
        where: {
            parttypestandardi: request.params.parttypestandardi
        }
      }).then(function  (affectedRows) {
        response.status(response.statusCode).json(affectedRows);
        return;
    }).catch(function (err) {
        response.send(err);
    });
}