const objects = require("../../core/json/processes.json");
const listaTipo = require("../../core/json/processes_type.json");


exports.consultarProcesos = (request, response) => {
    console.log('consultarProcesos');
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(objects));
}

exports.consultarTiposProcesos = (request, response) => {
    console.log('consultarTiposProcesos');
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(listaTipo));
}