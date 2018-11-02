module.exports = (app) => {
    require('../proyectos/proyectos.routes.js')(app);
    require('../core/estados.router')(app);
    require('../procesos/procesos.routes.js')(app);
    require('../usuarios/usuarios.routes')(app);
    require('../registrartiempo/registrartiempo.routes')(app);
    require('../fases/fases.routes')(app);
    require('../registrardefecto/registrardefecto.routes')(app);
    require('../tipodefecto/tipodefecto.routes')(app);
    require('../registrartfase/registrartfase.routes')(app);
}