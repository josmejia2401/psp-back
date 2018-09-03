module.exports = (app) => {
    const op = require('../../controllers/core/estados.controller');
    app.get('/', op.init);
    app.get('/api/core/estados/todos', op.consultarEstados);
}