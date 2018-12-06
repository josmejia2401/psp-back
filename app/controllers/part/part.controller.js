const DB = require('../../core/db/sequelize.db');
const Table = require('../../models/part')(DB.sequelize, DB.Sequelize);

exports.consultar = (request, response) => {
    Table.findAll( {
        where: {userid: request.params.userid}
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
            Table.max('partid').then(max => {
                results[0].partid = max
                response.send(results);
            });
        }).catch(function (err) {
            response.send(err);
        });
}

exports.modificar = (request, response) => {
    var entry = request.body;
    Table.update(entry,
        {
            where: {partid: request.params.partid}
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
            partid: request.params.partid
        }
      }).then(function  (affectedRows) {
        response.status(response.statusCode).json(affectedRows);
        return;
    }).catch(function (err) {
        response.send(err);
    });
}