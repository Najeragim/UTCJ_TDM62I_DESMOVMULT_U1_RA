var mysql = require('mysql');

var connection = mysql.createConnection({
    //Variables de conexión
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'ventas'
})

connection.connect(
    (err)=>{
        if(!err){
            console.log('conexion exitosa');
        }else{
            console.log('Error de conexion');
        }
    }
);

module.exports = connection;

/*connection.query("SELECT * FROM tbl_productos", function(err, resultado){
    console.log(resultado);
});

connection.end();*/