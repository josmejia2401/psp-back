module.exports = (app) => {
    const op = require('../../controllers/registrardefecto/registrardefecto.controller');
    app.get('/api/registrardefecto/consultar/(:projectid)', op.consultarRegistroDefecto);
    app.post('/api/registrardefecto/crear', op.crearRegistroDefecto);
    app.put('/api/registrardefecto/modificar/(:defectlogentryid)', op.modificarRegistroDefecto);
    app.delete('/api/registrardefecto/eliminar/(:defectlogentryid)', op.eliminarRegistroDefecto);
    app.get('/api/registrardefecto/consultardactual/(:projectid)', op.consultarDefectoActual);
    app.get('/api/registrardefecto/consultardafecha', op.consultarDefectoAlaFecha);
    app.get('/api/registrardefecto/consultardremactual/(:projectid)', op.consultarDefectoRemActual);
    app.get('/api/registrardefecto/consultardremafecha', op.consultarDefectoRemAlaFecha);
}