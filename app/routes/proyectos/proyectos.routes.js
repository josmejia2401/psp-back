module.exports = (app) => {
    const op = require('../../controllers/proyectos/proyectos.controller');
    app.get('/api/proyectos/consultar/(:userid)', op.consultarProyectos);
    app.post('/api/proyectos/crear', op.crearProyecto);
    app.put('/api/proyectos/modificar/(:projectid)', op.modificarProyecto);
    app.delete('/api/proyectos/eliminar/(:projectid)', op.eliminarProyecto);
    app.get('/api/proyectos/tipo-proyectos/consultar', op.consultarTiposProyetos);
}