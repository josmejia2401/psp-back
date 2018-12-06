module.exports = (app) => {
    const op = require('../../controllers/set/set_base.controller');
    app.get('/api/set/base/consultar/(:projectid)', op.consultar);
    app.post('/api/set/base/crear', op.crear);
    app.put('/api/set/base/modificar/(:partid)', op.modificar);
    app.delete('/api/set/base/eliminar/(:partid)', op.eliminar);
}