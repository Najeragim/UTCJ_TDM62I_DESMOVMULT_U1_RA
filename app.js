var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Creación de rutas protegidas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var administrarRouter = require('./routes/administrar');
var crud_eliminarRouter = require('./routes/crud_eliminar');
var crud_actualizarRouter = require('./routes/crud_actualizar');
var crud_insertarRouter = require('./routes/crud_insertar');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public')); //Entregar imágenes, archivos CSS y archivos JavaScript en un directorio llamado public

//Llamado de las rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);   //Nueva ruta
app.use('/administrar', administrarRouter);   //Nueva ruta
app.use('/eliminar', crud_eliminarRouter);  //Nueva ruta
app.use('/actualizar', crud_actualizarRouter);  //Nueva ruta
app.use('/insertar', crud_insertarRouter);  //Nueva ruta

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
