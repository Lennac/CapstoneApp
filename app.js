const express = require('express');

const app = express();
const port = 3000;

const indexRouter = require('./routes/index');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server listening on Port: ${port}`);
});

module.exports = app;