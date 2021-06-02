const express = require('express');

var ordersRouter = express.Router();

ordersRouter.get('/', function(req, res, next) {
    res.send('Request: GET /orders');
});
ordersRouter.post('/', function(req, res, next) {
    res.send('Request: POST /orders');
});
ordersRouter.get('/:id', function(req, res, next) {
    res.send('Request: GET /orders/'+req.params['id']);
});
ordersRouter.put('/:id', function(req, res, next) {
    res.send('Request: PUT /orders'+req.params['id']);
});
ordersRouter.delete('/:id', function(req, res, next) {
    res.send('Request: DELETE /orders'+req.params['id']);
});

module.exports = ordersRouter;