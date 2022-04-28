// import rescue from 'express-rescue';
const express = require('express');
const rescue = require('express-rescue');
const validateLogin = require('./middlewares/validateLogin');
const errorHandler = require('./middlewares/errorHandler');
const Login = require('./controllers/Login');

const app = express();

app.use(express.json());

app.use('/login', validateLogin, rescue(Login));

app.use(errorHandler);

module.exports = app;
