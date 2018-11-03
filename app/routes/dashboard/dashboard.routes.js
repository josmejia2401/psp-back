module.exports = (app) => {
    const op = require('../../controllers/dashboard/dashboard.controller');
    app.get('/api/dashboard/consultar/terminados/(:userid)', op.consultarProyectosTerminados);
    app.get('/api/dashboard/consultar/archivados/(:userid)', op.consultarProyectosArchivados);
    app.get('/api/dashboard/consultar/encurso/(:userid)', op.consultarProyectosEnCurso);
    app.get('/api/dashboard/consultar/todos/(:userid)', op.consultarProyectos);

    app.get('/api/dashboard/consultar/top5/(:userid)', op.consultarTop5);
    app.get('/api/dashboard/consultar/top5fases/(:userid)', op.consultarTop5Fases);
    app.get('/api/dashboard/consultar/top5bugs/(:userid)', op.consultarTop5Bugs);
    app.get('/api/dashboard/consultar/top5probugs/(:userid)', op.consultarTop5ProyectosBugs);
}