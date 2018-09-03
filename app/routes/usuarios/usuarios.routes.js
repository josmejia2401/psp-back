module.exports = (app) => {
    const op = require('../../controllers/usuarios/usuarios.controller');
    app.get('/api/usuarios/consultar', op.consultarUsuarios);
    app.get('/api/usuarios/consultar/(:UserID)', op.consultarUsuario);
    app.post('/api/usuarios/crear', op.crearUsuario);
    app.put('/api/usuarios/modificar/(:UserID)', op.modificarUsuario);
    app.delete('/api/usuarios/eliminar/(:UserID)', op.eliminarUsuario);
    app.post('/api/usuarios/validar', op.validarUsuario);
    app.get('/api/usuarios/perfiles', op.consultarPerfiles);
}