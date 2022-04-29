const Joi = require('joi');
const HTTPCodes = require('../../utils/HTTPCodes');

// const userId = 'user_id';
const sellerId = 'seller_id';
const totalPrice = 'total_price';
const deliveryAddress = 'delivery_address';
const deliveryNumber = 'delivery_number';
const saleDate = 'sale_date';

const saleSchema = Joi.object().keys({
  [sellerId]: Joi.number().integer().required(),
  [totalPrice]: Joi.number().required(),
  [deliveryAddress]: Joi.string().required(),
  [deliveryNumber]: Joi.string().required(),
  [saleDate]: Joi.date().required(),
  status: Joi.string().required(),
});

const validateSale = (req, res, next) => {
  const { error } = saleSchema.validate(req.body);

  if (error) {
    return res.status(HTTPCodes.BAD_REQUEST).json({
      error: error.details[0].message,
    });
  }

  return next();
};
module.exports = validateSale;