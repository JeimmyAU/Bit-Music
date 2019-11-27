// Importando el modelo usuario para interactuar con el
const Usuario = require('../modelo/usuario');

// req - request - peticion / res - response - respuesta
function crearUsuario(req, res){
    // instanciar - usar el objeto modelo Usuario
    var usuario = new Usuario();
    // guardar el cuerpo de la peticion en una variable
    // para mejor acceso a los datos que el usuario está enviando
    var parametros = req.body;

    // Para mayor organización de código vamos a guardar cada propiedad
    // del cuerpo de la petición en la variable usuario
    usuario.nombre = parametros.nombre;
    usuario.apellido = parametros.apellido;
    usuario.correo = parametros.correo;
    usuario.contrasena = parametros.contrasena;
    usuario.rol = 'usuario';
    usuario.imagen = null;

    usuario.save((err, usuarioCreado)=>{
        if(err){
            // estado de la respuesta del servidor
            // 500 -> errores propios del servidor
            res.status(500).send({
                message: "Error en el servidor :´("
            });
        } else{
            if(!usuarioCreado){
                // 404 -> Página no encontrada 
                res.status(404).send({
                    message: "No se pudo crear el usuario"
                });
            } else{
                // 200 -> OK
                res.status(200).send({
                    // modelo Usuario : Nuevo Usuario que se va a guardar
                    usuario: usuarioCreado
                });
            }
        }
    });
}

module.exports = {
    crearUsuario
};


