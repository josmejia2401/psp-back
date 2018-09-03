module.exports = (app) => {
    const op = require('../../controllers/core/lenguaje-pro.controller');
    app.get('/', op.init);
    app.get('/api/core/lenguaje-prog/todos', op.consultarLenguajesPro);
}