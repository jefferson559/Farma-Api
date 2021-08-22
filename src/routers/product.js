const express = require('express');

const router = new express.Router();

const Product = require('../model/Product');


router.post('/product', (req, res) => {
    const product = new Product(req.body)
    product.save()
      .then(() =>
      { 
        res
        .status(201)
        .send(product);
      })
      .catch((err) => 
      {
          res
          .status(400)
          .send(err);
      });
});
router.get('/products', (req, res) => 
  {
    Product.find()
    .then((result) => 
    {
        res.send(result)
    })
    .catch(err => res.status(404).send(err));
});
router.patch('/product/:id', (req, res) => {
    const _id = req.params.id;
    Product.findByIdAndUpdate(_id, req.body, 
     {
        new: true,
        runValidators: true
     }).then((product) => {
        if(!product) {
            return res.status(404).send();
        }
        res.send(product);
    }).catch(err => {
        res.status(404).send(err);
    });
});
module.exports = router;
