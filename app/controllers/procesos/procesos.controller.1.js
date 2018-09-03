const configStatement = require('../../core/statement/statement.service');
const DB = require('../../core/db/db');

exports.consultarProcesos = (request, response) => {
    DB.query(configStatement.PROCESOS.consultarProcesos, request, response);
}
exports.agregarProcesos = (request, response) => {
    var entry = request.body;
    var params = [];
    entry.forEach(function (item) {
        params.push([item.nombre, item.descripcion,item.estado]);
    });
    DB.queryParam(configStatement.PROCESOS.agregarProcesos, [params], request, response);  
}
exports.eliminarProceso = (request, response) => {
    DB.queryParam(configStatement.PROCESOS.eliminarProceso, request.params.id, request, response);
}

exports.modificarProceso = (request, response) => {
    var entry = request.body;
    let id = request.params.id
    var param = [entry.nombre, entry.descripcion,entry.estado,id];
    DB.queryParam(configStatement.PROCESOS.modificarProceso, param, request, response); 
}