const Cancion = require('../modelo/cancion');

function crearCancion(req, res) {
    var cancion = new Cancion();
    var parametros = req.body;
    // Para mayor organización de código vamos a guardar cada propiedad
    // del cuerpo de la petición en la variable usuario
    cancion.titulo = parametros.titulo;
    cancion.numero = parametros.numero;
    cancion.duracion = parametros.duracion;
    cancion.url = null;
    cancion.genero = parametros.genero;
    cancion.artista = parametros.artista;
    cancion.album = parametros.album;
    cancion.save((err, cancionNueva) => {
        if (err) {
            res.status(500).send({
                message: "Error en el servidor :´("
            });
        } else {
            if (!cancionNueva) {
                // 404 -> Página no encontrada
                res.status(404).send({
                    message: "No fue creada la canción"
                });
            } else {
                // 200 -> OK
                res.status(200).send({
                    // modelo Usuario : Nuevo Usuario que se va a guardar
                    cancion: cancionNueva
                });
            }
        }
    });
}
module.exports = {
    crearCancion
};