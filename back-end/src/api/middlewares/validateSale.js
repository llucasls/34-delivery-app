const Joi = require('joi');
const HTTPCodes = require('../../utils/HTTPCodes');

const saleSchema = Joi.object().keys({
  sellerId: Joi.number().integer().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  saleDate: Joi.date(),
  products: Joi.array().items(Joi.object().keys({
    productId: Joi.number().integer().required(),
    quantity: Joi.number().integer().required(),
  })).required(),
});

const validateSale = (req, res, next) => {
  const { error } = saleSchema.validate(req.body);

  if (error) {
    return res.status(HTTPCodes.BAD_REQUEST).json({
      error: error.details[0].message,
    });
  }

  req.body.saleDate = req.body.saleDate || new Date();

  return next();
};
module.exports = validateSale;