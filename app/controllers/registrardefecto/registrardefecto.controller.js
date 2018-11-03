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

exports.consultarDefectoActual = (request, response) => {
    DB.sequelize.query('SELECT phaseinjectedid, sum(defecttypeid) defecttypeid FROM log_d_detail '+
                       'where projectid = :projectid group by phaseinjectedid', 
    { replacements: { projectid: request.params.projectid }, 
      type: DB.sequelize.QueryTypes.SELECT },
      { model: Logs }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}

exports.consultarDefectoAlaFecha = (request, response) => {
    DB.sequelize.query('SELECT phaseinjectedid, sum(defecttypeid) defecttypeid FROM log_d_detail '+
                       ' group by phaseinjectedid', 
    { replacements: { projectid: request.params.projectid }, 
      type: DB.sequelize.QueryTypes.SELECT },
      { model: Logs }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}

exports.consultarDefectoRemActual = (request, response) => {
    DB.sequelize.query('SELECT phaseremovedid, sum(fixdefectid) fixdefectid FROM log_d_detail '+
                       'where projectid = :projectid group by phaseremovedid', 
    { replacements: { projectid: request.params.projectid }, 
      type: DB.sequelize.QueryTypes.SELECT },
      { model: Logs }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}

exports.consultarDefectoRemAlaFecha = (request, response) => {
    DB.sequelize.query('SELECT phaseremovedid, sum(fixdefectid) fixdefectid FROM log_d_detail '+
                       ' group by phaseremovedid', 
    { replacements: { projectid: request.params.projectid }, 
      type: DB.sequelize.QueryTypes.SELECT },
      { model: Logs }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}