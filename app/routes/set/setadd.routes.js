module.exports = (app) => {
    const op = require('../../controllers/set/set_add.controller');
    app.get('/api/set/add/consultar/(:projectid)', op.consultar);
    app.post('/api/set/add/crear', op.crear);
    app.put('/api/set/add/modificar/(:setaddid)', op.modificar);
    app.delete('/api/set/add/eliminar/(:setaddid)', op.eliminar);
}