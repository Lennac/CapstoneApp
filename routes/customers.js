const express = require('express');
const customersRouter = express.Router();

customersRouter.route('/')
    .get((req, res) => {
        res.send('Request: GET /customers');
    })
    
    .put((req, res) => {
        
        res.send('Posted')
    });


    customersRouter.route('/:id')
    .get((req, res) => {
        res.send('Request: GET /customers/'+req.params['id']);
    })
    
    .delete((req, res) => {
        res.send('Request: DELETE '+req.params['id']); 
    })
    
    .put((req, res) => {
        let customerId = Number(req.params.id); // is this a number in the db
        res.send('Request: POST '+req.params['id']);
    });

module.exports = customersRouter;