const DB = require('../../core/db/sequelize.db');
const Logs = require('../../models/log_t_detail')(DB.sequelize, DB.Sequelize);

exports.consultarRegistroTiempo = (request, response) => {
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
exports.crearRegistroTiempo = (request, response) => {
    var entry = request.body;
    console.log(entry);
    Logs.bulkCreate(entry).
    then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.modificarRegistroTiempo = (request, response) => {
    var entry = request.body;
    Logs.update(entry,
        {
            where: {timelogentryid: request.params.timelogentryid}
        }
      ).then(function(rowsUpdated) {
        response.json(rowsUpdated)
      }).catch(function (err) {
        response.send(err);
      });
}
exports.eliminarRegistroTiempo = (request, response) => {
    Logs.destroy({
        where: {
            timelogentryid: request.params.timelogentryid
        }
      }).then(function  (affectedRows) {
        response.status(response.statusCode).json(affectedRows);
        return;
    }).catch(function (err) {
        response.send(err);
    });
}

exports.consultarTiempoActual = (request, response) => {
    DB.sequelize.query('SELECT phaseid, sum(deltatimeminutes) deltatimeminutes '+
    'FROM log_t_detail where projectid = :projectid group by phaseid', 
    { replacements: { projectid: request.params.projectid }, 
      type: DB.sequelize.QueryTypes.SELECT },
      { model: Logs }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}

exports.consultarTiempoAlaFecha = (request, response) => {
    DB.sequelize.query('SELECT phaseid, sum(deltatimeminutes) deltatimeminutes '+
    'FROM log_t_detail group by phaseid', 
    { replacements: { projectid: request.params.projectid }, 
      type: DB.sequelize.QueryTypes.SELECT },
      { model: Logs }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}