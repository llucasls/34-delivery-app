const Joi = require('joi');
const HTTPCodes = require('../../utils/HTTPCodes');

const registerSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
  name: Joi.string().required().min(12),
});

const validateLogin = (req, res, next) => {
  const { error } = registerSchema.validate(req.body);

  if (error) {
    return res.status(HTTPCodes.BAD_REQUEST).json({
      error: error.details[0].message,
    });
  }

  return next();
};
module.exports = validateLogin;