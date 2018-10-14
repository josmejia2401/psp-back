module.exports = (app) => {
    const op = require('../../controllers/fases/fases.controller');
    app.get('/api/fases/consultar', op.consultarFases);
    app.post('/api/fases/crear', op.crearFases);
    app.put('/api/fases/modificar/(:phaseid)', op.modificarFases);
    app.delete('/api/fases/eliminar/(:phaseid)', op.eliminarFases);
}