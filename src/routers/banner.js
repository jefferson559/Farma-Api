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

module.exports = router;