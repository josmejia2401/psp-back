module.exports = (app) => {
    const op = require('../../controllers/usuarios/usuarios.controller');
    app.get('/api/usuarios/consultar', op.consultarUsuarios);
    app.get('/api/usuarios/consultar/(:userid)', op.consultarUsuario);
    app.post('/api/usuarios/crear', op.crearUsuario);
    app.put('/api/usuarios/modificar/(:userid)', op.modificarUsuario);
    app.delete('/api/usuarios/eliminar/(:userid)', op.eliminarUsuario);
    app.post('/api/usuarios/validar', op.validarUsuario);
    app.get('/api/usuarios/perfiles', op.consultarPerfiles);
};