// import rescue from 'express-rescue';
const express = require('express');
const rescue = require('express-rescue');
const validateLogin = require('./middlewares/validateLogin');
const validateRegister = require('./middlewares/validateRegister');
const errorHandler = require('./middlewares/errorHandler');
const { Login, Register } = require('./controllers/Login');

const app = express();

app.use(express.json());

app.get('/login', validateLogin, rescue(Login));
app.post('/register', validateRegister, rescue(Register));

app.use(errorHandler);

module.exports = app;
