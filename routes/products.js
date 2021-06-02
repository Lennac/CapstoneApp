const express = require('express');
const productsRouter = express.Router();

productsRouter.route('/products')
    .get((req, res) => {
        //get all products in db 
    })

productsRouter.route('/products/:id')
    .get((req, res) => {
        //get specific prod by id
    })
    .put((req, res) => {
        //update product inventory 
    })


module.exports = productsRouter;
