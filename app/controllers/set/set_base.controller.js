const DB = require('../../core/db/sequelize.db');
const Table = require('../../models/setbase')(DB.sequelize, DB.Sequelize);

exports.consultar = (request, response) => {
    Table.findAll({
        where: {projectid: request.params.projectid}
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
            where: {setbaseid: request.params.setbaseid}
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
            setbaseid: request.params.setbaseid
        }
      }).then(function  (affectedRows) {
        response.status(response.statusCode).json(affectedRows);
        return;
    }).catch(function (err) {
        response.send(err);
    });
}