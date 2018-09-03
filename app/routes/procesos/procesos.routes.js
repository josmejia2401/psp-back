module.exports = (app) => {
    const op = require('../../controllers/procesos/procesos.controller');
    app.get('/api/procesos/consultar', op.consultarProcesos);
    app.get('/api/procesos/tipo-procesos/consultar', op.consultarTiposProcesos);
}