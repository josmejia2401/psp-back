var PROYECTOS = {
    consultarProyectos : 'SELECT id, nombre, descripcion, lenguaje, fechaInicio, fechaFin, estado FROM mydb.proyectos',
    agregarProyectos : 'INSERT INTO mydb.proyectos (NOMBRE,DESCRIPCION, LENGUAJE, FECHAINICIO, FECHAFIN, ESTADO) VALUES ?',
    eliminarProyectos : 'DELETE FROM mydb.proyectos WHERE ID IN (?)',
    eliminarProyecto : 'DELETE FROM mydb.proyectos WHERE ID = ?',
    modificarProyecto : 'UPDATE mydb.proyectos SET NOMBRE = ?, DESCRIPCION = ?, LENGUAJE = ?, FECHAINICIO = ?, FECHAFIN = ?, ESTADO = ? WHERE ID = ?'
}

var PROCESOS = {
    consultarProcesos : 'SELECT id, nombre, descripcion, estado FROM mydb.procesos',
    agregarProcesos : 'INSERT INTO mydb.procesos (NOMBRE,DESCRIPCION,ESTADO) VALUES ?',
    eliminarProceso : 'DELETE FROM mydb.procesos WHERE ID = ?',
    modificarProceso : 'UPDATE mydb.procesos SET NOMBRE = ?, DESCRIPCION = ?, ESTADO = ? WHERE ID = ?'
}
exports.PROYECTOS = PROYECTOS;
exports.PROCESOS = PROCESOS;