module.exports = (app) => {
    const op = require('../../controllers/registrardefecto/registrardefecto.controller');
    app.get('/api/registrardefecto/consultar/(:projectid)', op.consultarRegistroDefecto);
    app.post('/api/registrardefecto/crear', op.crearRegistroDefecto);
    app.put('/api/registrardefecto/modificar/(:defectlogentryid)', op.modificarRegistroDefecto);
    app.delete('/api/registrardefecto/eliminar/(:defectlogentryid)', op.eliminarRegistroDefecto);
}