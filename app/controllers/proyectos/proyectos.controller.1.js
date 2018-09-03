const configStatement = require('../../core/statement/statement.service');
const DB = require('../../core/db/db');
const dateUtil = require('../../core/util/date.util');
//import UtilDate from '../../core/util/date.util';

exports.init = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Sin datos solicitados, por lo que no se devuelve ninguno.");
    res.end();
}
exports.consultarProyectos = (request, response) => {
    DB.query(configStatement.PROYECTOS.consultarProyectos, request, response);
}
exports.agregarProyectos = (request, response) => {
    var entry = request.body;
    var params = [];
    let dateTransform = new dateUtil.UtilDate();
    entry.forEach(function (item) {
        item.fechaInicio = dateTransform.toDateString(item.fechaInicio);
        item.fechaFin = dateTransform.toDateString(item.fechaFin);
        params.push([item.nombre, item.descripcion,item.lenguaje,item.fechaInicio,
                    item.fechaFin,item.estado]);
    });
    DB.queryParam(configStatement.PROYECTOS.agregarProyectos, [params], request, response);  
}
exports.eliminarProyectos = (request, response) => {
    var entry = request.body;
    var params = [];
    entry.forEach(function (item) {
        if (item.id != null){
            params.push([item.id]);
        }
    });
    DB.queryParam(configStatement.PROYECTOS.eliminarProyectos, [params], request, response);
}

exports.eliminarProyecto = (request, response) => {
    DB.queryParam(configStatement.PROYECTOS.eliminarProyecto, request.params.id, request, response);
}

exports.modificarProyecto = (request, response) => {
    var entry = request.body;
    let id = request.params.id
    let dateTransform = new dateUtil.UtilDate();
    entry.fechaInicio = dateTransform.toDateString(entry.fechaInicio);
    entry.fechaFin = dateTransform.toDateString(entry.fechaFin);
    var param = [entry.nombre, entry.descripcion,entry.lenguaje,entry.fechaInicio,
                entry.fechaFin,entry.estado, id];
    
    DB.queryParam(configStatement.PROYECTOS.modificarProyecto, param, request, response); 
}