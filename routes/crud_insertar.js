var express = require('express');
var router = express.Router();
var db = require('../conexion/conexion');   //Importar la conexión

// Toma el request por el método post
router.post('/', function (req, res) {
    let info = req.body;  //tomar los datos que se envían
    db.query('INSERT INTO tbl_productos (titulo, imagen, descripcion, precio) VALUES (?, ?, ?, ?)',
        [info.ins_titulo, info.ins_imagen, info.ins_descripcion, info.ins_precio], function (err, resultado) {
            if (!!err) {
                console.log('Error: ' + err);
            } else {
                console.log("Registro insertado");
            }
            res.redirect('/administrar');
        })
});

module.exports = router;