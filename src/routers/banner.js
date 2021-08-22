const express = require('express');

const router = new express.Router();

const Banner=require('../model/Banner')

router.get('/banners', (req, res) => 
{
    Banner.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})
router.post('/banner', (req, res) => {
    const banner = new Banner(req.body)
    banner.save()
      .then(() =>
      { 
        res
        .status(201)
        .send(banner);
      })
      .catch((err) => 
      {
          res
          .status(400)
          .send(err);
      });
});
module.exports = router;