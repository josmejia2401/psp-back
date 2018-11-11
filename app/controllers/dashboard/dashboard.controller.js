const DB = require('../../core/db/sequelize.db');
const Proyects = require('../../models/proyects')(DB.sequelize, DB.Sequelize);
const Op = DB.Sequelize.Op

exports.consultarProyectosTerminados = (request, response) => {
    Proyects.findAll({
        where: {
            userid: request.params.userid,
            completed : 'true'
            /*enddate : {
                ne : null
            } */           
        }
      }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}

exports.consultarProyectosArchivados = (request, response) => {
    Proyects.findAll({
        where: {
            userid: request.params.userid,
            archived : 'true'       
        }
      }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}

exports.consultarProyectosEnCurso = (request, response) => {
    Proyects.findAll({
        where: {
            userid: request.params.userid,
            archived : {[Op.or]: [null,'false']},
            completed : {[Op.or]: [null,'false']}
        }
      }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}

exports.consultarProyectos = (request, response) => {
    Proyects.findAll({
        where: {
            userid: request.params.userid
        }
      }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}


exports.consultarTop5 = (request, response) => {
    DB.sequelize.query('select p.projectid, p.name, sum(t.deltatimeminutes) cantidad from projects p,'+
                       'log_t_detail t '+
                       'where p.projectid = t.projectid '+
                       'And p.userid = :userid '+
                       'group by p.projectid, p.name '+
                       'order by cantidad desc '+
                       'limit 5', 
    { replacements: { userid: request.params.userid }, 
      type: DB.sequelize.QueryTypes.SELECT },
      { model: Proyects }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}

exports.consultarTop5Fases = (request, response) => {
    DB.sequelize.query('select ph.symbol, sum(t.deltatimeminutes) cantidad from projects p,'+
                       'log_t_detail t, '+
                       'phases ph '+
                       'where p.projectid = t.projectid '+
                       'And p.userid = :userid '+
                       'And ph.phaseid = t.phaseid '+
                       'group by ph.symbol '+
                       'order by cantidad desc '+
                       'limit 5', 
    { replacements: { userid: request.params.userid }, 
      type: DB.sequelize.QueryTypes.SELECT },
      { model: Proyects }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}


exports.consultarTop5Bugs = (request, response) => {
    DB.sequelize.query('select t.defecttypeid defectid, d.typename, count(*) cantidad from projects p,'+
                       'log_d_detail t, '+
                       'defect_type d '+
                       'where p.projectid = t.projectid '+
                       'And p.userid = :userid '+
                       'And t.defecttypeid = d.defecttypeid '+
                       'group by t.defecttypeid , d.typename '+
                       'order by cantidad desc '+
                       'limit 5', 
    { replacements: { userid: request.params.userid }, 
      type: DB.sequelize.QueryTypes.SELECT },
      { model: Proyects }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}

exports.consultarTop5ProyectosBugs = (request, response) => {
    DB.sequelize.query('select p.projectid,p.name, count(*) cantidad from projects p,'+
                       'log_d_detail t '+
                       'where p.projectid = t.projectid '+
                       'And p.userid = :userid '+
                       'group by p.projectid, p.name '+
                       'order by cantidad desc '+
                       'limit 5', 
    { replacements: { userid: request.params.userid }, 
      type: DB.sequelize.QueryTypes.SELECT },
      { model: Proyects }).then(results => {
        response.send(results);
    }).catch(function (err) {
        response.send(err);
    });
}