/* 
Este archivo va a contener toda la lógica de ruteo de express
Declaración de rutas, uso de la libreria body parser 
Permisos de accesos a cualquier cliente (Permisos a angular)
*/

// si este archivo necesita express, se llama:

const express = require('express'); // Importamos Expres
const app = express(); // Aplication express

// qué va a trabaja este archivo?
//configurar las rutas de acceso a cada funcion de nuestra aplicación
//Analizar los datos que se estan enviando por la URL con body parser
//configurar permisos de acceso a cualquier cliente 


/* como este archivo va a contener toda la logica de las rutas, desde este archivo tenemos 
que exportar, entonces:
 */
module.exports = app; //exportamos todo el archivo app

//para verificar abrimos terminal