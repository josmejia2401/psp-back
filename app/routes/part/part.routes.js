module.exports = (app) => {
    const op = require('../../controllers/part/part.controller');
    app.get('/api/part/consultar/(:userid)', op.consultar);
    app.post('/api/part/crear', op.crear);
    app.put('/api/part/modificar/(:partid)', op.modificar);
    app.delete('/api/part/eliminar/(:partid)', op.eliminar);
}