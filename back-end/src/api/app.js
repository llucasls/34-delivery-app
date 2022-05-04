// import rescue from 'express-rescue';
const express = require('express');
const cors = require('cors');
const rescue = require('express-rescue');
const { validateLogin, 
  validateRegister, errorHandler, validateToken, notFound } = require('./middlewares');
const { Login, Register } = require('./controllers/Login');
const { productsRouter, usersRouter, salesRouter } = require('./routes');

const app = express();
app.use(cors());

app.use(express.json());

app.post('/login', validateLogin, rescue(Login));
app.post('/register', validateRegister, rescue(Register));

app.use('/images', express.static('public'));

app.use(validateToken);

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/sales', salesRouter);

app.use(errorHandler);
app.use(notFound);

module.exports = app;
