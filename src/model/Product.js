const mongoose = require('mongoose');
const Product = mongoose.model('Product', {
  titulo:{
    type: String,
    require:true
  },
  descripcion: {
    type: String,
    required: false,
    validate(value) {
     if (value.length> 100) {
       throw new Error('La descripcion no puede ser mayor a 100 caracteres')
     } 
    }
  },
  precioStock: {
    type: Number,
    required: true
  },precioVenta: {
    type: Number,
    required: false
  },
  porcentajeOferta: {
    type: Number,
    required: false
  },
  tipoDeProducto: {
    type: String,
    required: false
  },
  alt: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  }
});
module.exports = Product;


// Queda comentado porque se llevó al index.js

// // Instancio un nuevo producto
// const product = new Product({
//   name: 'Xiaomi Poco X3',
//   price: 36000
// })

// // Lo guardo
// // product.save().then().catch();

// /* Como el .save() devuelve una promise, lo que hacemos es 

// a) Espererar que se resuelva en el .then()
// b) Esperar el error en el .catch()

// Ambas opciones usan callback.
// */
// product.save()
//   .then(() => { console.log(product) })
//   .catch( (err) => { console.log(err) });