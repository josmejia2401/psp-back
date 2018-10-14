module.exports = (app) => {
    const op = require('../../controllers/registrartiempo/registrartiempo.controller');
    app.get('/api/registrartiempo/consultar/(:projectid)', op.consultarRegistroTiempo);
    app.post('/api/registrartiempo/crear', op.crearRegistroTiempo);
    app.put('/api/registrartiempo/modificar/(:timelogentryid)', op.modificarRegistroTiempo);
    app.delete('/api/registrartiempo/eliminar/(:timelogentryid)', op.eliminarRegistroTiempo);
}