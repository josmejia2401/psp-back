module.exports = (app) => {
    const op = require('../../controllers/part/part_type.controller');
    app.get('/api/part/parttype/consultar/(:sizemeasureid)', op.consultar);
    app.post('/api/part/parttype/crear', op.crear);
    app.put('/api/part/parttype/modificar/(:parttypeid)', op.modificar);
    app.delete('/api/part/parttype/eliminar/(:parttypeid)', op.eliminar);
}