// import rescue from 'express-rescue';
const express = require('express');
const cors = require('cors');
const rescue = require('express-rescue');
const validateLogin = require('./middlewares/validateLogin');
const errorHandler = require('./middlewares/errorHandler');
const Login = require('./controllers/Login');

const app = express();
app.use(cors());

app.use(express.json());

app.post('/login', validateLogin, rescue(Login));

app.use(errorHandler);

module.exports = app;
