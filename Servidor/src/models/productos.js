//Estandarizar el documento que voy a crear 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productoSchema = new Schema({
    nombre_tienda: { type: String, required: [true, 'Nombre Tienda obligatorio'] },
    telefono_tienda: { type: Number, required: [true, 'Telefono Tienda obligatorio'] },
    email_tienda: { type: String, required: [true, 'Email Tienda obligatorio'] },
    tipo_producto: { type: String, required: [true, 'Tipo de producto obligatorio'] },
    nombre_producto: { type: String, required: [true, 'Nombre Producto obligatorio'] },
    precio_kg: { type: Number, required: [true, 'Precio Producto obligatorio'] },
    url_img: String,
    usuarioId: String,

},
{collection: 'productos'

});



//Convertir a Modelo

module.exports = mongoose.model('Productos', productoSchema);

