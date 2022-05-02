const errorHandler = require('./errorHandler');
const validateLogin = require('./validateLogin');
const validateRegister = require('./validateRegister');
const validateToken = require('./validateToken');
const validateSale = require('./validateSale');

module.exports = {
  errorHandler,
  validateLogin,
  validateRegister,
  validateToken,
  validateSale,
};