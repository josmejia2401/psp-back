module.exports = (app) => {
    const op = require('../../controllers/part/part_type_standard.controller');
    app.get('/api/part/type/consultar/(:sizemeasureid)', op.consultar);
    app.post('/api/part/type/crear', op.crear);
    app.put('/api/part/type/modificar/(:parttypestandardi)', op.modificar);
    app.delete('/api/part/type/eliminar/(:parttypestandardi)', op.eliminar);
}