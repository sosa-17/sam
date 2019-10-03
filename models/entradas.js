var mongoose = require('mongoose');

//Schema: Define la estructura de los objetos que se guardaran en una coleccion.
var esquema = new mongoose.Schema({
    titulo:String,
    idImagen:String,
    idCategoria:String,
    descripcion:String,
    fechaPublicacion:Date,
    comentarios:Array,
    autor:String,
    permisoComentario:String,
});

//El primer parametro tiene que ser el nombre de la coleccion en mongo (puede ser el singular)
module.exports = mongoose.model('entradas',esquema);