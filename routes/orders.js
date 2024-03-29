const express = require('express');

var ordersRouter = express.Router();

ordersRouter.route('/')
    .get((req,res) => {
        res.send('Request: GET /orders')
    })
    .post((req,res) => {
        res.send('Request: PUT /orders')
    })

ordersRouter.route('/:id')
    .get((req,res) => {
        keyValues = "";
        for(key of Object.keys(req.params)){
            keyValues += key;
            keyValues += ": "
            keyValues += req.params[key]
            keyValues += "\n"
        }
        res.send('Request: GET /orders parameters:\n'+keyValues)
    })
    .put((req,res) => {
        res.send('Request: POST /orders'+req.params['id'])
    })
    .delete((req,res) => {
        res.send('Request: DELETE /orders'+req.params['id'])
    })
 
module.exports = ordersRouter;
