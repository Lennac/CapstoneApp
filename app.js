const express = require('express');

const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/products', productsRouter);

app.listen(port, () => {
    console.log(`Server listening on Port: ${port}`);
});

module.exports = app;