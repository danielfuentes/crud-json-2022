const express = require('express');
const router = express.Router();
const path = require('path');

const controllersProducto = require(path.resolve(__dirname, '..', 'controllers', 'controllersProducto'));

router.get('/productos', controllersProducto.index);

/*
Métodos HTTP
get --> Consultar
post  ---> enviar al servidor - guardar
delete ---> enviar al servidor - borrar
put ---> enviar al servidor - actualiazar

*/

module.exports = router;