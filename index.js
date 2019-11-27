//este archivo va a contener la conexion de node & express con mongo usando la libreria mongoose.

const mongoose = require('mongoose'); //importamos mongoose para la conexión
const app = require('./app'); //vamos a importar la lógica de express
const port = 4000; //declaramos el puerto que deseemos


mongoose.connect('mongodb://localhost:27017/bitmusicAM', (err, res) => {
    if (err) {
        console.log('El error es: ' + err);
    } else {
        console.log('conexión exitosa');
        app.listen(port, () => {
            console.log('Puerto: ' + port);
        });
    }

});