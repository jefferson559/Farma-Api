require('./db/mongoose');
const express = require('express');
const app = express();
const productR = require('./routers/product');
const bannerR = require('./routers/banner');
app.use(express.json());
app.use(productR);
app.use(bannerR);
//puerto
const port=process.env.PORT || 3001
//
app.listen(port, () => {
  console.log('Escuchando puerto 3001');
})
