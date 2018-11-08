module.exports = (app, blacklist, jwt) => {
    const op = require('../../controllers/usuarios/usuarios.controller');
    app.get('/api/usuarios/consultar', op.consultarUsuarios);
    app.get('/api/usuarios/consultar/(:userid)', op.consultarUsuario);
    app.post('/api/usuarios/crear', op.crearUsuario);
    app.put('/api/usuarios/modificar/(:userid)', op.modificarUsuario);
    app.delete('/api/usuarios/eliminar/(:userid)', op.eliminarUsuario);
    app.post('/api/usuarios/validar',  function (req, res) {
        op.validarUsuario(req, res,jwt);
      });
    app.get('/api/usuarios/perfiles', op.consultarPerfiles);
    app.get('/api/usuarios/logout', function (req, res) {
        //res.sendStatus(200);
        op.logout(req, res, blacklist, jwt);
      });
};