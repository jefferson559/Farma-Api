const mongoose = require('mongoose');
const Banner=mongoose.model('Banner', {
    name:
    {
      type: String,
      required: true,
      validate(value) 
      {
        if (value.length > 30) 
        {
            throw new Error('No se pueden ingresar nombres con más de 10 caracteres')
        } 
      }
    },
    source: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  });
  module.exports = Banner;