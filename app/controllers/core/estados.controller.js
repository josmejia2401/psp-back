var objects = require("../../core/json/estados.json");

exports.init = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Sin datos solicitados, por lo que no se devuelve ninguno.");
    res.end();
    
}
exports.consultarEstados = (request, response) => {
    console.log('consultarEstados');
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(objects));
}