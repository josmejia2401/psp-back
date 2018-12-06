const DB = require('../../core/db/sequelize.db');
const Table = require('../../models/programsize')(DB.sequelize, DB.Sequelize);

exports.consultarPss = (request, response) => { 
    Table.findAll({ 
        where: {
            projectid: request.params.projectid
        }
      }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.crearPss = (request, response) => {
    var entry = request.body;
    console.log(entry);
    Table.bulkCreate(entry).
    then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}
exports.modificarPss = (request, response) => {
    var entry = request.body;
    Table.update(entry,
        {
            where: {programsizeid: request.params.programsizeid}
        }
      ).then(function(rowsUpdated) {
        response.json(rowsUpdated)
      }).catch(function (err) {
        response.send(err);
      });
}
exports.eliminarPss = (request, response) => {
    Table.destroy({
        where: {
            programsizeid: request.params.programsizeid
        }
      }).then(function  (affectedRows) {
        response.status(response.statusCode).json(affectedRows);
        return;
    }).catch(function (err) {
        response.send(err);
    });
} 


exports.consultarActualFecha = (request, response) => {
    DB.sequelize.query('select Sum(todater) todater,  Sum(todatenc) todatenc,  Sum(todatet) todatet,'+
                       '  Sum(todatenr) todatenr from program_size where userid = :userid', 
    { replacements: { userid: request.params.userid }, 
      type: DB.sequelize.QueryTypes.SELECT },
      { model: Table }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}


exports.consultarMaxPs = (request, response) => {
    DB.sequelize.query('select Max(coalesce(programsizeallid, 0)) programsizeallid from program_size where userid = :userid', 
    { replacements: { userid: request.params.userid }, 
      type: DB.sequelize.QueryTypes.SELECT },
      { model: Table }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}