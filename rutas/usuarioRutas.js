/* 
    Vamos a crear el manejador de rutas de express para nuestra aplicación
    (API).

    Este manejador se encargará de las rutas del lado del backend
*/
const express = require('express');
const UsuarioControl = require('../control/usuarioControl');

var api = express.Router(); // cargamos el manejador de rutas de Express

/*
    A través de las características de una API tenemos acceso
    a los métodos POST, GET, PUT y DELETE. Estos métodos nos van 
    a permitir Agregar datos (POST), obtener datos (GET),
    actualizar datos (PUT) y eliminar datos (DELETE). Estos métodos
    los provee el protocolo HTTP
*/

// Por cada función que vayamos a crear debe existir una ruta
// post('una ruta de acceso', una función a ejecutar)
api.post('/registro', UsuarioControl.crearUsuario);

module.exports = api ; // 
// MVW -> Modelo Vista Cualquiera / Model View Whatever (modelo, vista rutas)
// aplicaciones menos robustas

// MVC aplicaciones más robustas


