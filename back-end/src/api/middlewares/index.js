const errorHandler = require('./errorHandler');
const validateLogin = require('./validateLogin');
const validateRegister = require('./validateRegister');
const validateToken = require('./validateToken');
const validateSale = require('./validateSale');
const validateAdmin = require('./validateAdmin');
const validateEditSale = require('./validateEditSale');

module.exports = {
  errorHandler,
  validateLogin,
  validateRegister,
  validateToken,
  validateSale,
  validateAdmin,
  validateEditSale,
};