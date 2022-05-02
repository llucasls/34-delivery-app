// import rescue from 'express-rescue';
const express = require('express');
const rescue = require('express-rescue');
const validateLogin = require('./middlewares/validateLogin');
const validateRegister = require('./middlewares/validateRegister');
const errorHandler = require('./middlewares/errorHandler');
const { Login, Register } = require('./controllers/Login');
const validateToken = require('./middlewares/validateToken');
const { productsRouter, usersRouter, salesRouter } = require('./routes');

const app = express();

app.use(express.json());

app.post('/login', validateLogin, rescue(Login));
app.post('/register', validateRegister, rescue(Register));

app.use(validateToken);

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/sales', salesRouter);

app.use(errorHandler);

module.exports = app;
