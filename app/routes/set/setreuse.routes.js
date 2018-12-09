module.exports = (app) => {
    const op = require('../../controllers/set/set_reuse.controller');
    app.get('/api/set/reuse/consultar/(:projectid)', op.consultar);
    app.post('/api/set/reuse/crear', op.crear);
    app.put('/api/set/reuse/modificar/(:setreuseid)', op.modificar);
    app.delete('/api/set/reuse/eliminar/(:setreuseid)', op.eliminar);
}