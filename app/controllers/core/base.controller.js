const DB = require('../../core/db/sequelize.db');

var Table = null;
var idTable = null;

exports.setTable = (table, id) => {
    Table = table;
    idTable = id;
}

exports.consultar = (request, response) => {
    Table.findAll().then(results => {
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
            where: {idTable: request.params.idTable}
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
            idTable: request.params.idTable
        }
      }).then(function  (affectedRows) {
        response.status(response.statusCode).json(affectedRows);
        return;
    }).catch(function (err) {
        response.send(err);
    });
}