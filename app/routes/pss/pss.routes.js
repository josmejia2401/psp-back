module.exports = (app) => {
    const op = require('../../controllers/registrarpss/registrarpss.controller');
    app.get('/api/registrarpss/consultar/(:projectid)', op.consultarPss);
    app.post('/api/registrarpss/crear', op.crearPss);
    app.put('/api/registrarpss/modificar/(:programsizeid)', op.modificarPss);
    app.delete('/api/registrarpss/eliminar/(:programsizeid)', op.eliminarPss);
    app.get('/api/registrarpss/consultar/actualfecha/(:userid)', op.consultarActualFecha);
}