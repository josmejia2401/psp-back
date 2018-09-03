var objs = require("../../core/json/lenguaje_programacion.json");

exports.init = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Sin datos solicitados, por lo que no se devuelve ninguno.");
    res.end();
    
}
exports.consultarLenguajesPro = (request, response) => {
    console.log('consultarLenguajesPro');
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(objs));
}