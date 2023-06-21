var express = require('express');
var router = express.Router();
var db = require('../conexion/conexion');   //Importar la conexión

// Sección Productos
router.get('/', function (req, res, next) {
    db.query("SELECT * FROM tbl_productos", function(err, resultado){               //Hacer la consulta con la variable
        res.render('productos', { title: 'SWG | Productos', Libros:resultado });
    });
});

module.exports = router;

