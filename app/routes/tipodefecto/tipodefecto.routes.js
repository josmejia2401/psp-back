module.exports = (app) => {
    const op = require('../../controllers/tipodefecto/tipodefecto.controller');
    app.get('/api/tipodefecto/consultar', op.consultarTipoDefecto);
    app.post('/api/tipodefecto/crear', op.crearTipoDefecto);
    app.put('/api/tipodefecto/modificar/(:defecttypeid)', op.modificarTipoDefecto);
    app.delete('/api/tipodefecto/eliminar/(:defecttypeid)', op.eliminarTipoDefecto);
}