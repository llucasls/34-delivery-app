const Joi = require('joi');
const HTTPCodes = require('../../utils/HTTPCodes');

const saleSchema = Joi.object().keys({
  id: Joi.number().integer().required(),
  status: Joi.string().valid('Pendente', 'Preparando', 'Em Trânsito', 'Entregue').required(),
});

const validateEditSales = (req, res, next) => {
  const { id } = req.params;
  const { error } = saleSchema.validate({ id, ...req.body });

  if (error) {
    return res.status(HTTPCodes.BAD_REQUEST).json({
      error: error.details[0].message,
    });
  }

  return next();
};

module.exports = validateEditSales;