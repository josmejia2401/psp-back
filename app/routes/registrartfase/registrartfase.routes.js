module.exports = (app) => {
    const op = require('../../controllers/registrartfase/registrartfase.controller');
    app.get('/api/registrartfase/consultar/(:projectid)', op.consultarTiempoFase);
    app.post('/api/registrartfase/crear', op.crearTiempoFase);
    app.put('/api/registrartfase/modificar/(:pspassgtdataid)', op.modificarTiempoFase);
    app.delete('/api/registrartfase/eliminar/(:pspassgtdataid)', op.eliminarTiempoFase);
} 