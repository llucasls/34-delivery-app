const productsService = require('../services/Products');
const HTTPCodes = require('../../utils/HTTPCodes');

const getAll = async (req, res) => {
  const products = await productsService.getAll();

  res.status(HTTPCodes.OK).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const product = await productsService.getById(id);

  res.status(HTTPCodes.OK).json(product);
};

module.exports = { getAll, getById };