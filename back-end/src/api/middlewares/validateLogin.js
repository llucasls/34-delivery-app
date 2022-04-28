const Joi = require('joi');
const HTTPCodes = require('../Utils/HTTPCodes');

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(HTTPCodes.BAD_REQUEST).json({
      error: error.details[0].message,
    });
  }

  return next();
};
module.exports = validateLogin;