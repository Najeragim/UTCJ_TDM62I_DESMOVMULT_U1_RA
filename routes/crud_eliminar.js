var express = require('express');
var router = express.Router();
var db = require('../conexion/conexion');   //Importar la conexión

// Toma el ID por el método post
router.post('/:ID', function (req, res) {
    let id = req.params.ID; //Guardar el ID en una variable y en el QUERY utilizarlo de forma segura
    db.query('DELETE FROM tbl_productos WHERE ID = ?', [id], function (err, resultado) {
        if(!!err){
            console.log('Error: ' + err);
        }else{
            console.log("Registro eliminado");
        }
        //res.redirect('/administrar');
    })

    db.query('ALTER TABLE tbl_productos AUTO_INCREMENT=1', function (err, resultado) {
        if(!!err){
            console.log('Error: ' + err);
        }else{
            console.log("Conteo reestablecido");
        }
        res.redirect('/administrar');
    })
});

module.exports = router;