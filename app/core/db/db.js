const configAll = require('../../../config/config');
const dbConfig = configAll.getDataBase(process.env.NODE_ENV);
const mysql = require('mysql');
var   pool  = mysql.createPool(dbConfig);

exports.query = (selectStatement,request,response) => {
    execute(selectStatement,request,response);
}
exports.queryParam = (selectStatement,params,request,response) => {
    executeParams(selectStatement,params,request,response);
}

function execute(selectStatement, request,response){
    console.log(request.sessionID)
    getConnection(function (connection) {
        if(connection instanceof Error){
            processResponse(connection,null,response);
            return;
        }
        connection.query(selectStatement, function(error, row) {
            if(error){
                try {
                    connection.destroy;
                }catch (e){
                    console.log(e);
                }
            }
            processResponse(error,row,response);
            doRelease(connection);
        });
    });
}
function executeParams(selectStatement,params, request,response){
    console.log(request.sessionID);
    console.log(selectStatement);
    console.log(params);
    getConnection(function (connection) {
        if(connection instanceof Error){
            processResponse(connection,null,response);
            return;
        }
        connection.query(selectStatement, params, function(error, row) {
            if(error){
                try {
                    connection.destroy;
                }catch (e){
                    console.log(e);
                }
            }
            processResponse(error,row,response);
            doRelease(connection);
        });
    });
}
function processResponse(error, row, response){
    if (error) {
        console.log('Error en la ejecución de la sentencia.'+error.message);
        response.writeHead(500, {'Content-Type': 'application/json'});
        response.end(JSON.stringify({ status: 500,
                                      message: "Error al obtener los usuarios de AppCliente ",
                                      detailed_message: error.message}));
    } else {
        console.log('La respuesta de la base de datos esta lista.');
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(row));
    }
}

function getConnection(callback){
    if(global.SQLpool === undefined){
        global.SQLpool = pool; //create a global sql pool connection
        console.log('SQLpool definido.');
    }
    global.SQLpool.getConnection(function(err, connection) {
        if(err) {
            console.log(err.message);
            callback(new Error('Error adquiriendo la conexión ...'));
            return;
        }
        connection.on('error', function(err) {
            if(err.code === "PROTOCOL_CONNECTION_LOST") {
            connection.destroy();				
            } else {
            connection.release();
            }
            console.log(err.message);
            callback(new Error('Error adquiriendo la conexión.'));
        });
        callback(connection);
    });
}
function doRelease(connection){
    connection.release(
        function(err) {
            if (err) {
                console.error(err.message);
            }
    });
}

function createTransaction(callback){
    if(global.SQLpool === undefined){
        global.SQLpool = pool; //create a global sql pool connection
        console.log('SQLpool definido.');
    }
    global.SQLpool.getConnection(function(err, connection) {
        if(err) {
            console.log(e.message);
            callback(new Error('Error adquiriendo la conexión ...'));
            return;
        }
        connection.on('error', function(err) {
            if(err.code === "PROTOCOL_CONNECTION_LOST") {
            connection.destroy();				
            } else {
            connection.release();
            }
            console.log(err.message);
            callback(new Error('Error adquiriendo la conexión.'));
        });
        connection.beginTransaction(function(err) {
            if(err){
                console.log(err);
                callback(new Error('Error adquiriendo la transacción.'));
                return;
            }
            callback(connection);
            return;
        });
        callback(connection);
    });
}

   /*
    
    EvalError --- Creates an instance representing an error that occurs regarding the global function eval().

InternalError --- Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".

RangeError --- Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.

ReferenceError --- Creates an instance representing an error that occurs when de-referencing an invalid reference.

SyntaxError --- Creates an instance representing a syntax error that occurs while parsing code in eval().

TypeError --- Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.

URIError --- Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.
    
    */
