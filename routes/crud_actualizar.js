var express = require('express');
var router = express.Router();
var db = require('../conexion/conexion');   //Importar la conexión

// Toma el ID por el método post
router.post('/:ID', function (req, res) {
    let id = req.params.ID; //Guardar el ID en una variable
    let nueva_info = req.body;  //tomar los datos que se envían
    db.query('UPDATE tbl_productos SET ? WHERE ID = ?', [nueva_info,id], function (err, resultado) {
        if(!!err){
            console.log('Error: ' + err);
        }else{
            console.log("Registro actualizado");
        }
        res.redirect('/administrar');
    })
});

module.exports = router;