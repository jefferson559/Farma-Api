require('./db/mongoose');
const express = require('express');
const app = express();
const productR = require('./routers/product');
const bannerR = require('./routers/banner');
app.use(express.json());
app.use(productR);
app.use(bannerR);

 
app.listen(3001, () => {
  console.log('Escuchando puerto 3001');
})
